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
fl_set.add(JSON.stringify([10, 614]));
{
{
fl_set.add(JSON.stringify([28, 614]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([30, 58]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([61, 130]));
{
{
fl_set.add(JSON.stringify([107, 129]));
fl_set.add(JSON.stringify([109, 127]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([61, 130]));
var map = {}
fl_set.add(JSON.stringify([133, 145]));
var sum = 0
fl_set.add(JSON.stringify([146, 157]));
var x = 0
fl_set.add(JSON.stringify([158, 167]));
var y = 0
fl_set.add(JSON.stringify([168, 177]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([178, 515]));
{
{
fl_set.add(JSON.stringify([206, 515]));
for (let j = i + 1; j < n; j++) {
fl_set.add(JSON.stringify([208, 513]));
{
  {
fl_set.add(JSON.stringify([240, 513]));
sum = a[i] + a[j]
fl_set.add(JSON.stringify([244, 261]));
if (!map[sum]) {
fl_set.add(JSON.stringify([264, 511]));
map[sum] = `${i}:${j}`
fl_set.add(JSON.stringify([279, 301]));
} else {
fl_set.add(JSON.stringify([309, 511]));
{
    {
fl_set.add(JSON.stringify([309, 511]));
[x, y] = map[sum].split(':').map(x => parseInt(x))
fl_set.add(JSON.stringify([315, 365]));
if (x !== i && x !== j && y !== i && y !== j) {
fl_set.add(JSON.stringify([370, 507]));
{
      {
fl_set.add(JSON.stringify([416, 507]));
console.log('YES')
fl_set.add(JSON.stringify([424, 442]));
console.log(i + 1, j + 1, x + 1, y + 1)
fl_set.add(JSON.stringify([449, 488]));
fl_set.add(JSON.stringify([495, 501]));
return;
}}
}
}}
}}}
}
}}
}
console.log('NO')
fl_set.add(JSON.stringify([516, 533]));
function gcd(a, b) {
fl_set.add(JSON.stringify([536, 612]));
{
  {
fl_set.add(JSON.stringify([555, 612]));
if (!b) {
fl_set.add(JSON.stringify([559, 586]));
{
    {
fl_set.add(JSON.stringify([567, 586]));
fl_set.add(JSON.stringify([573, 582]));
return a;;
}}
}
fl_set.add(JSON.stringify([589, 610]));
return gcd(b, a % b);;
}}
}
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

