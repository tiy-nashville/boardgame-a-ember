import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', {path: '/'}, function() {
    this.route('info', { path: `/:game_id` });
    this.route('strategy');
    this.route('new');
    this.route('elimination-games');
    this.route('physical');
  });
  this.route('register');
  this.route('login');
});

export default Router;
