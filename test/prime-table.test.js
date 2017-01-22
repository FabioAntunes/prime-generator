const assert = require('assert');
const sinon = require('sinon');
const primeTable = require('../lib/prime-table');
const outputParser = require('../lib/output-parser');

describe('Prime table', () => {
  let parser;
  let spy;
  before(() => {
    parser = outputParser.useConsole();
    spy = sinon.spy(parser, 'print');
  })
  after(() => {
    parser.print.restore();
  });

  it('should print N primes', () => {

    const N = 3;

    primeTable(N, parser, () => {
      assert(spy.calledWith('|  | 2| 3| 5|\n| 2| 4| 6| 10|\n| 3| 6| 9| 15|\n| 5| 10| 15| 25|\n'));
      sinon.assert.calledOnce(spy);
    });
  });
});
