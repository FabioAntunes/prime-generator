function primeTable(N = 1, done) {
  const tSize = N + 1;
  const primes = [2, 3, 5];
  let row = '| |';
  for (let i = 0; i < N; i ++) {
    row += ` ${primes[i]}|`;
  }
  console.log(row);

  for (let i = 0; i < N; i ++) {
    row = `| ${primes[i]}|`;
    for (let j = 0; j < N; j++) {
      row += ` ${primes[i] * primes[j]}|`;
    }
    console.log(row);
  }

  done(null, primes);
}

module.exports = exports = primeTable;
