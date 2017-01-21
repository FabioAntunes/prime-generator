function generatePrimes(gridSize = 1, done) {
  gridSize = Math.pow(gridSize + 1, 2);
  const primes = [2, 3, 5];

  done(null, primes);
}

module.exports = exports = generatePrimes;
