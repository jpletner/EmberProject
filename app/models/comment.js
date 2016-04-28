import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

const { belongsTo } = DS;

export default Model.extend({
  content: attr('string'),
  blogPost: belongsTo('blog-post')
});
