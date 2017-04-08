import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('households.show');
  },

  actions: {
    delete() {
      let controller = this.controller;
      let household = controller.get('model');
      // Delete the household
      household.destroyRecord().then(() => {
        // Redirect to households index
        controller.transitionToRoute('households.index');
      });
    }
  }
});
