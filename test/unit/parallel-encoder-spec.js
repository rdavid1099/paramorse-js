var expect = require('../test-helper').expect;
var ParallelEncoder = require('../test-helper').parallelEncoder;

describe('Parallel Encoder', function() {
  beforeEach(function() {
    this.pe = new ParallelEncoder;
  });

  it('sets up given number of streams', function() {
    var pe = this.pe;
    pe.setupStreams(4);

    expect(pe.allStreams()).to.deep.equal([0,0,0,0]);
  });

  it('properly emits data asynchronously', function(done) {
    var pe = this.pe;
    var data = "this is a sentence";
    pe.setupStreams(4);
    for(var i=0; i < data.length; i++) {
      pe.emit(data.split('')[i]);
    }

    expect(pe.allStreams()).to.deep.equal([5,5,4,4]);
    done();
  });

  it('loads given file into parallel encoders', function(done) {
    setTimeout(function() {
      var pe = this.pe;
      pe.setupStreams(4);
      pe.loadFile('testing.txt');

      expect(pe.allStreams()).to.deep.equal([29,28,28,28]);
    }, 2000);
    done();
  });
});