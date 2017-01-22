const assert = require('assert');
const sinon = require('sinon')
const primeTable = require('../lib/prime-table');

describe('Prime table', () => {
  it('prints prime table to console', done => {
    const tableSize = 3;
    const spy = sinon.spy(console, 'log');
    primeTable(tableSize, (err, primes) => {
      assert(spy.calledWith('| | 2| 3| 5|'));
      assert(spy.calledWith('|2| 4| 6| 10|'));
      assert(spy.calledWith('|3| 6| 9| 15|'));
      assert(spy.calledWith('|5| 10| 15|25|'));
      done(err, primes)
    });
  });
});
