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
});