const primeTable = require('./lib/prime-table');
const outputParser = require('./lib/output-parser');

const N = process.argv[2] || 3;
const useFile = process.argv[3] || false;
const parser = useFile ? outputParser.useFile() :  outputParser.useConsole();
console.time("prime");
primeTable(N, parser, () => console.timeEnd("prime"));
