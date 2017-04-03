import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      household: this.get('store').findRecord('household', params.household_id),
      persons: this.get('store').query('person', { household: params.household_id })
    }
  }
});
