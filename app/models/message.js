import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  content: attr(),
  createdAt: attr(),
  gamer: belongsTo(`gamer`),
  room: belongsTo(`room`),
});
