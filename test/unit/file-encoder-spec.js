var expect = require('../test-helper').expect;
var FileEncoder = require('../test-helper').fileEncoder;
var fs = require('fs');

describe('File Encoder', function() {
  beforeEach(function() {
    this.fe = new FileEncoder;
    this.encodePath = '../../bin/.encoded/encoded-test.txt';
  });

  it('loads text files', function() {
    var fe = this.fe;

    expect(fe.loadFile('testing.txt')).to.equal(true);
    expect(fe.fileContents()).to.equal('This is a test text file. Hello world... foo bar... and all the cliche coding terms.\nSudo apt-get all the things.');
  });

  it('encodes loaded text file to bin/.encoded', function() {
    var fe = this.fe;

    expect(fe.encode('testing.txt', 'encoded-test.txt')).to.equal(1015);
  });
});