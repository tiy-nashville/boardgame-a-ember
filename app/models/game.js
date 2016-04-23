import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  minPlayers: attr(),
  maxPlayers: attr(),
  description: attr(),
  image: attr(),
  playingTime: attr(),
  designers: attr(),
  publishers: attr(),
  artists: attr(),
  yearPublished: attr(),
  room: belongsTo('room'),
});
