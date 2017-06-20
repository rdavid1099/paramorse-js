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
  });
});