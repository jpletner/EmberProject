import Ember from 'ember';

export default Ember.Component.extend({
  commentContent: '',

  actions: {
    saveComment() {
      let comment = this.get('commentContent');
      this.sendAction('saveComment', comment);
      this.set('commentContent', '');
    }
  }
});
