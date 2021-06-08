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
func_1()
fl_set.add(JSON.stringify([0, 8]));
function func_1() {
fl_set.add(JSON.stringify([10, 434]));
{
{
fl_set.add(JSON.stringify([28, 434]));
var a = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([30, 89]));
{
{
fl_set.add(JSON.stringify([75, 87]));
fl_set.add(JSON.stringify([77, 85]));
return x;
}}
}
)
fl_set.add(JSON.stringify([30, 89]));
var b = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([90, 149]));
{
{
fl_set.add(JSON.stringify([135, 147]));
fl_set.add(JSON.stringify([137, 145]));
return x;
}}
}
)
fl_set.add(JSON.stringify([90, 149]));
var left = 0
fl_set.add(JSON.stringify([150, 162]));
var max = 0
fl_set.add(JSON.stringify([163, 174]));
for (let j = a.length-1; j >= 1; j--) {
fl_set.add(JSON.stringify([175, 415]));
{
{
fl_set.add(JSON.stringify([213, 415]));
for (let k = 0; k < a.length - j+1; k++) {
fl_set.add(JSON.stringify([215, 413]));
{
  {
fl_set.add(JSON.stringify([256, 413]));
var copy = a.slice()
fl_set.add(JSON.stringify([260, 280]));
copy.splice(k, j)
fl_set.add(JSON.stringify([283, 300]));
var exist = isSubSequence(b, copy, b.length, copy.length)
fl_set.add(JSON.stringify([303, 360]));
if (exist) {
fl_set.add(JSON.stringify([363, 409]));
{
    {
fl_set.add(JSON.stringify([374, 409]));
console.log(j)
fl_set.add(JSON.stringify([380, 394]));
fl_set.add(JSON.stringify([399, 405]));
return;
}}
}
}}
}
}}
}
console.log(max)
fl_set.add(JSON.stringify([416, 432]));
}}
}
function isSubSequence(str1, str2, m, n) {
fl_set.add(JSON.stringify([436, 592]));
{
  {
fl_set.add(JSON.stringify([477, 592]));
var j = 0;
fl_set.add(JSON.stringify([481, 491]));
for (var i = 0; i < n && j < m; i++)
    {
fl_set.add(JSON.stringify([494, 570]));
if (str1[j] === str2[i])
      {
fl_set.add(JSON.stringify([535, 570]));
j++;
fl_set.add(JSON.stringify([566, 570]));
}
}
fl_set.add(JSON.stringify([573, 590]));
return (j === m);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

