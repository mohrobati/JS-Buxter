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
})
var count = new Array(n + 2).fill(0)
for (let i = 0; i < n; i++) {
    count[a[i]]++
}
var b = count.slice()
var max = 0
for (let i = 0; i < n + 2; i++) {
    if (i - 1 >= 0 && b[i - 1] > 0) {
        max++
        b[i - 1]--
        continue
    }
    if (b[i] > 0) {
        max++
        b[i]--
        continue
    }
    if (i + 1 < n + 2 && b[i + 1] > 0) {
        max++
        b[i + 1]--
        continue
    }
}

b = count.slice()
var min = 0
for (let i = 0; i < n+2; i++) {
    if(b[i] !==0) {
        i=i+2
        min++
    }
}

console.log(min, max)
function checkString(a) {
    var count = 0
    var res = true
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '(') count++
        else {
            count--
            if (count < 0) res = false
        }
    }
    if (count !== 0) res = false
    return res 
}

}

