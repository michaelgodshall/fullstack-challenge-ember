import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  address: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr(),
  number_of_bedrooms: DS.attr(),
  // is_completed: DS.attr(),
  // completed_at: DS.attr('date'),
  created_at: DS.attr('date'),
  persons: DS.hasMany('person'),
  vehicles: DS.hasMany('vehicle'),

  fullAddress: Ember.computed('address', 'city', 'state', 'zip', function() {
    return `${this.get('address')}, ${this.get('city')}, ${this.get('state')} ${this.get('zip')}`;
  })
});
