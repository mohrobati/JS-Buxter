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
const n = parseInt(readline());
fl_set.add(JSON.stringify([0, 31]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([32, 101]));
{
{
fl_set.add(JSON.stringify([78, 100]));
fl_set.add(JSON.stringify([80, 98]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([32, 101]));
var dp = new Array(n + 1)
fl_set.add(JSON.stringify([104, 129]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([130, 190]));
{
{
fl_set.add(JSON.stringify([158, 190]));
dp[i] = new Array(2).fill(1)
fl_set.add(JSON.stringify([160, 188]));
}}
}
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([191, 454]));
{
{
fl_set.add(JSON.stringify([219, 454]));
if (a[i] < a[i + 1]) {
fl_set.add(JSON.stringify([221, 355]));
{
  {
fl_set.add(JSON.stringify([242, 355]));
dp[i + 1][0] = Math.max(dp[i + 1][0], dp[i][0] + 1)
fl_set.add(JSON.stringify([246, 297]));
dp[i + 1][1] = Math.max(dp[i + 1][1], dp[i][1] + 1)
fl_set.add(JSON.stringify([300, 351]));
}}
}
if (i + 2 <= n - 1 && a[i] < a[i + 2]) {
fl_set.add(JSON.stringify([356, 452]));
{
  {
fl_set.add(JSON.stringify([395, 452]));
dp[i + 2][1] = Math.max(dp[i + 2][1], dp[i][0] + 1)
fl_set.add(JSON.stringify([399, 450]));
}}
}
}}
}
var ans = 0
fl_set.add(JSON.stringify([455, 466]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([467, 558]));
{
{
fl_set.add(JSON.stringify([495, 558]));
ans = Math.max(ans, dp[i][1])
fl_set.add(JSON.stringify([497, 526]));
ans = Math.max(ans, dp[i][0])
fl_set.add(JSON.stringify([527, 556]));
}}
}
console.log(ans)
fl_set.add(JSON.stringify([559, 575]));
var val = 0
fl_set.add(JSON.stringify([577, 588]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

