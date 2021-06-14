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
var n = parseInt(readline())
fl_set.add(JSON.stringify([0, 28]));
fl_set.add(JSON.stringify([29, 99]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([29, 99]));
fl_set.add(JSON.stringify([75, 97]));
{
{
fl_set.add(JSON.stringify([75, 97]));
fl_set.add(JSON.stringify([77, 95]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([29, 99]));
var array = {
4: 0,
8: 1, 15: 2, 16: 3, 23: 4, 42: 5
}
fl_set.add(JSON.stringify([100, 154]));
fl_set.add(JSON.stringify([155, 205]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([155, 205]));
fl_set.add(JSON.stringify([183, 205]));
{
{
fl_set.add(JSON.stringify([183, 205]));
a[i] = array[a[i]]
fl_set.add(JSON.stringify([185, 203]));
}}
}
array = {}
fl_set.add(JSON.stringify([206, 216]));
var count = new Array(6).fill(0)
fl_set.add(JSON.stringify([217, 249]));
fl_set.add(JSON.stringify([250, 392]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([250, 392]));
fl_set.add(JSON.stringify([278, 392]));
{
{
fl_set.add(JSON.stringify([278, 392]));
fl_set.add(JSON.stringify([280, 322]));
if (a[i] == 0) {
fl_set.add(JSON.stringify([280, 322]));
fl_set.add(JSON.stringify([295, 322]));
{
  {
fl_set.add(JSON.stringify([295, 322]));
count[0]++
fl_set.add(JSON.stringify([299, 309]));
fl_set.add(JSON.stringify([312, 320]));
continue;
}}
}
fl_set.add(JSON.stringify([323, 388]));
if (count[a[i] - 1] >= 1) {
fl_set.add(JSON.stringify([323, 388]));
fl_set.add(JSON.stringify([349, 388]));
{
  {
fl_set.add(JSON.stringify([349, 388]));
count[a[i]]++
fl_set.add(JSON.stringify([353, 366]));
count[a[i] - 1]--
fl_set.add(JSON.stringify([369, 386]));
}}
}
}}
}
console.log(a.length - count[5] * 6)
fl_set.add(JSON.stringify([395, 431]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

