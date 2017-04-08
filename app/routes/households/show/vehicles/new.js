import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let household = this.modelFor('households.show');
    return this.get('store').createRecord('vehicle', {
      household: household
    });
  },

  deactivate() {
    // This hook is executed when the router completely exits this route.
    let vehicle = this.controller.get('model');
    // Delete the person if it was never saved to the server
    if (vehicle.get('isNew')) {
      vehicle.deleteRecord();
    }
  },

  actions: {
    create() {
      let controller = this.controller;
      let vehicle = controller.get('model');

      vehicle.save()
        .then(() => {
          controller.transitionToRoute('households.show', vehicle.get('household'));
        })
        .catch(() => {
          console.log(vehicle.get('isValid'));
        });

    }
  }
});
