beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;
// console.log('ddd');
          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
});
