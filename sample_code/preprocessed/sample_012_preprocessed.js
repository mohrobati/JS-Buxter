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
var binom = new Array(maxN)
fl_set.add(JSON.stringify([36, 63]));
binom[0] = new Array(maxN).fill(1)
fl_set.add(JSON.stringify([64, 98]));
binom[1] = new Array(maxN).fill(1)
fl_set.add(JSON.stringify([99, 133]));
fl_set.add(JSON.stringify([136, 296]));
for (var i = 2; i < maxN; i++) {
fl_set.add(JSON.stringify([136, 296]));
fl_set.add(JSON.stringify([167, 296]));
{
{
fl_set.add(JSON.stringify([167, 296]));
binom[i] = new Array(maxN).fill(1)
fl_set.add(JSON.stringify([169, 203]));
fl_set.add(JSON.stringify([206, 294]));
for (var j = 1; j < i; j++) {
fl_set.add(JSON.stringify([206, 294]));
fl_set.add(JSON.stringify([234, 294]));
{
  {
fl_set.add(JSON.stringify([234, 294]));
binom[i][j] = (binom[i - 1][j - 1] + binom[i - 1][j]);
fl_set.add(JSON.stringify([238, 292]));
}}
}
}}
}
const a = parseInt(readline());
fl_set.add(JSON.stringify([299, 330]));
var ans = 1
fl_set.add(JSON.stringify([331, 342]));
fl_set.add(JSON.stringify([343, 392]));
for (let i = 1; i <= a / 2 - 1; i++) {
fl_set.add(JSON.stringify([343, 392]));
fl_set.add(JSON.stringify([380, 392]));
{
{
fl_set.add(JSON.stringify([380, 392]));
ans *= i
fl_set.add(JSON.stringify([382, 390]));
}}
}
console.log(binom[a][a / 2] * ans * ans / 2)
fl_set.add(JSON.stringify([393, 437]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

