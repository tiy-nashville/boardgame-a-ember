import Ember from 'ember';

export default Ember.Controller.extend ({
  saveGames(attr) {
    const games = this.store.createRecord(`game`, attr);

    games.save().then(() => {
      this.transitionToRoute(`games`);
    });
  },
});
