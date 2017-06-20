var expect = require('../test-helper').expect;
var LetterEncoder = require('../test-helper').letterEncoder;

describe('Letter Encoder', function() {
  beforeEach(function() {
    this.le = new LetterEncoder;
  });

  it('encodes english to morse code', function() {
    var le = this.le;

    expect(le.encode('a')).to.equal('10111');
    expect(le.encode('A')).to.equal('10111');
    expect(le.encode('q')).to.equal('1110111010111');
  });

});