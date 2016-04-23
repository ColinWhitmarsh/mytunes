var PlayerView = Backbone.View.extend({
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  events: {
    'ended': function() {
      this.model.dequeue();
      this.model.playFirst();
      this.render();
    }
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
