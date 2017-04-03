import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
          "id": 39,
          "address": "128 Larkin Cir",
          "city": "Folsom",
          "state": "CA",
          "zip": "95630",
          "number_of_bedrooms": 3,
          "is_completed": false,
          "completed_at": null,
          "created_at": "2017-03-20T09:16:13.378208Z"
      },
      {
          "id": 41,
          "address": "3722 Sweetwater Dr",
          "city": "Rocklin",
          "state": "CA",
          "zip": "95677",
          "number_of_bedrooms": 4,
          "is_completed": false,
          "completed_at": null,
          "created_at": "2017-03-20T16:10:18.384496Z"
      }
    ];
  }
});
