import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('person', 'persons');

// Meet Ember Inspector's expectation of an export
export default {};
