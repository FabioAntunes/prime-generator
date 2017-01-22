const assert = require('assert');
const primeSieve = require('../lib/prime-sieve');

const iterator = primeSieve();

describe('Prime Sieve', () => {
  it('returns always a prime number', done => {
    for (var i = 0; i < 1000; i++) {
      assert(isPrime(iterator.next().value))
    }
    done()
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

  for (let i = 2; i < limit; i++){
    if (prime % i === 0)
      return false;
  }

  return true
}
