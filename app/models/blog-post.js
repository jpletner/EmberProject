import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

const { hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  publishedDate: attr('date'),
  comments: hasMany('comment')
});
