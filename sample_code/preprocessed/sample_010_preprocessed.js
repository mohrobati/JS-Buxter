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


var a
var dp
var n = parseInt(readline());
a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var aa = a.slice()
a.sort((a, b) => a - b)
dp = new Array(n + 1)
for (let i = 0; i < n + 1; i++) {
dp[i] = new Array(n).fill(Number.MAX_SAFE_INTEGER)
}
console.log(solve(0, n - 1, a))
 
function solve(l, r) {
  if (r <= l) return 0
  if(dp[l][r] !== Number.MAX_SAFE_INTEGER) return dp[l][r]
  var ans = Math.min(solve(l + 1, r), solve(l, r - 1))
  if(dp[l][r] === Number.MAX_SAFE_INTEGER) dp[l][r] = ans + a[r] - a[l]
  return ans + a[r] - a[l]
}

}

