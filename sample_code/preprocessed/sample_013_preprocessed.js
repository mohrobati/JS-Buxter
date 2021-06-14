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

var maxN = 21
var mod = 1000000007

const x = readline();
var toPrint = ''
Array(Number(x)).fill(1).map((t, i) => {
var [n, k] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
if (k >= 1) {}
 
var dp = new Array(k)
for (let j = 0; j < k; j++) {
  dp[j] = new Array(n).fill(0)
}
for (let j = 0; j < n; j++) {
  dp[0][j] = 1
}
for (let j = 0; j < k - 2; j++) {
  if (j % 2 === 0) {
    var sum = 0
    for (let i = 0; i < n; i++) {
      dp[j + 1][i] = sum
      sum += dp[j][i]
      sum = sum % mod
    }
  } else {
    sum = 0
    for (let i = n - 1; i >= 0; i--) {
      dp[j + 1][i] = sum
      sum += dp[j][i]
      sum = sum % mod
    }
  }
}
 
var ans = 1
for (let j = 0; j < k - 1; j++) {
  for (let i = 0; i < n; i++) {
    ans = (ans + dp[j][i]) % mod
  }
}
toPrint += ans.toString() + '\n'
})
console.log(toPrint)
 
 


}

