import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // Prevent Ember Data from customizing attribute keys
  keyForAttribute(key) { return key }
});
