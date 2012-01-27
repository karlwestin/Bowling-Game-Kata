/* Roman to arabic */

var NumeralConverter = (function() {


    return {
      
       romanToArabic: function(roman) {
           roman = roman.toUpperCase();
           var letters = ["M", "D", "C", "L", "X", "V", "I"],
               values = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 },
               sum = 0;
           for(var i=0; i<roman.length; i++) {
                if (typeof roman[i+1]!= "undefined" && letters.indexOf(roman[i]) > letters.indexOf(roman[i+1]) ) {
                    sum += values[roman[i+1]] - values[roman[i]];
                    i++;
                } else {
                    sum += values[roman[i]];
                }
           }
           return sum;

       },
        
        arabicToRoman: function(arabic) {

        }

    }

})();
