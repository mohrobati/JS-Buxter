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

var a = Number(readline())
var b = Number(readline())
var c = Number(readline())

var triangle = (a, b, c) => {
    if(a <= 0 || b <= 0 || c <= 0)
        return 'INVALID';
    if (a == b && b == c)
        return 'EQUILATERAL'
    if (a <= b || c < a)
        return 'ISOSCELES'
    return 'SCALENE'
}

console.log(triangle(a, b, c))

}

