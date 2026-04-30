// tests.js

const expect = chai.expect;

describe('integerToRoman', function() {

  it('TC-1: 1 -> I', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('TC-2: 4 -> IV', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('TC-3: 9 -> IX', function() {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('TC-4: 58 -> LVIII', function() {
    expect(integerToRoman(58)).to.equal('LVIII');
  });

  it('TC-5: 1994 -> MCMXCIV', function() {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });

  it('TC-6: 3999 -> MMMCMXCIX', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('TC-7: 0 should throw an error', function() {
    expect(() => integerToRoman(0)).to.throw();
  });

  it('TC-8: 4000 should throw an error', function() {
    expect(() => integerToRoman(4000)).to.throw();
  });

});

describe('romanToInteger', function() {

  it('TC-9: I -> 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('TC-10: IV -> 4', function() {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('TC-11: IX -> 9', function() {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('TC-12: LVIII -> 58', function() {
    expect(romanToInteger('LVIII')).to.equal(58);
  });

  it('TC-13: MCMXCIV -> 1994', function() {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });

  it('TC-14: MMMCMXCIX -> 3999', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('TC-15: empty input should throw an error', function() {
    expect(() => romanToInteger('')).to.throw();
  });

  it('TC-16: invalid repetition IIII should throw an error', function() {
    expect(() => romanToInteger('IIII')).to.throw();
  });

  it('TC-17: invalid subtractive form IC should throw an error', function() {
    expect(() => romanToInteger('IC')).to.throw();
  });

  it('TC-18: invalid characters ABC should throw an error', function() {
    expect(() => romanToInteger('ABC')).to.throw();
  });

});

