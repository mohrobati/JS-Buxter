'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });
  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {

function options(arg) {
    this.options = arg ? { limit: 100 } : undefined
}
var options = new options(readline() === "true")
var len = Number(readline())

if(options && options.options && options.options.limit)
options.options.limit = options.options.limit * len;
if(options.options)
    console.log(options.options.limit)
else
    console.log(undefined)

}

