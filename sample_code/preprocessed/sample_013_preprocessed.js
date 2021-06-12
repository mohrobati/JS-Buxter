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
var maxN = 21
fl_set.add(JSON.stringify([0, 13]));
var mod = 1000000007
fl_set.add(JSON.stringify([14, 34]));
const x = readline();
fl_set.add(JSON.stringify([36, 57]));
var toPrint = ''
fl_set.add(JSON.stringify([58, 74]));
fl_set.add(JSON.stringify([75, 845]));
Array(Number(x)).fill(1).map((t, i) => {
fl_set.add(JSON.stringify([75, 845]));
fl_set.add(JSON.stringify([114, 844]));
{
{
fl_set.add(JSON.stringify([114, 844]));
fl_set.add(JSON.stringify([116, 193]));
var [n, k] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([116, 193]));
fl_set.add(JSON.stringify([167, 191]));
{
  {
fl_set.add(JSON.stringify([167, 191]));
fl_set.add(JSON.stringify([171, 189]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([116, 193]));
fl_set.add(JSON.stringify([194, 233]));
if (k === 1) {
fl_set.add(JSON.stringify([194, 233]));
fl_set.add(JSON.stringify([207, 233]));
return toPrint += 1 + '\n';
}
var dp = new Array(k)
fl_set.add(JSON.stringify([236, 257]));
fl_set.add(JSON.stringify([258, 320]));
for (let j = 0; j < k; j++) {
fl_set.add(JSON.stringify([258, 320]));
fl_set.add(JSON.stringify([286, 320]));
{
  {
fl_set.add(JSON.stringify([286, 320]));
dp[j] = new Array(n).fill(0)
fl_set.add(JSON.stringify([290, 318]));
}}
}
fl_set.add(JSON.stringify([321, 367]));
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([321, 367]));
fl_set.add(JSON.stringify([349, 367]));
{
  {
fl_set.add(JSON.stringify([349, 367]));
dp[0][j] = 1
fl_set.add(JSON.stringify([353, 365]));
}}
}
fl_set.add(JSON.stringify([368, 690]));
for (let j = 0; j < k - 2; j++) {
fl_set.add(JSON.stringify([368, 690]));
fl_set.add(JSON.stringify([400, 690]));
{
  {
fl_set.add(JSON.stringify([400, 690]));
fl_set.add(JSON.stringify([404, 688]));
if (j % 2 === 0) {
fl_set.add(JSON.stringify([404, 688]));
fl_set.add(JSON.stringify([421, 551]));
{
    {
fl_set.add(JSON.stringify([421, 551]));
var sum = 0
fl_set.add(JSON.stringify([427, 438]));
fl_set.add(JSON.stringify([443, 547]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([443, 547]));
fl_set.add(JSON.stringify([471, 547]));
{
      {
fl_set.add(JSON.stringify([471, 547]));
dp[j + 1][i] = sum
fl_set.add(JSON.stringify([479, 497]));
sum += dp[j][i]
fl_set.add(JSON.stringify([504, 519]));
sum = sum % mod
fl_set.add(JSON.stringify([526, 541]));
}}
}
}}
} else {
fl_set.add(JSON.stringify([557, 688]));
fl_set.add(JSON.stringify([557, 688]));
{
    {
fl_set.add(JSON.stringify([557, 688]));
sum = 0
fl_set.add(JSON.stringify([563, 570]));
fl_set.add(JSON.stringify([575, 684]));
for (let i = n - 1; i >= 0; i--) {
fl_set.add(JSON.stringify([575, 684]));
fl_set.add(JSON.stringify([608, 684]));
{
      {
fl_set.add(JSON.stringify([608, 684]));
dp[j + 1][i] = sum
fl_set.add(JSON.stringify([616, 634]));
sum += dp[j][i]
fl_set.add(JSON.stringify([641, 656]));
sum = sum % mod
fl_set.add(JSON.stringify([663, 678]));
}}
}
}}
}}}
}
var ans = 1
fl_set.add(JSON.stringify([693, 704]));
fl_set.add(JSON.stringify([705, 809]));
for (let j = 0; j < k - 1; j++) {
fl_set.add(JSON.stringify([705, 809]));
fl_set.add(JSON.stringify([737, 809]));
{
  {
fl_set.add(JSON.stringify([737, 809]));
fl_set.add(JSON.stringify([741, 807]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([741, 807]));
fl_set.add(JSON.stringify([769, 807]));
{
    {
fl_set.add(JSON.stringify([769, 807]));
ans = (ans + dp[j][i]) % mod
fl_set.add(JSON.stringify([775, 803]));
}}
}
}}
}
toPrint += ans.toString() + '\n'
fl_set.add(JSON.stringify([810, 842]));
}}
}
)
fl_set.add(JSON.stringify([75, 845]));
console.log(toPrint)
fl_set.add(JSON.stringify([846, 866]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

