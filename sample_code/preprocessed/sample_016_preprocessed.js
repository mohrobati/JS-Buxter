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
var a = readline().split(' ').map((x, i) => {
return parseInt(x)
})
 
a = a.sort((a, b) => a - b)
var sum1 = 0
var sum2 = 0
var max = a[n-1]
var base = Math.floor(Math.pow(max, 1/(n-1)))
var base1 = Math.ceil(Math.pow(max, 1/(n-1)))
 
var mult1 = 1
for (let i = 0; i < a.length; i++) {
sum1+= Math.abs(mult1 - a[i])
mult1*= base
}
var mult2 = 1
for (let i = 0; i < a.length; i++) {
sum2+= Math.abs(mult2 - a[i])
mult2*= base1
if(mult2 > 100)
    {}
}
console.log(Math.min(sum1, sum2))


 
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

}

