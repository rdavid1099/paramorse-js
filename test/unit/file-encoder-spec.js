var expect = require('../test-helper').expect;
var FileEncoder = require('../test-helper').fileEncoder;

describe('File Encoder', function() {
  beforeEach(function() {
    this.fe = new FileEncoder;
  });

  it('loads text files', function() {
    var fe = this.fe;

    expect(fe.loadFile('testing.txt')).to.equal(true);
    expect(fe.fileContents()).to.equal('This is a test text file. Hello world... foo bar... and all the cliche coding terms.\nSudo apt-get all the things.');
  });
});