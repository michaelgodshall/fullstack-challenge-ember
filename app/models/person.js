import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  email: DS.attr(),
  age: DS.attr(),
  gender: DS.attr(),
  created_at: DS.attr('date'),
  household: DS.belongsTo('household'),

  fullName: Ember.computed('first_name', 'last_name', function () {
    return `${this.get('first_name')} ${this.get('last_name')}`;
  }),

  genderDisplay: Ember.computed('gender', function () {
    const gender = this.get('gender');
    if (gender === 'f') {
      return 'female';
    } else if (gender === 'm') {
      return 'male';
    }
  })
});
