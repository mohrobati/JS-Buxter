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
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
fl_set.add(JSON.stringify([1, 55]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([56, 84]));
fl_set.add(JSON.stringify([85, 155]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([85, 155]));
fl_set.add(JSON.stringify([131, 153]));
{
{
fl_set.add(JSON.stringify([131, 153]));
fl_set.add(JSON.stringify([133, 151]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([85, 155]));
var max = 0
fl_set.add(JSON.stringify([179, 190]));
var b = []
fl_set.add(JSON.stringify([191, 201]));
var sum = 0
fl_set.add(JSON.stringify([202, 213]));
fl_set.add(JSON.stringify([214, 272]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([214, 272]));
fl_set.add(JSON.stringify([242, 272]));
{
{
fl_set.add(JSON.stringify([242, 272]));
fl_set.add(JSON.stringify([244, 270]));
if (a[i] > max) {
fl_set.add(JSON.stringify([244, 270]));
max = a[i]
fl_set.add(JSON.stringify([260, 270]));
}
}}
}
var g = max - a[0]
fl_set.add(JSON.stringify([273, 291]));
fl_set.add(JSON.stringify([292, 358]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([292, 358]));
fl_set.add(JSON.stringify([320, 358]));
{
{
fl_set.add(JSON.stringify([320, 358]));
g = gcd(g, max - a[i])
fl_set.add(JSON.stringify([322, 344]));
sum += a[i]
fl_set.add(JSON.stringify([345, 356]));
}}
}
var ans = n
fl_set.add(JSON.stringify([359, 370]));
console.log((max * n - sum) / g, g)
fl_set.add(JSON.stringify([371, 406]));
fl_set.add(JSON.stringify([409, 485]));
function gcd(a, b) {
fl_set.add(JSON.stringify([409, 485]));
fl_set.add(JSON.stringify([428, 485]));
{
  {
fl_set.add(JSON.stringify([428, 485]));
fl_set.add(JSON.stringify([432, 459]));
if (!b) {
fl_set.add(JSON.stringify([432, 459]));
fl_set.add(JSON.stringify([440, 459]));
{
    {
fl_set.add(JSON.stringify([440, 459]));
fl_set.add(JSON.stringify([446, 455]));
return a;;
}}
}
fl_set.add(JSON.stringify([462, 483]));
return gcd(b, a % b);;
}}
}
fl_set.add(JSON.stringify([487, 676]));
function find(value, a) {
fl_set.add(JSON.stringify([487, 676]));
fl_set.add(JSON.stringify([511, 676]));
{
  {
fl_set.add(JSON.stringify([511, 676]));
var l = -1
fl_set.add(JSON.stringify([515, 525]));
var r = a.length
fl_set.add(JSON.stringify([528, 544]));
fl_set.add(JSON.stringify([547, 663]));
while (r > l + 1) {
fl_set.add(JSON.stringify([547, 663]));
fl_set.add(JSON.stringify([565, 663]));
{
    {
fl_set.add(JSON.stringify([565, 663]));
var m = Math.floor((r + l) / 2)
fl_set.add(JSON.stringify([571, 602]));
fl_set.add(JSON.stringify([607, 630]));
if (a[m] < value) {
fl_set.add(JSON.stringify([607, 630]));
l = m
fl_set.add(JSON.stringify([625, 630]));
}
fl_set.add(JSON.stringify([635, 659]));
if (a[m] >= value) {
fl_set.add(JSON.stringify([635, 659]));
r = m
fl_set.add(JSON.stringify([654, 659]));
}
}}
}
fl_set.add(JSON.stringify([666, 674]));
return r;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

