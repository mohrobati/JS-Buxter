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
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
 
a = a.sort((a, b) => a - b)
var b = []
var c = []
 
for (let i = 0; i < Math.floor(n / 2); i++) {
let p = a[i]
b.push(p)
}
for (let i = Math.floor(n / 2); i < n; i++) {
c.push(a[i])
}
 
for (let i = 0; i < n; i++) {
if (i % 2 <= 0) a[i] = c[Math.floor(i / 2)]
if (i % 2 === 1) a[i] = b[Math.floor(i / 2)]
}
var ans = 0
for (let i = 1; i < n - 1; i++) {
if (a[i - 1] > a[i] && a[i + 1] > a[i]) ans++
}
console.log(ans)
console.log(a.join(' '))


}

