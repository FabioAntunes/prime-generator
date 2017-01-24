# Generate primes
This is a simple library for recreation purposes, that generates a multiplication table using only prime numbers

## Introduction

Inside the lib folder we have 3 files:
- **output-parser.js** - Allows you to manipulate the output of the matrix, either to a console or a file.
- **prime-sieve.js** - Generates prime numbers, the algorithm was adapted from [Will's answer](http://stackoverflow.com/a/10733621/1449157).
- **prime-table.js** - This will generate the matrix.

## Getting Started

Running the tests
```bash
$ npm test
```
Runnnig the library:
```bash
$ npm start
```
Passing the number of primes:
```bash
$ npm start -- 5
```
Saving to file instead of printing to the console:
```bash
$ npm start -- 10 true
```

### Example output
If we run
```bash
$ npm start -- 5
```

This will be our output:
```
|  | 2| 3| 5| 7| 11|
| 2| 4| 6| 10| 14| 22|
| 3| 6| 9| 15| 21| 33|
| 5| 10| 15| 25| 35| 55|
| 7| 14| 21| 35| 49| 77|
| 11| 22| 33| 55| 77| 121|
```

### Changing the output

It's possible to configure the desired output using the `output-parser.js`:
```javascript
const primeTable = require('./lib/prime-table');
const parser = require('./lib/output-parser').useConsole();
parser.cols.suffix = '/';
parser.rows.prefix = '/';
primeTable(5, parser);
```

The above code will generate this:
```
/  / 2/ 3/ 5/ 7/ 11/
/ 2/ 4/ 6/ 10/ 14/ 22/
/ 3/ 6/ 9/ 15/ 21/ 33/
/ 5/ 10/ 15/ 25/ 35/ 55/
/ 7/ 14/ 21/ 35/ 49/ 77/
/ 11/ 22/ 33/ 55/ 77/ 121/
```
