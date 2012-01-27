/* Roman to arabic TESTS */

var RomanToArabic = TestCase("RomanToArabic", {
  testPassing1: function () {
        assertEquals(1, NumeralConverter.romanToArabic("I") );
  },
  testPassing2: function() {
        assertEquals(2, NumeralConverter.romanToArabic("II"));
  },
  testPassing3: function() {
        assertEquals(3, NumeralConverter.romanToArabic("III"));
  },
  testPassing4: function() {
        assertEquals(4, NumeralConverter.romanToArabic("IV"));
  },
  testPassing5: function() {
        assertEquals(5, NumeralConverter.romanToArabic("V"));
  },
  testPassing6: function() {
        assertEquals(6, NumeralConverter.romanToArabic("VI"));
  },
  testPassing7: function() {
        assertEquals(7, NumeralConverter.romanToArabic("VII"));
  },
  testPassing8: function() {
        assertEquals(8, NumeralConverter.romanToArabic("VIII"));
  },
  testPassing9: function() {
        assertEquals(9, NumeralConverter.romanToArabic("IX"));
  },
  testPassing10: function() {
        assertEquals(10, NumeralConverter.romanToArabic("X"));
  },
  testPassing11: function() {
        assertEquals(11, NumeralConverter.romanToArabic("XI"));
  },
  testPassing13: function() {
        assertEquals(13, NumeralConverter.romanToArabic("XIII"));
  },
  testPassing14: function() {
        assertEquals(14, NumeralConverter.romanToArabic("XIV"));
  },
  testPassing15: function() {
        assertEquals(15, NumeralConverter.romanToArabic("XV"));
  },
  testPassing16: function() {
        assertEquals(16, NumeralConverter.romanToArabic("XVI"));
  },
  testPassing17: function() {
        assertEquals(17, NumeralConverter.romanToArabic("XVII"));
  },
  testPassing18: function() {
        assertEquals(18, NumeralConverter.romanToArabic("XVIII"));
  },
  testPassing19: function() {
        assertEquals(19, NumeralConverter.romanToArabic("XIX"));
  },
  testPassing20: function() {
        assertEquals(20, NumeralConverter.romanToArabic("XX"));
  },
  testPassing21: function() {
        assertEquals(21, NumeralConverter.romanToArabic("XXI"));
  },
  testPassing23: function() {
        assertEquals(23, NumeralConverter.romanToArabic("XXIII"));
  },
  testPassing24: function() {
        assertEquals(24, NumeralConverter.romanToArabic("XXIV"));
  },
  testPassing25: function() {
        assertEquals(25, NumeralConverter.romanToArabic("XXV"));
  },
  testPassing26: function() {
        assertEquals(26, NumeralConverter.romanToArabic("XXVI"));
  },
  testPassing27: function() {
        assertEquals(27, NumeralConverter.romanToArabic("XXVII"));
  },
  testPassing28: function() {
        assertEquals(28, NumeralConverter.romanToArabic("XXVIII"));
  },
  testPassing29: function() {
        assertEquals(29, NumeralConverter.romanToArabic("XXIX"));
  },  
  testPassing30: function() {
        assertEquals(30, NumeralConverter.romanToArabic("XXX"));
  },
  testPassing31: function() {
        assertEquals(31, NumeralConverter.romanToArabic("XXXI"));
  },
  testPassing33: function() {
        assertEquals(33, NumeralConverter.romanToArabic("XXXIII"));
  },
  testPassing34: function() {
        assertEquals(34, NumeralConverter.romanToArabic("XXXIV"));
  },
  testPassing35: function() {
        assertEquals(35, NumeralConverter.romanToArabic("XXXV"));
  },
  testPassing36: function() {
        assertEquals(36, NumeralConverter.romanToArabic("XXXVI"));
  },
  testPassing37: function() {
        assertEquals(37, NumeralConverter.romanToArabic("XXXVII"));
  },
  testPassing38: function() {
        assertEquals(38, NumeralConverter.romanToArabic("XXXVIII"));
  },
  testPassing39: function() {
        assertEquals(39, NumeralConverter.romanToArabic("XXXIX"));
  },  
  testPassing40: function() {
        assertEquals(40, NumeralConverter.romanToArabic("XL"));
  },
  testPassing41: function() {
        assertEquals(41, NumeralConverter.romanToArabic("XLI"));
  },
  testPassing43: function() {
        assertEquals(43, NumeralConverter.romanToArabic("XLIII"));
  },
  testPassing44: function() {
        assertEquals(44, NumeralConverter.romanToArabic("XLIV"));
  },
  testPassing45: function() {
        assertEquals(45, NumeralConverter.romanToArabic("XLV"));
  },
  testPassing46: function() {
        assertEquals(46, NumeralConverter.romanToArabic("XLVI"));
  },
  testPassing47: function() {
        assertEquals(47, NumeralConverter.romanToArabic("XLVII"));
  },
  testPassing48: function() {
        assertEquals(48, NumeralConverter.romanToArabic("XLVIII"));
  },
  testPassing49: function() {
        assertEquals(49, NumeralConverter.romanToArabic("XLIX"));
  },
   testPassing50: function() {
        assertEquals(50, NumeralConverter.romanToArabic("L"));
  },
  testPassing61: function() {
        assertEquals(61, NumeralConverter.romanToArabic("LXI"));
  },
  testPassing79: function() {
        assertEquals(79, NumeralConverter.romanToArabic("LXXIX"));
  },
  testPassing84: function() {
        assertEquals(84, NumeralConverter.romanToArabic("LXXXIV"));
  },
  testPassing99: function() {
        assertEquals(99, NumeralConverter.romanToArabic("XCIX"));
  },
  testPadding100: function() {
        assertEquals(100, NumeralConverter.romanToArabic("C"));
  },
  testPassing495: function() {
        assertEquals(495, NumeralConverter.romanToArabic("CDXCV"));
  },
  testPassing1000: function() {
        assertEquals(1000, NumeralConverter.romanToArabic("M"));
  },

});



