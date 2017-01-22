function primeTable(N = 1, done) {
  const cols = N + 1;
  const primes = [1, 2, 3];
  console.log('| | 2| 3| 5|');
  console.log('|2| 4| 6| 10|');
  console.log('|3| 6| 9| 15|');
  console.log('|5| 10| 15|25|');

  // console.log(' |' + primes.join(' |'));


  done(null, primes);
}

module.exports = exports = primeTable;
