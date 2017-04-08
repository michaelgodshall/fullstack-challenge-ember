import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('household');
  },

  deactivate() {
    // This hook is executed when the router completely exits this route.
    let household = this.controller.get('model');
    // Delete the household if it was never saved to the server
    if (household.get('isNew')) {
      household.deleteRecord();
    }
  },

  actions: {
    create() {
      let controller = this.controller;
      let household = controller.get('model');

      household.save().then(() => {
        controller.transitionToRoute('households.show', household);
      }).catch(() => {
        console.log(household.get('isValid'));
      })
    }
  }
});
