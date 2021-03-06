var expect = require('../test-helper').expect;
var LetterDecoder = require('../test-helper').letterDecoder;

describe('Letter Decoder', function() {
  beforeEach(function() {
    this.ld = new LetterDecoder;
  });

  it('decodes single single letters correctly', function() {
    var ld = this.ld;

    expect(ld.decode('10111')).to.equal('a');
    expect(ld.decode('1110111010111')).to.equal('q');
  });
});