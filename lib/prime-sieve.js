const maxLimit = Number.MAX_SAFE_INTEGER;

// adapted from this: http://stackoverflow.com/a/10733621/1449157

function *primeSieve(teste) {
  yield 2; yield 3; yield 5; yield 7;
  const sieve = {};
  const primes = [5, 7];
  let sieveElement;
  let i;
  prime = 3
  primeSq = prime * prime;

  let c = primeSq; // counter
  while (true) {
    if (sieve[c]) {
      sieveElement = sieve[c];
      delete sieve[c];
    } else if (c < primeSq) {
      yield c;
      primes.push(c);
      c += 2;
      continue;
    } else {
      sieveElement = {
        start: primeSq + 2 * prime,
        step: 2 * prime
      }
      prime = primes.shift();
      primeSq = prime * prime;
    }

    i = sieveElement.start;
    for (i; i < maxLimit; i += sieveElement.step) {
      if (!sieve[i]){
        sieveElement = {
          start: i + sieveElement.step,
          step: sieveElement.step
        };
        break;
      }
    }

    sieve[i] = sieveElement
    c += 2;
  }
}

module.exports = exports = primeSieve;
