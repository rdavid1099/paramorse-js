var expect = require('chai').expect;
var Queue = require('../lib/queue');

describe('Queue handling data', function() {
  beforeEach(function() {
    this.q = new Queue;
  });

  it('can have data pushed to it', function() {
    var q = this.q;
    q.push(1);

    expect(q.queue).to.deep.equal([1]);
  });

  it('can have more than one data item pushed', function() {
    var q = this.q;
    q.push(1);
    q.push(0);
    q.push(1);

    expect(q.queue).to.deep.equal([1,0,1]);
  });

  it('knows how many pieces of data are stored', function() {
    var q = this.q;
    q.push(1);
    q.push(0);
    q.push(1);

    expect(q.count()).to.equal(3);
  });

  it('displays the tail end of data', function() {
    var q = this.q;
    q.push(1);
    q.push(0);

    expect(q.tail()).to.equal(0);
  });

  it('displays given number of tail of data', function() {
    var q = this.q;
    q.push(1);
    q.push(0);

    expect(q.tail(2)).to.deep.equal([0,1])
  });
});