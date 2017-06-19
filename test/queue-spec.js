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

    expect(q.tail(2)).to.deep.equal([0,1]);
  });

  it('returns false if tail amount is more than queue', function() {
    var q = this.q;
    q.push(1);
    q.push(0);

    expect(q.tail(3)).to.deep.equal(false);
  });

  it('peeks at data at the front of the queue', function() {
    var q = this.q;
    q.push(1);
    q.push(0);

    expect(q.peek()).to.equal(1);
  });

  it('peeks at data at the front of the queue', function() {
    var q = this.q;
    q.push(1);
    q.push(0);

    expect(q.peek(2)).to.deep.equal([1,0]);
  });

  it('returns false if peek amount is more than queue', function() {
    var q = this.q;
    q.push(1);
    q.push(0);

    expect(q.peek(3)).to.deep.equal(false);
  });

  it('pops the first element in the queue out', function() {
    var q = this.q;
    q.push(1);
    q.push(0);
    q.push(1);
    q.push(1);
    q.push(0);

    expect(q.count()).to.equal(5);
    expect(q.pop()).to.equal(1);
    expect(q.count()).to.equal(4);
    expect(q.pop()).to.equal(0);
    expect(q.count()).to.equal(3);
  });

  it('pops the given amount of elements from the queue', function() {
    var q = this.q;
    q.push(1);
    q.push(0);
    q.push(1);
    q.push(1);
    q.push(0);

    expect(q.pop(3)).to.deep.equal([1,0,1]);
    expect(q.count()).to.equal(2);
  });

  it('returns false if pop amount is more than queue amount', function() {
    var q = this.q;
    q.push(1);

    expect(q.pop(7)).to.deep.equal(false);
    expect(q.pop(-7)).to.deep.equal(false);
  });

  it('clears out a queue', function() {
    var q = this.q;
    q.push(1);
    q.push(0);
    q.push(1);
    q.push(1);
    q.push(0);

    expect(q.count()).to.equal(5);
    q.clear();
    expect(q.count()).to.equal(0);
  });
});