import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const queryParams = { household: params.household_id };

    return {
      household: this.get('store').findRecord('household', params.household_id),
      persons: this.get('store').query('person', queryParams),
      vehicles: this.get('store').query('vehicle', queryParams)
    }
  }
});
