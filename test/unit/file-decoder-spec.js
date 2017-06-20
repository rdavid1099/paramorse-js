var expect = require('../test-helper').expect;
var FileDecoder = require('../test-helper').fileDecoder;

describe('File Decoder', function() {
  beforeEach(function() {
    this.fd = new FileDecoder;
  });

  it('loads given file', function() {
    var fd = this.fd;

    expect(fd.loadFile('encoded-test.txt')).to.equal(true);
  });

  it('decodes given file and saves to results', function() {
    var fd = this.fd;

    expect(fd.decode('encoded-test.txt', 'testing-output.txt')).to.equal(113);
  });
});