import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', {path: '/'}, function() {
    this.route('info');
    this.route('strategy');
    this.route('new');
    this.route('elimination-games');
    this.route('physical');
  });
});

export default Router;
