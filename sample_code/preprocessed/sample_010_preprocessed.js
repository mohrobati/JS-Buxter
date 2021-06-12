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

var fl_set = new Set();
var a
fl_set.add(JSON.stringify([1, 6]));
var dp
fl_set.add(JSON.stringify([7, 13]));
var n = parseInt(readline());
fl_set.add(JSON.stringify([14, 43]));
fl_set.add(JSON.stringify([44, 110]));
a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([44, 110]));
fl_set.add(JSON.stringify([86, 108]));
{
{
fl_set.add(JSON.stringify([86, 108]));
fl_set.add(JSON.stringify([88, 106]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([44, 110]));
var aa = a.slice()
fl_set.add(JSON.stringify([111, 129]));
a.sort((a, b) => a - b)
fl_set.add(JSON.stringify([130, 153]));
dp = new Array(n + 1)
fl_set.add(JSON.stringify([154, 175]));
fl_set.add(JSON.stringify([176, 262]));
for (let i = 0; i < n + 1; i++) {
fl_set.add(JSON.stringify([176, 262]));
fl_set.add(JSON.stringify([208, 262]));
{
{
fl_set.add(JSON.stringify([208, 262]));
dp[i] = new Array(n).fill(Number.MAX_SAFE_INTEGER)
fl_set.add(JSON.stringify([210, 260]));
}}
}
console.log(solve(0, n - 1, a))
fl_set.add(JSON.stringify([263, 294]));
fl_set.add(JSON.stringify([297, 558]));
function solve(l, r) {
fl_set.add(JSON.stringify([297, 558]));
fl_set.add(JSON.stringify([318, 558]));
{
  {
fl_set.add(JSON.stringify([318, 558]));
fl_set.add(JSON.stringify([322, 343]));
if (l === r) {
fl_set.add(JSON.stringify([322, 343]));
fl_set.add(JSON.stringify([335, 343]));
return 0;
}
fl_set.add(JSON.stringify([346, 402]));
if(dp[l][r] !== Number.MAX_SAFE_INTEGER) {
fl_set.add(JSON.stringify([346, 402]));
fl_set.add(JSON.stringify([387, 402]));
return dp[l][r];
}
var ans = Math.min(solve(l + 1, r), solve(l, r - 1))
fl_set.add(JSON.stringify([405, 457]));
fl_set.add(JSON.stringify([460, 529]));
if(dp[l][r] === Number.MAX_SAFE_INTEGER) {
fl_set.add(JSON.stringify([460, 529]));
dp[l][r] = ans + a[r] - a[l]
fl_set.add(JSON.stringify([501, 529]));
}
fl_set.add(JSON.stringify([532, 556]));
return ans + a[r] - a[l];
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

