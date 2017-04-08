import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('household', params.household_id, {
      include: 'persons,vehicles',
      reload: true // delay loading until persons and vehicles have loaded
    })

    // const queryParams = { household: params.household_id };
    //
    // return Ember.RSVP.hash({
    //   household: this.get('store').findRecord('household', params.household_id),
    //   persons: this.get('store').query('person', queryParams),
    //   vehicles: this.get('store').query('vehicle', queryParams)
    // });
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
