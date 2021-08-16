const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User');
const keys = require('../../config/keys');


router.get("/test", (req, res) => res.json({ msg: "This is the users route"}));
  //test
router.get('/current', passport.authenticate('jwt', {session: false}), (req,res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
})

router.post('/register', (req, res) => {
  // by searching for an email in the db we can determine uniqueness
  const { errors, isValid } = validateRegisterInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        // when one is found we throw an error
        errors.email = "User already exists";
        return res.status(400).json(errors);
      } else {
        // when if (user//response from db search) returns false
        // create new user 
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          // debugger
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                const payload = { id: user.id, handle: user.handle };
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
}); 

router.post('/login', (req,res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // request response to /api/user/login
  const handle = req.body.handle;
  const password = req.body.password;
    // user params . require
  User.findOne({handle}).then(user => {
      if (!user) {
        errors.handle = "This user does not exist";
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            } else {
              errors.password = "Incorrect password";
              return res.status(400).json(errors);
            }
        });
    });
});


module.exports = router; 
