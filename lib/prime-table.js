const iterator = require('./prime-sieve')();
const outputParser = require('./output-parser');

function primeTable(N = 1, parser, done) {
  parser = parser || outputParser.useConsole();
  const tSize = N + 1;
  const primes = [];
  let output = '';
  let row = parser.getCol(' ');
  for (let i = 0; i < N; i ++) {
    primes.push(iterator.next().value);
    row += parser.getCol(primes[i]);
  }
  output += parser.getRow(row);

  for (let i = 0; i < N; i ++) {
    row = parser.getCol(primes[i])
    for (let j = 0; j < N; j++) {
      row += parser.getCol(primes[i] * primes[j]);
    }
    output += parser.getRow(row);
  }

  parser.print(output,done);
}

module.exports = exports = primeTable;
