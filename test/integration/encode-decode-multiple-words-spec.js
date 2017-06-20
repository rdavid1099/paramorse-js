var expect = require('../test-helper').expect;
var Decoder = require('../test-helper').decoder;
var Encoder = require('../test-helper').encoder;

describe('Encoding and Decoding complex sentences', function() {
  beforeEach(function() {
    this.enc = new Encoder;
    this.dec = new Decoder;
  });

  it('encodes the sentence and decodes the sentence working together', function() {
    var enc = this.enc;
    var dec = this.dec;

    var encoded = enc.encode('This is a really, really complex sentence...  ');
    var decoded = dec.decode(encoded);

    expect(decoded).to.equal('this is a really, really complex sentence...  ');
  });
});