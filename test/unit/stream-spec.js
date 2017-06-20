var expect = require('../test-helper').expect;
var Stream = require('../test-helper').stream;

describe('Streaming', function() {
  beforeEach(function() {
    this.stream = new Stream;
  });

  it('can receive one piece of data', function() {
    var stream = this.stream;
    stream.receive('1');

    expect(stream.data()).to.equal('1');
  });

  it('can receive multiple pieces of data', function() {
    var stream = this.stream;
    stream.receive('1');
    stream.receive('0');
    stream.receive('1');
    stream.receive('1');
    stream.receive('1');

    expect(stream.data()).to.equal('10111');
  });

  it('can decode all data in stream', function() {
    var stream = this.stream;
    stream.receive("1");
    stream.receive("0");
    stream.receive("1");
    stream.receive("0");
    stream.receive("1");
    stream.receive("0");
    stream.receive("1");
    stream.receive("0");
    stream.receive("0");
    stream.receive("0");
    stream.receive("1");
    stream.receive("0");
    stream.receive("1");

    expect(stream.decode()).to.equal('hi');
    expect(stream.empty()).to.deep.equal(true);
    expect(stream.data()).to.equal('');
  });

  it('can encode data in stream', function() {
    var stream = this.stream;
    stream.receive("h");
    stream.receive("e");
    stream.receive("l");
    stream.receive("l");
    stream.receive("o");
    stream.receive(" ");
    stream.receive("w");
    stream.receive("o");
    stream.receive("r");
    stream.receive("l");
    stream.receive("d");

    expect(stream.encode()).to.equal('101010100010001011101010001011101010001110111011100000001011101110001110111011100010111010001011101010001110101');
    expect(stream.empty()).to.deep.equal(true);
    expect(stream.data()).to.equal('');
  });

  it('can decode large data stream', function() {
    var stream = this.stream;
    '101010100010001011101010001011101010001110111011100000001011101110001110111011100010111010001011101010001110101'
    .split('').forEach(function(data) {
      stream.receive(data);
    });

    expect(stream.decode()).to.equal('hello world');
  });
});