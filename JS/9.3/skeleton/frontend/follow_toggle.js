function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data('userId');
  this.followState = this.$el.data('initialFollowState');
  console.log(this.$el);
  this.$el.html(this.render());
  // $el . innerHTML = this.render
}
FollowToggle.prototype.render = function() {
    return this.followState === 'followed' ? "Unfollow!" : "Follow!"; 
};

FollowToggle.prototype.handleClick = function(e) {
    e.preventDefault();
    $.ajax{}

};





module.exports = FollowToggle;
