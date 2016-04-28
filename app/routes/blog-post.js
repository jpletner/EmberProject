import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveComment(comment) {
      let blogPost = this.controller.get('model');
      this.store.createRecord('comment', {
        blogPost: blogPost,
        content: comment
      }).save();
    }
  }
});
