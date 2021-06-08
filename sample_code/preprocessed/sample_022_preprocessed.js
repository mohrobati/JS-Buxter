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
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([67, 137]));
{
{
fl_set.add(JSON.stringify([113, 135]));
fl_set.add(JSON.stringify([115, 133]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([67, 137]));
a = a.sort(sort)
fl_set.add(JSON.stringify([138, 154]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([155, 385]));
{
{
fl_set.add(JSON.stringify([190, 385]));
if (a[i] - 1 >= 1 && array[a[i] - 1] === 0) {
fl_set.add(JSON.stringify([192, 272]));
{
  {
fl_set.add(JSON.stringify([236, 272]));
array[a[i] - 1] = 1
fl_set.add(JSON.stringify([240, 259]));
}}
}
if (array[a[i]] === 0) {
fl_set.add(JSON.stringify([275, 330]));
{
  {
fl_set.add(JSON.stringify([298, 330]));
array[a[i]] = 1
fl_set.add(JSON.stringify([302, 317]));
}}
}
if (array[a[i] + 1] === 0) {
fl_set.add(JSON.stringify([331, 383]));
{
  {
fl_set.add(JSON.stringify([358, 383]));
array[a[i] + 1] = 1
fl_set.add(JSON.stringify([362, 381]));
}}
}
}}
}
var sum = 0
fl_set.add(JSON.stringify([386, 397]));
for (let i = 0; i < array.length; i++) {
fl_set.add(JSON.stringify([398, 466]));
{
{
fl_set.add(JSON.stringify([437, 466]));
if (array[i] === 1) {
fl_set.add(JSON.stringify([439, 464]));
sum++
fl_set.add(JSON.stringify([459, 464]));
}
}}
}
console.log(sum)
fl_set.add(JSON.stringify([467, 483]));
var sort = (a, b) => a - b
fl_set.add(JSON.stringify([485, 511]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

