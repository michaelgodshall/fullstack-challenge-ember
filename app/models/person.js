import DS from 'ember-data';
import Ember from 'ember';

const SelectOption = Ember.Object.extend({
  value: null,
  display: null
})

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

  genderDisplay: Ember.computed('gender', 'genderOptions', function () {
    const gender = this.get('gender');
    const genderOptions = this.get('genderOptions');
    if (gender) {
      return genderOptions.findBy('value', gender).display;
    }
    return '';
  }),

  genderOptions: [
    SelectOption.create({value: 'f', display: 'Female'}),
    SelectOption.create({value: 'm', display: 'Male'})
  ]
});
