const fs = require('fs');

const headerFile = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <table>`;
const footerFile = `
    </table>
  </body>
</html>`;

const outputParser = {
  cols: { prefix: '', suffix: '' },
  file: false,
  filename: 'prime-table.html',
  header: '',
  headerFile,
  footer: '',
  footerFile,
  getCol,
  getRow,
  print,
  rows: { prefix: '', suffix: '' },
  useConsole,
  useFile
}


function getCol(c) {
  return this.cols.prefix + c + this.cols.suffix;
}

function getRow(r) {
  return this.rows.prefix + r + this.rows.suffix;
}

function print(output, done) {
  output = this.header + output + this.footer;
  if (!this.file) {
    console.log(output);
    if (done)
      done(null, output);
    return;
  }

  fs.writeFile(this.filename, output, function(err) {
      if(err && done) {
          done(err)
      }
      if (done)
        done(null, output);
  });
}

function useConsole() {
  return {
    cols: { prefix: this.cols.prefix || ' ',  suffix: this.cols.suffix || '|' },
    file: false,
    header: '',
    footer: '',
    rows: { prefix: this.rows.prefix || '|',  suffix: this.rows.suffix || '\n' },
    getCol,
    getRow,
    print
  }
}

function useFile() {
  return {
    cols: { prefix: this.cols.prefix || '<td>',  suffix: this.cols.suffix || '</td>' },
    file: true,
    filename: this.filename,
    header: this.headerFile,
    footer: this.footerFile,
    rows: { prefix: this.rows.prefix || '<tr>',  suffix: this.rows.suffix || '</tr>\n' },
    getCol,
    getRow,
    print
  }
}

module.exports = exports = outputParser;
