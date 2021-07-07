
const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
// spacerock inherits from MovingObject

Asteroid.COLOR = function() {
    return "#653D34";
};
Asteroid.RADIUS = function() {
    return 50;
};


function Asteroid(pos){
    
    const options = {
        color : Asteroid.COLOR(),
        vel : Util.randomVec(Math.floor(Math.random() * 10)),
        pos : pos,
        radius : Asteroid.RADIUS()
    };
    MovingObject.call(this, options);
        
    }
Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;