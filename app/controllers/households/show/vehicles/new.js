import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectPerson(value) {
      this.get('store').findRecord('person', value)
        .then((person) => {
          this.get('model').set('person', person);
        });
    }
  }
});
