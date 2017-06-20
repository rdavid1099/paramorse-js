var expect = require('../test-helper').expect;
var Decoder = require('../test-helper').decoder;

describe('Word Decoder', function() {
  beforeEach(function() {
    this.dec = new Decoder;
  });

  it('decodes a word from morse to english', function() {
    var dec = this.dec;

    expect(dec.decode("1011101110001110111011100010111010001110101")).to.equal("word");
  });

  it('decodes multiple words', function() {
    var dec = this.dec;

    expect(dec.decode('1011100000001011101110001110111011100010111010001110101')).to.equal('a word');
  });
});