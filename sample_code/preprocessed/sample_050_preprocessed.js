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
const n = readline();
fl_set.add(JSON.stringify([1, 22]));
var a = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([23, 94]));
{
    {
fl_set.add(JSON.stringify([67, 93]));
fl_set.add(JSON.stringify([73, 91]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([23, 94]));
var map = new Array(a.length)
fl_set.add(JSON.stringify([95, 124]));
var b = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([127, 239]));
{
    {
fl_set.add(JSON.stringify([171, 238]));
map[i] = {a: a[i], b: parseInt(x)}
fl_set.add(JSON.stringify([177, 211]));
fl_set.add(JSON.stringify([218, 236]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([127, 239]));
map = map.sort((x, y) => (x.a - x.b) - (y.a - y.b))
fl_set.add(JSON.stringify([241, 292]));
var l = 0
fl_set.add(JSON.stringify([295, 304]));
var answer = 0
fl_set.add(JSON.stringify([305, 319]));
fl_set.add(JSON.stringify([320, 613]));
for (var i = 0; i < map.length; i++) {
fl_set.add(JSON.stringify([320, 613]));
{
    {
fl_set.add(JSON.stringify([357, 613]));
var current = map[i]
fl_set.add(JSON.stringify([363, 383]));
l = i + 1
fl_set.add(JSON.stringify([388, 397]));
var r = map.length
fl_set.add(JSON.stringify([402, 420]));
while (l < r) {
fl_set.add(JSON.stringify([429, 593]));
{
        {
fl_set.add(JSON.stringify([443, 593]));
var m = Math.floor((l + r) / 2)
fl_set.add(JSON.stringify([453, 484]));
fl_set.add(JSON.stringify([493, 587]));
if (map[m].a - map[m].b + current.a - current.b <= 0) {
fl_set.add(JSON.stringify([493, 587]));
{
            {
fl_set.add(JSON.stringify([547, 578]));
l = m+1
fl_set.add(JSON.stringify([561, 568]));
}}
} else {
fl_set.add(JSON.stringify([584, 587]));
r=m
fl_set.add(JSON.stringify([584, 587]));
}}}
}
answer += n-r
fl_set.add(JSON.stringify([598, 611]));
}}
}
console.log(answer)
fl_set.add(JSON.stringify([614, 633]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

