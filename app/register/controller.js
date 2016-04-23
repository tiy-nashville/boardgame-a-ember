import Ember from 'ember';

export default Ember.Controller.extend({
  newGamer() {
    const gamer = this.store.createRecord(`gamer`, attr);

    gamer.save().then(() => {
      this.transitionToRoute(`games`);
    })
  }
});
