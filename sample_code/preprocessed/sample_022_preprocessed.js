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

var n = parseInt(readline())
var array = new Array(150003).fill(0)
var a = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
a = a.sort(sort)
for (let i = 0; i < a.length; i++) {
  if (a[i] - 1 > 1 && array[a[i] - 1] <= 0) {
    array[a[i] - 1] = 1
    continue
  }
  if (array[a[i]] === 0) {
    array[a[i]] = 1
    continue
  }
  if (array[a[i] + 1] === 0) {
    array[a[i] + 1] = 1
  }
}
var sum = 0
for (let i = 0; i < array.length; i++) {
  if (array[i] === 1) sum++
}
console.log(sum)
var sort = (a, b) => a - b



}

