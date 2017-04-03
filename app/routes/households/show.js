import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.get('store').findRecord('household', params.household_id, {include: 'persons,vehicles'})

    const queryParams = { household: params.household_id };

    return Ember.RSVP.hash({
      household: this.get('store').findRecord('household', params.household_id),
      persons: this.get('store').query('person', queryParams),
      vehicles: this.get('store').query('vehicle', queryParams)
    });
  },

  actions: {
    delete: function() {
      const controller = this.controller;
      const household = controller.get('model').household
      // Delete the household
      household.destroyRecord().then(function() {
        // Redirect to households index
        controller.transitionToRoute('households.index');
      });
    }
  }
});
