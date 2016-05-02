import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: ``,
      type: ``,
      playersMin: ``,
      playersMax: ``,
      description: ``,
      image: ``,
      playingTime: ``,
      designers: ``,
      publishers: ``,
      artists: ``,
      yearPublished: ``,
    };
  },
});
