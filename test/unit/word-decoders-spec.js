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

  it('handles trailing whitespace', function() {
    var dec = this.dec;

    expect(dec.decode('101110000000101110000000')).to.equal('a a ');
    expect(dec.decode('1011100000000000000')).to.equal('a  ');
    expect(dec.decode('101110000000000000010111')).to.equal('a  a');
  });

  it('decodes a complex sentence', function() {
    var dec = this.dec;
    var encoded = '111000101010100010100010101000000010100010101000000010111000000010111010001000101110001011101010001011101010001110101110111000111011101010111011100000001011101000100010111000101110101000101110101000111010111011100000001110101110100011101110111000111011100010111011101000101110101000100011101010111000000010101000100011101000111000100011101000111010111010001000101110101110101110001011101011101011100010111010111010111';

    expect(dec.decode(encoded)).to.equal('this is a really, really complex sentence...');
  });
});