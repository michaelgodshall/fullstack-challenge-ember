import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('households', function() {
    this.route('show', { path: '/:household_id' }, function() {
      this.route('persons', function() {
        this.route('new');
      });
    });
    this.route('new');
  });

  this.route('vehicles', function() {});
});

export default Router;
