/* Roman to arabic */

var NumeralConverter = (function() {


    return {
      
       romanToArabic: function(roman) {
           
           var ones  = 0,
               fives = 0,
               tens  = 0,
               fifties = 0,
               result = 0,
               lCount = roman.split(/L/g).length -1,
               xCount = roman.split(/X/g).length -1,
               vCount = roman.split(/V/g).length -1,
               iCount = roman.split(/I/g).length -1;

           if (/IV/.test(roman)) {
              iCount += 3;
              vCount -= 1;
           }
           
           if (/IX/.test(roman)) {
              iCount += 8;
              xCount -= 1;
           }
           if (/XL/.test(roman)) {
              xCount += 3;
              lCount -= 1;
           }


           if(vCount > 0)
              fives = vCount * 5;
           if(xCount > 0)
               tens = xCount * 10;
           if(lCount > 0)
               tens += lCount * 50;

           ones = iCount;

           return tens + fives + ones;
       },
        
        arabicToRoman: function(arabic) {

        }

    }

})();
