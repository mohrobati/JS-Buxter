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


const x = readline();
 
Array(Number(x)).fill(1).map((t, i) => {
var n = parseInt(readline())
var a = readline().split(' ').map((x, i) => {
  return parseInt(x)
})
 
var sum = 0
var max = 0
for (let j = 0; j < n; j++) {
  {}
  sum += a[j]
  max = a[j]>max ? a[j] : max
}
if (max > Math.floor(sum /2)) return console.log('T')
console.log(sum % 2 === 1? 'T' : 'HL')
 
})

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

}

