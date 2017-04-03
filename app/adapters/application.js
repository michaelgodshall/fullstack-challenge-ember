import DS from 'ember-data';
import ENV from 'fullstack-challenge-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.API_HOST,
  namespace: ENV.APP.API_NAMESPACE,
  headers: {
    'Authorization': `Token ${ENV.APP.API_TOKEN}`
  }
});
