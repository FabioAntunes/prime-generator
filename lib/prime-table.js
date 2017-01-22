function primeTable(N = 1, done) {
  const tSize = N + 1;
  const primes = [2, 3, 5];
  let row = getCol(' ');
  for (let i = 0; i < N; i ++) {
    row += getCol(primes[i]);
  }
  print(row);

  for (let i = 0; i < N; i ++) {
    row = getCol(primes[i])
    for (let j = 0; j < N; j++) {
      row += getCol(primes[i] * primes[j]);
    }
    print(row);
  }

  done(null, primes);
}

function getCol (item) {
  return ` ${item}|`;
}

function print (row) {
  return console.log('|' + row);
}

module.exports = exports = primeTable;
