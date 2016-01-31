// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add',
      function() {
        if(this.length === 1) this.playFirst();
      }, this);

    this.on('ended', this.ended, this);

    this.on('dequeue', this.dequeue, this);
  },

  dequeue: function() {
    this.shift();
  },

  ended: function() {
    this.dequeue();
    if (this.length > 0) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});
