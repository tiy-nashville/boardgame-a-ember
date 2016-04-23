import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register', {path: '/'});
  this.route('games', function() {
    this.route('info');
  });
  this.route('login');
});

export default Router;
