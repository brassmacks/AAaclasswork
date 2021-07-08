
function FollowToggle(el) {
    this.userId = el.user-id;
    this.followState = el.initial-follow-state;
    this.$el = $(el);
}

module.exports = FollowToggle;