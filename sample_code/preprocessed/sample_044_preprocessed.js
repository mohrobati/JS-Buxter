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
const x = readline();
fl_set.add(JSON.stringify([1, 22]));
Array(Number(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([23, 704]));
{
{
fl_set.add(JSON.stringify([64, 703]));
var [n, m] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([66, 142]));
{
  {
fl_set.add(JSON.stringify([117, 141]));
fl_set.add(JSON.stringify([121, 139]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([66, 142]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([145, 220]));
{
  {
fl_set.add(JSON.stringify([191, 219]));
fl_set.add(JSON.stringify([195, 217]));
return parseInt(x) - 1;
}}
}
)
fl_set.add(JSON.stringify([145, 220]));
var stopIndex = n
fl_set.add(JSON.stringify([223, 240]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([241, 304]));
{
  {
fl_set.add(JSON.stringify([269, 304]));
if (a[i] !== i) {
fl_set.add(JSON.stringify([273, 302]));
stopIndex = i
fl_set.add(JSON.stringify([289, 302]));
}
}}
}
var rr = new Array(m).fill(1)
fl_set.add(JSON.stringify([305, 334]));
var pp = new Array(m).fill(1)
fl_set.add(JSON.stringify([335, 364]));
for (let i = 0; i < m; i++) {
fl_set.add(JSON.stringify([367, 545]));
{
  {
fl_set.add(JSON.stringify([395, 545]));
var [r, p] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([399, 519]));
{
    {
fl_set.add(JSON.stringify([450, 518]));
if (iii === 1) {
fl_set.add(JSON.stringify([456, 491]));
fl_set.add(JSON.stringify([471, 491]));
return parseFloat(x);
}
fl_set.add(JSON.stringify([496, 514]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([399, 519]));
rr[i] = r
fl_set.add(JSON.stringify([522, 531]));
pp[i] = p
fl_set.add(JSON.stringify([534, 543]));
}}
}
if (stopIndex === n) {
fl_set.add(JSON.stringify([548, 590]));
fl_set.add(JSON.stringify([569, 590]));
return console.log(1);
}
var ans = 1
fl_set.add(JSON.stringify([593, 604]));
for (let i = 0; i < m; i++) {
fl_set.add(JSON.stringify([605, 678]));
{
  {
fl_set.add(JSON.stringify([633, 678]));
if (rr[i]>stopIndex) {
fl_set.add(JSON.stringify([637, 676]));
ans *= (1 - pp[i])
fl_set.add(JSON.stringify([658, 676]));
}
}}
}
console.log(1 - ans)
fl_set.add(JSON.stringify([679, 699]));
}}
}
)
fl_set.add(JSON.stringify([23, 704]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

