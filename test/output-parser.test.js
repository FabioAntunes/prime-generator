const fs = require('fs');
const sinon = require('sinon');
const assert = require('assert');
const outputParser = require('../lib/output-parser');

describe('Output parser', () => {
  let parser;

  after(() => {
    console.log.restore();
    fs.writeFile.restore();
  });
  describe('console.log', () => {
    const spy = sinon.spy(console, 'log');;
    before(() => {
      parser = outputParser.useConsole();
    });

    it('has console has default output', () => {
      assert(!parser.file)
    });

    it('has no header nor footer', () => {
      assert(parser.header === '')
      assert(parser.footer === '')
    });

    it('returns a column', () => { returnsCol(parser); });

    it('returns a row', () => { returnsRow(parser); });

    it('prints final output', () => {
      const output = '|  | 2| 3| 5|';
      parser.print(output)
      assert(spy.calledWith(parser.header + output + parser.footer));
    });

    it('prints and returns final output,', (done) => {
      const output = '|  | 2| 3| 5|';
      parser.print(output, (err, output) => {
        const o = parser.header + output + parser.footer;
        assert(spy.calledWith(o));
        assert(o === output);
        done(err, output)
      })
    });
  });

  describe('File output', () => {

    before(() => {
      parser = outputParser.useFile();
    });

    it('has file has default output', () => {
      assert(parser.file)
    });

    it('has a filename', () => {
      assert(parser.filename = 'prime-table.html')
    });

    it('has header and footer', () => {
      assert(parser.header === outputParser.headerFile)
      assert(parser.footer === outputParser.footerFile)
    });

    it('returns a column', () => { returnsCol(parser); });

    it('returns a row', () => { returnsRow(parser); });

    it('writes the final output to the file', () => {
      const spy = sinon.spy(fs, 'writeFile');

      const output = 'output';
      parser.print(output)
      assert(spy.calledWith(parser.filename, parser.header + output + parser.footer));
    });
  });
});

function returnsCol(parser) {
  assert(parser.getCol(3) === parser.cols.prefix + 3 + parser.cols.suffix);
}
function returnsRow(parser) {
  assert(parser.getRow('row') === parser.rows.prefix + 'row' + parser.rows.suffix);
}
