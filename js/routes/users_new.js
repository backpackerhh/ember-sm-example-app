App.UsersNewRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    return Em.Object.create({});
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersNewController
  renderTemplate: function(){
    this.render('user.edit', {
      controller: 'usersNew'
    });
  }
});