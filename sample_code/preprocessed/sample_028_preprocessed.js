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
fl_set.add(JSON.stringify([10, 1019]));
{
{
fl_set.add(JSON.stringify([28, 1019]));
var [n, k] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([30, 105]));
{
{
fl_set.add(JSON.stringify([81, 103]));
fl_set.add(JSON.stringify([83, 101]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([30, 105]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([106, 176]));
{
{
fl_set.add(JSON.stringify([152, 174]));
fl_set.add(JSON.stringify([154, 172]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([106, 176]));
var answers = [0]
fl_set.add(JSON.stringify([179, 196]));
var i = 1
fl_set.add(JSON.stringify([197, 206]));
for (let j = 0; j < a.length; j++) {
fl_set.add(JSON.stringify([207, 330]));
{
{
fl_set.add(JSON.stringify([242, 330]));
var val = a[j]
fl_set.add(JSON.stringify([244, 258]));
while (val !== 0) {
fl_set.add(JSON.stringify([259, 328]));
{
  {
fl_set.add(JSON.stringify([277, 328]));
answers.push(val)
fl_set.add(JSON.stringify([281, 298]));
val = Math.floor(val / 2)
fl_set.add(JSON.stringify([301, 326]));
}}
}
}}
}
a = a.sort((a, b) => a - b)
fl_set.add(JSON.stringify([331, 358]));
var min = Number.MAX_SAFE_INTEGER
fl_set.add(JSON.stringify([359, 392]));
var object = new Array(2 * 10e4 + 1).fill(0)
fl_set.add(JSON.stringify([395, 439]));
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([440, 486]));
{
{
fl_set.add(JSON.stringify([468, 486]));
object[a[j]]++
fl_set.add(JSON.stringify([470, 484]));
}}
}
for (let j = 0; j < 2 * 10e4 + 1; j++) {
fl_set.add(JSON.stringify([487, 571]));
{
{
fl_set.add(JSON.stringify([526, 571]));
if (object[j] >= k) {
fl_set.add(JSON.stringify([528, 569]));
fl_set.add(JSON.stringify([548, 569]));
return console.log(0);
}
}}
}
for (let j = 0; j < answers.length; j++) {
fl_set.add(JSON.stringify([574, 998]));
{
{
fl_set.add(JSON.stringify([615, 998]));
var arrays = []
fl_set.add(JSON.stringify([617, 632]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([633, 824]));
{
  {
fl_set.add(JSON.stringify([661, 824]));
var val = a[i]
fl_set.add(JSON.stringify([665, 679]));
var sum1 = 0
fl_set.add(JSON.stringify([682, 694]));
while (val > answers[j]) {
fl_set.add(JSON.stringify([697, 768]));
{
    {
fl_set.add(JSON.stringify([722, 768]));
sum1++
fl_set.add(JSON.stringify([728, 734]));
val = Math.floor(val / 2)
fl_set.add(JSON.stringify([739, 764]));
}}
}
if (val === answers[j]) {
fl_set.add(JSON.stringify([771, 822]));
{
    {
fl_set.add(JSON.stringify([795, 822]));
arrays.push(sum1)
fl_set.add(JSON.stringify([801, 818]));
}}
}
}}
}
if (arrays.length >= k) {
fl_set.add(JSON.stringify([827, 992]));
{
  {
fl_set.add(JSON.stringify([851, 992]));
var sum = 0
fl_set.add(JSON.stringify([855, 866]));
arrays = arrays.sort((a, b) => a - b)
fl_set.add(JSON.stringify([869, 906]));
for (let l = 0; l < k; l++) {
fl_set.add(JSON.stringify([909, 963]));
{
    {
fl_set.add(JSON.stringify([937, 963]));
sum += arrays[l]
fl_set.add(JSON.stringify([943, 959]));
}}
}
min = Math.min(sum, min)
fl_set.add(JSON.stringify([966, 990]));
}}
}
}}
}
console.log(min)
fl_set.add(JSON.stringify([999, 1015]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

