const FollowToggle = require("./follow_toggle");

// function responsible for behaviour of  each follow unfollow, pass=> current user and user to be followed/unfollowed; 

$('button.follow-toggle')
.each(function (idx, el) {
    new FollowToggle(el);
    });

// $(() => {
//     .each()
// } 