import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('household', params.household_id, {
      include: 'persons,vehicles',
      reload: true // Reload the household so that persons and vehicles are loaded at the same time
    })

    // const queryParams = { household: params.household_id };
    //
    // return Ember.RSVP.hash({
    //   household: this.get('store').findRecord('household', params.household_id),
    //   persons: this.get('store').query('person', queryParams),
    //   vehicles: this.get('store').query('vehicle', queryParams)
    // });
  }
});
