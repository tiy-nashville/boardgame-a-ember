import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  type: attr(),
  playersMin: attr(),
  playersMax: attr(),
  description: attr(),
  image: attr(),
  playingTime: attr(),
  designers: attr(),
  publishers: attr(),
  artists: attr(),
  yearPublished: attr()
});
