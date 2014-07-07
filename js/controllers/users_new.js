App.UsersNewController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var user = this.store.createRecord('user', this.get('model'));
      user.save();

      // redirects to the user itself
      this.transitionToRoute('user', user);
    }
  }
});