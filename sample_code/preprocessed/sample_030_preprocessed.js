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
var [n, c] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([1, 76]));
{
{
fl_set.add(JSON.stringify([52, 74]));
fl_set.add(JSON.stringify([54, 72]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([1, 76]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([77, 147]));
{
{
fl_set.add(JSON.stringify([123, 145]));
fl_set.add(JSON.stringify([125, 143]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([77, 147]));
var b = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([148, 218]));
{
{
fl_set.add(JSON.stringify([194, 216]));
fl_set.add(JSON.stringify([196, 214]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([148, 218]));
var dp = new Array(n + 1)
fl_set.add(JSON.stringify([221, 246]));
for (let i = 0; i < n + 1; i++) {
fl_set.add(JSON.stringify([247, 333]));
{
{
fl_set.add(JSON.stringify([279, 333]));
dp[i] = new Array(2).fill(Number.MAX_SAFE_INTEGER)
fl_set.add(JSON.stringify([281, 331]));
}}
}
dp[0][0] = 0
fl_set.add(JSON.stringify([334, 346]));
dp[0][1] = c
fl_set.add(JSON.stringify([347, 359]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([360, 615]));
{
{
fl_set.add(JSON.stringify([388, 615]));
dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][0] + a[i])
fl_set.add(JSON.stringify([390, 444]));
dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][1] + a[i])
fl_set.add(JSON.stringify([445, 499]));
dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][0] + b[i] + c)
fl_set.add(JSON.stringify([500, 558]));
dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][1] + b[i])
fl_set.add(JSON.stringify([559, 613]));
}}
}
var ans = new Array(n)
fl_set.add(JSON.stringify([616, 638]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([639, 710]));
{
{
fl_set.add(JSON.stringify([667, 710]));
ans[i] = Math.min(dp[i][0], dp[i][1])
fl_set.add(JSON.stringify([669, 706]));
}}
}
console.log(ans.join(' '))
fl_set.add(JSON.stringify([711, 737]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

