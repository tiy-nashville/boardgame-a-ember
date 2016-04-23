import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      messages: this.store.findAll(`message`),
      game: this._super(...arguments),
    });
  },
});
