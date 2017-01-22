const assert = require('assert');
const outputParser = require('../lib/output-parser');
const sinon = require('sinon')

describe('Output parser', () => {
  describe('console.log', () => {
    it('has console has default output', () => {
      assert(!outputParser.file)
    });

    it('returns a column', () => {
      assert(outputParser.getCol(3) === ` 3|`);
    });

    it('returns a row', () => {
      assert(outputParser.getRow(' 2| 3| 5|') === '| 2| 3| 5|\n');
    });

    it('returns final output', () => {
      const spy = sinon.spy(console, 'log');
      const output = '|  | 1| 3| 5|';
      outputParser.print(output)
      assert(spy.calledWith(output));
    });
  });
});
