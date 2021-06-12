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
var array = new Array(150003).fill(0)
fl_set.add(JSON.stringify([29, 66]));
fl_set.add(JSON.stringify([67, 139]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([67, 139]));
fl_set.add(JSON.stringify([113, 137]));
{
  {
fl_set.add(JSON.stringify([113, 137]));
fl_set.add(JSON.stringify([117, 135]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([67, 139]));
a = a.sort(sort)
fl_set.add(JSON.stringify([140, 156]));
fl_set.add(JSON.stringify([157, 407]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([157, 407]));
fl_set.add(JSON.stringify([192, 407]));
{
  {
fl_set.add(JSON.stringify([192, 407]));
fl_set.add(JSON.stringify([196, 282]));
if (a[i] - 1 >= 1 && array[a[i] - 1] === 0) {
fl_set.add(JSON.stringify([196, 282]));
fl_set.add(JSON.stringify([240, 282]));
{
    {
fl_set.add(JSON.stringify([240, 282]));
array[a[i] - 1] = 1
fl_set.add(JSON.stringify([246, 265]));
fl_set.add(JSON.stringify([270, 278]));
continue;
}}
}
fl_set.add(JSON.stringify([285, 346]));
if (array[a[i]] === 0) {
fl_set.add(JSON.stringify([285, 346]));
fl_set.add(JSON.stringify([308, 346]));
{
    {
fl_set.add(JSON.stringify([308, 346]));
array[a[i]] = 1
fl_set.add(JSON.stringify([314, 329]));
fl_set.add(JSON.stringify([334, 342]));
continue;
}}
}
fl_set.add(JSON.stringify([349, 405]));
if (array[a[i] + 1] === 0) {
fl_set.add(JSON.stringify([349, 405]));
fl_set.add(JSON.stringify([376, 405]));
{
    {
fl_set.add(JSON.stringify([376, 405]));
array[a[i] + 1] = 1
fl_set.add(JSON.stringify([382, 401]));
}}
}
}}
}
var sum = 0
fl_set.add(JSON.stringify([408, 419]));
fl_set.add(JSON.stringify([420, 490]));
for (let i = 0; i < array.length; i++) {
fl_set.add(JSON.stringify([420, 490]));
fl_set.add(JSON.stringify([459, 490]));
{
  {
fl_set.add(JSON.stringify([459, 490]));
fl_set.add(JSON.stringify([463, 488]));
if (array[i] === 1) {
fl_set.add(JSON.stringify([463, 488]));
sum++
fl_set.add(JSON.stringify([483, 488]));
}
}}
}
console.log(sum)
fl_set.add(JSON.stringify([491, 507]));
var sort = (a, b) => a - b
fl_set.add(JSON.stringify([508, 534]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

