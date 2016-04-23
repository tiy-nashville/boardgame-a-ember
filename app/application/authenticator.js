import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';

export default Loopback.extend({
  loginEndpoint: `https://boardmeeting-api.herokuapp.com/gamers/login?include=user`,
});
