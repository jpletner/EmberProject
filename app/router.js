import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog-post', {
    path: '/post/:blog_post_id'
  });
});

export default Router;
