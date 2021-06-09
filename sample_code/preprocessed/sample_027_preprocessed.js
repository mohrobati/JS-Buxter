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
var [n, k] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([0, 75]));
{
{
fl_set.add(JSON.stringify([51, 73]));
fl_set.add(JSON.stringify([53, 71]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 75]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([76, 146]));
{
{
fl_set.add(JSON.stringify([122, 144]));
fl_set.add(JSON.stringify([124, 142]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([76, 146]));
var min = Number.MAX_SAFE_INTEGER
fl_set.add(JSON.stringify([149, 182]));
var object = new Array(2 * 10e4 + 1)
fl_set.add(JSON.stringify([185, 221]));
for (let j = 0; j < 2 * 10e4 + 1; j++) {
fl_set.add(JSON.stringify([222, 279]));
{
{
fl_set.add(JSON.stringify([261, 279]));
object[j] = []
fl_set.add(JSON.stringify([263, 277]));
}}
}
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([282, 426]));
{
{
fl_set.add(JSON.stringify([310, 426]));
var count = 0
fl_set.add(JSON.stringify([312, 325]));
var val = a[j]
fl_set.add(JSON.stringify([326, 340]));
while (val > 0) {
fl_set.add(JSON.stringify([341, 424]));
{
  {
fl_set.add(JSON.stringify([357, 424]));
object[val].push(count)
fl_set.add(JSON.stringify([361, 384]));
val = Math.floor(val / 2)
fl_set.add(JSON.stringify([387, 412]));
count++
fl_set.add(JSON.stringify([415, 422]));
}}
}
}}
}
for (let j = 0; j < 2 * 10e4 + 1; j++) {
fl_set.add(JSON.stringify([428, 640]));
{
{
fl_set.add(JSON.stringify([467, 640]));
if (object[j].length < k) {
fl_set.add(JSON.stringify([469, 503]));
fl_set.add(JSON.stringify([495, 503]));
continue;
}
object[j] = object[j].sort((a, b) => a - b)
fl_set.add(JSON.stringify([504, 547]));
var sum = 0
fl_set.add(JSON.stringify([548, 559]));
for (let i = 0; i < k; i++) {
fl_set.add(JSON.stringify([560, 613]));
{
  {
fl_set.add(JSON.stringify([588, 613]));
sum += object[j][i]
fl_set.add(JSON.stringify([592, 611]));
}}
}
min = Math.min(min, sum)
fl_set.add(JSON.stringify([614, 638]));
}}
}
console.log(min)
fl_set.add(JSON.stringify([643, 659]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

