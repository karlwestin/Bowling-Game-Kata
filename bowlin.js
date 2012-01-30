var Game = function() {
    
    var rolls = [];

    return {

      rolls: rolls,

      roll: function(pins) {
          rolls.push(pins);
      },

      score: function() {
          var score = 0;

          for(var i = 0; i < 10; i++) {
              if(rolls[0] === 10)
                  score += rolls.shift() + rolls[0] + rolls[1];
              else if(rolls[0] + rolls[1] === 10)
                  score += rolls.shift() + rolls.shift() + rolls[0];
              else
                  score += rolls.shift() + rolls.shift();
          }
          return score;
      },

    };
};
