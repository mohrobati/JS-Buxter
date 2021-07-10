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

const n = parseInt(readline());
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
})
 
var dp = new Array(n + 1)
for (let i = 0; i < n; i++) {
dp[i] = new Array(2).fill(1)
}
for (let i = 0; i < n; i++) {
if (a[i] < a[i + 1]) {
  dp[i + 1][0] = Math.max(dp[i + 1][0], dp[i][0] + 1)
  dp[i + 1][1] = Math.max(dp[i + 1][1], dp[i][1] + 1)
 
}
if (i + 2 <= n - 1 && a[i] < a[i + 2]) {
  dp[i + 2][1] = Math.max(dp[i + 2][1], dp[i][0] + 1)
}
}
var ans = 0
var ans1 = 0
for (let i = 0; i < n; i++) {
ans = Math.max(ans, dp[i][1])
ans = Math.max(ans, dp[i][0])
ans1 = Math.max(ans1, dp[i][0])
}
console.log(ans) 
var val = 0
 

}

