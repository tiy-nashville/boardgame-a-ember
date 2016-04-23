import Ember from 'ember';

export default Ember.Controller.extend({
  newGamer(attr) {
    const gamer = this.store.createRecord(`gamer`, attr);

    gamer.save().then(() => {
      this.transitionToRoute(`games`);
    });
  },
});
