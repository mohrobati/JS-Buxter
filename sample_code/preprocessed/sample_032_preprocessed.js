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
a = a.sort((a, b) => a - b)
fl_set.add(JSON.stringify([102, 129]));
var b = []
fl_set.add(JSON.stringify([130, 140]));
var c = []
fl_set.add(JSON.stringify([141, 151]));
fl_set.add(JSON.stringify([154, 214]));
for (let i = 0; i < Math.floor(n / 2); i++) {
fl_set.add(JSON.stringify([154, 214]));
fl_set.add(JSON.stringify([198, 214]));
{
{
fl_set.add(JSON.stringify([198, 214]));
b.push(a[i])
fl_set.add(JSON.stringify([200, 212]));
}}
}
fl_set.add(JSON.stringify([215, 275]));
for (let i = Math.floor(n / 2); i < n; i++) {
fl_set.add(JSON.stringify([215, 275]));
fl_set.add(JSON.stringify([259, 275]));
{
{
fl_set.add(JSON.stringify([259, 275]));
c.push(a[i])
fl_set.add(JSON.stringify([261, 273]));
}}
}
fl_set.add(JSON.stringify([278, 399]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([278, 399]));
fl_set.add(JSON.stringify([306, 399]));
{
{
fl_set.add(JSON.stringify([306, 399]));
fl_set.add(JSON.stringify([308, 352]));
if (i % 2 === 0) {
fl_set.add(JSON.stringify([308, 352]));
a[i] = c[Math.floor(i / 2)]
fl_set.add(JSON.stringify([325, 352]));
}
fl_set.add(JSON.stringify([353, 397]));
if (i % 2 === 1) {
fl_set.add(JSON.stringify([353, 397]));
a[i] = b[Math.floor(i / 2)]
fl_set.add(JSON.stringify([370, 397]));
}
}}
}
var ans = 0
fl_set.add(JSON.stringify([400, 411]));
fl_set.add(JSON.stringify([412, 493]));
for (let i = 1; i < n - 1; i++) {
fl_set.add(JSON.stringify([412, 493]));
fl_set.add(JSON.stringify([444, 493]));
{
{
fl_set.add(JSON.stringify([444, 493]));
fl_set.add(JSON.stringify([446, 491]));
if (a[i - 1] > a[i] && a[i + 1] > a[i]) {
fl_set.add(JSON.stringify([446, 491]));
ans++
fl_set.add(JSON.stringify([486, 491]));
}
}}
}
console.log(ans)
fl_set.add(JSON.stringify([494, 510]));
console.log(a.join(' '))
fl_set.add(JSON.stringify([511, 535]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

