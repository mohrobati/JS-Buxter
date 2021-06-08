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
var a = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([0, 59]));
{
{
fl_set.add(JSON.stringify([45, 57]));
fl_set.add(JSON.stringify([47, 55]));
return x;
}}
}
)
fl_set.add(JSON.stringify([0, 59]));
var b = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([60, 119]));
{
{
fl_set.add(JSON.stringify([105, 117]));
fl_set.add(JSON.stringify([107, 115]));
return x;
}}
}
)
fl_set.add(JSON.stringify([60, 119]));
var preff = new Array(b.length + 1)
fl_set.add(JSON.stringify([122, 157]));
preff[0] = -1
fl_set.add(JSON.stringify([158, 171]));
var pos = 0
fl_set.add(JSON.stringify([172, 183]));
for (let i = 0; i < b.length; i++) {
fl_set.add(JSON.stringify([184, 277]));
{
{
fl_set.add(JSON.stringify([219, 277]));
while (a[pos] !== b[i]) {
fl_set.add(JSON.stringify([221, 250]));
pos++
fl_set.add(JSON.stringify([245, 250]));
}
preff[i + 1] = pos
fl_set.add(JSON.stringify([251, 269]));
pos++
fl_set.add(JSON.stringify([270, 275]));
}}
}
var suff = new Array(b.length + 1)
fl_set.add(JSON.stringify([280, 314]));
suff[b.length] = a.length
fl_set.add(JSON.stringify([315, 340]));
pos = a.length
fl_set.add(JSON.stringify([341, 355]));
for (let i = b.length - 1; i >= 0; i--) {
fl_set.add(JSON.stringify([356, 449]));
{
{
fl_set.add(JSON.stringify([396, 449]));
while (a[pos] !== b[i]) {
fl_set.add(JSON.stringify([398, 427]));
pos--
fl_set.add(JSON.stringify([422, 427]));
}
suff[i] = pos
fl_set.add(JSON.stringify([428, 441]));
pos--
fl_set.add(JSON.stringify([442, 447]));
}}
}
var max =0
fl_set.add(JSON.stringify([452, 462]));
for (let i = 0; i < suff.length; i++) {
fl_set.add(JSON.stringify([465, 548]));
{
{
fl_set.add(JSON.stringify([503, 548]));
max = Math.max(max, suff[i] -preff[i] -1)
fl_set.add(JSON.stringify([505, 546]));
}}
}
console.log(max)
fl_set.add(JSON.stringify([549, 565]));
function isSubSequence(str1, str2, m, n) {
fl_set.add(JSON.stringify([569, 725]));
{
  {
fl_set.add(JSON.stringify([610, 725]));
var j = 0;
fl_set.add(JSON.stringify([614, 624]));
for (var i = 0; i < n && j < m; i++)
    {
fl_set.add(JSON.stringify([627, 703]));
if (str1[j] === str2[i])
      {
fl_set.add(JSON.stringify([668, 703]));
j++;
fl_set.add(JSON.stringify([699, 703]));
}
}
fl_set.add(JSON.stringify([706, 723]));
return (j === m);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

