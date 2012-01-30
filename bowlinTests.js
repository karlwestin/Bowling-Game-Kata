
var BowlingScore = TestCase("BowlingScore", {

    setUp: function() { // executed before each test
      g = new Game();
    },

    rollMany: function(times, pins) {
      for(var i = 0; i < times; i++)
        g.roll(pins);
    },


    testZeroes: function() {
      this.rollMany(20, 0);
      assertEquals(0, g.score());
    },

    testOnlyOnes: function() {
      this.rollMany(20, 1);
      assertEquals(20, g.score());
    },

    testOneSpare: function() {
      g.roll(5);
      g.roll(5);
      g.roll(3);
      this.rollMany(17,0);
      assertEquals(16, g.score());
    },
    testTwoSpares: function() {
      g.roll(5);
      g.roll(5);
      g.roll(3);
      g.roll(7);
      g.roll(1);
      this.rollMany(15,0);
      assertEquals(25, g.score());
    },
    testOneStrike: function() {
      g.roll(10);
      g.roll(3);
      g.roll(4);
      this.rollMany(16,0);
      assertEquals(24, g.score());
    },
    testPerfectSeries: function() {
      this.rollMany(12, 10);
      assertEquals(300, g.score());
    },
    testRandom2: function() {
      var sc = [7,2,9,0,9,0,9,0,9,1,9,1,10,10,8,0,7,1];
      sc.forEach(g.roll);
      assertEquals(137, g.score());
    },
    testRandom3: function() {
      var sc = [0,6,9,1,10,6,3,7,1,9,0,5,5,10,7,3,7,0];
      sc.forEach(g.roll);
      assertEquals(135, g.score());
    },
    testRandom4: function() {
      var sc = [10,10,10,6,0,10,6,3,7,0,6,1,10,6,7];
      sc.forEach(g.roll);
      assertEquals(236, g.score()); // gives 156
    },
    testRandom5: function() {
      var sc = [10,8,2,5,5,7,3,10,10,7,1,10,10,10,10,8];
      sc.forEach(g.roll);
      assertEquals(263, g.score()); // gives 213
    }
});
