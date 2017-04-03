import DS from 'ember-data';

export default DS.Model.extend({
  make: DS.attr(),
  model: DS.attr(),
  year: DS.attr(),
  license_plate: DS.attr(),
  created_at: DS.attr('date'),
  household: DS.belongsTo('household'),
  person: DS.belongsTo('person')
});
