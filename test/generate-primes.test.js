const assert = require('assert');
const generatePrimes = require('../lib/generate-primes');

describe('generate-primes', () => {
  it('returns an array of prime numbers', done => {
    const gridSize = 1
    generatePrimes(gridSize, function (err, result) {
      assert(result.length === Math.pow(gridSize + 1, 2) -1 )
      result.map(prime => assert(isPrime(prime)));
      done(err, result)
    })
  });
});



function isPrime(prime) {
  if ( prime <= 1)
    return false;
  if ( prime <= 3)
    return true
  if (prime % 2 === 0 || prime % 3 === 0)
    return false

  const limit = Math.sqrt(prime);

  for (let i = 2; i < limit; i++) {
    if (prime % i === 0)
      return false;
  }

  return true
}
