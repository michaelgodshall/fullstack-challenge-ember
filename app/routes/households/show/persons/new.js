import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let household = this.modelFor('households.show');
    return this.get('store').createRecord('person', {
      household: household
    });
  },

  deactivate() {
    // This hook is executed when the router completely exits this route.
    let person = this.controller.get('model');
    // Delete the person if it was never saved to the server
    if (person.get('isNew')) {
      person.deleteRecord();
    }
  },

  actions: {
    create() {
      let controller = this.controller;
      let person = controller.get('model');

      person.save().then(() => {
        controller.transitionToRoute('households.show', person.get('household'));
      }).catch(() => {
        console.log(person.get('isValid'));
      })
    }
  }
});
