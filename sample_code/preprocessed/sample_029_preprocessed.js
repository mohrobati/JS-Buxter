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
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([85, 155]));
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
fl_set.add(JSON.stringify([158, 169]));
var b = []
fl_set.add(JSON.stringify([170, 180]));
var sum = 0
fl_set.add(JSON.stringify([181, 192]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([193, 251]));
{
{
fl_set.add(JSON.stringify([221, 251]));
if (a[i] > max) {
fl_set.add(JSON.stringify([223, 249]));
max = a[i]
fl_set.add(JSON.stringify([239, 249]));
}
}}
}
var g = max - a[0]
fl_set.add(JSON.stringify([252, 270]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([271, 337]));
{
{
fl_set.add(JSON.stringify([299, 337]));
g = gcd(g, max - a[i])
fl_set.add(JSON.stringify([301, 323]));
sum += a[i]
fl_set.add(JSON.stringify([324, 335]));
}}
}
var ans = n
fl_set.add(JSON.stringify([338, 349]));
console.log((max * n - sum) / g, g)
fl_set.add(JSON.stringify([350, 385]));
function gcd(a, b) {
fl_set.add(JSON.stringify([388, 464]));
{
  {
fl_set.add(JSON.stringify([407, 464]));
if (!b) {
fl_set.add(JSON.stringify([411, 438]));
{
    {
fl_set.add(JSON.stringify([419, 438]));
fl_set.add(JSON.stringify([425, 434]));
return a;;
}}
}
fl_set.add(JSON.stringify([441, 462]));
return gcd(b, a % b);;
}}
}
function find(value, a) {
fl_set.add(JSON.stringify([466, 655]));
{
  {
fl_set.add(JSON.stringify([490, 655]));
var l = -1
fl_set.add(JSON.stringify([494, 504]));
var r = a.length
fl_set.add(JSON.stringify([507, 523]));
while (r > l + 1) {
fl_set.add(JSON.stringify([526, 642]));
{
    {
fl_set.add(JSON.stringify([544, 642]));
var m = Math.floor((r + l) / 2)
fl_set.add(JSON.stringify([550, 581]));
if (a[m] < value) {
fl_set.add(JSON.stringify([586, 609]));
l = m
fl_set.add(JSON.stringify([604, 609]));
}
if (a[m] >= value) {
fl_set.add(JSON.stringify([614, 638]));
r = m
fl_set.add(JSON.stringify([633, 638]));
}
}}
}
fl_set.add(JSON.stringify([645, 653]));
return r;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

