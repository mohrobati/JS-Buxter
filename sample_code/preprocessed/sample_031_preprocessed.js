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
fl_set.add(JSON.stringify([10, 892]));
function func_1(){
fl_set.add(JSON.stringify([10, 892]));
fl_set.add(JSON.stringify([27, 892]));
{
{
fl_set.add(JSON.stringify([27, 892]));
fl_set.add(JSON.stringify([29, 104]));
var [n, k] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([29, 104]));
fl_set.add(JSON.stringify([80, 102]));
{
{
fl_set.add(JSON.stringify([80, 102]));
fl_set.add(JSON.stringify([82, 100]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([29, 104]));
var mark = new Array(201).fill(0)
fl_set.add(JSON.stringify([107, 140]));
var a = new Array(n)
fl_set.add(JSON.stringify([141, 161]));
fl_set.add(JSON.stringify([162, 347]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([162, 347]));
fl_set.add(JSON.stringify([190, 347]));
{
{
fl_set.add(JSON.stringify([190, 347]));
fl_set.add(JSON.stringify([192, 269]));
var [l, r] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([192, 269]));
fl_set.add(JSON.stringify([243, 267]));
{
  {
fl_set.add(JSON.stringify([243, 267]));
fl_set.add(JSON.stringify([247, 265]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([192, 269]));
fl_set.add(JSON.stringify([270, 314]));
for (let j = l; j <= r; j++) {
fl_set.add(JSON.stringify([270, 314]));
fl_set.add(JSON.stringify([299, 314]));
{
  {
fl_set.add(JSON.stringify([299, 314]));
mark[j]++
fl_set.add(JSON.stringify([303, 312]));
}}
}
a[i] = [l, r]
fl_set.add(JSON.stringify([315, 328]));
a[i].pos = i + 1
fl_set.add(JSON.stringify([329, 345]));
}}
}
var used = new Array(n).fill(false)
fl_set.add(JSON.stringify([350, 385]));
var cpunt = 0
fl_set.add(JSON.stringify([386, 399]));
var ans = []
fl_set.add(JSON.stringify([400, 412]));
fl_set.add(JSON.stringify([415, 838]));
for (let i = 0; i < 201; i++) {
fl_set.add(JSON.stringify([415, 838]));
fl_set.add(JSON.stringify([445, 838]));
{
{
fl_set.add(JSON.stringify([445, 838]));
fl_set.add(JSON.stringify([447, 834]));
if (mark[i] > k) {
fl_set.add(JSON.stringify([447, 834]));
fl_set.add(JSON.stringify([464, 834]));
{
  {
fl_set.add(JSON.stringify([464, 834]));
var jj = i
fl_set.add(JSON.stringify([468, 478]));
l = i
fl_set.add(JSON.stringify([481, 486]));
var max = -1
fl_set.add(JSON.stringify([489, 501]));
var maxI = i
fl_set.add(JSON.stringify([504, 516]));
r = jj
fl_set.add(JSON.stringify([519, 525]));
fl_set.add(JSON.stringify([528, 700]));
for (let j = 0; j < a.length; j++) {
fl_set.add(JSON.stringify([528, 700]));
fl_set.add(JSON.stringify([563, 700]));
{
    {
fl_set.add(JSON.stringify([563, 700]));
fl_set.add(JSON.stringify([569, 696]));
if (a[j][0] <= l && a[j][1] >= r && !used[j]) {
fl_set.add(JSON.stringify([569, 696]));
fl_set.add(JSON.stringify([615, 696]));
{
      {
fl_set.add(JSON.stringify([615, 696]));
fl_set.add(JSON.stringify([623, 690]));
if (a[j][1] > max) {
fl_set.add(JSON.stringify([623, 690]));
fl_set.add(JSON.stringify([642, 690]));
{
        {
fl_set.add(JSON.stringify([642, 690]));
max = a[j][1]
fl_set.add(JSON.stringify([652, 665]));
maxI = j
fl_set.add(JSON.stringify([674, 682]));
}}
}
}}
}
}}
}
used[maxI] = true
fl_set.add(JSON.stringify([703, 720]));
fl_set.add(JSON.stringify([723, 789]));
for (let m = a[maxI][0]; m <= a[maxI][1]; m++) {
fl_set.add(JSON.stringify([723, 789]));
fl_set.add(JSON.stringify([770, 789]));
{
    {
fl_set.add(JSON.stringify([770, 789]));
mark[m]--
fl_set.add(JSON.stringify([776, 785]));
}}
}
cpunt++
fl_set.add(JSON.stringify([794, 801]));
ans.push(a[maxI].pos)
fl_set.add(JSON.stringify([804, 825]));
i=-1
fl_set.add(JSON.stringify([828, 832]));
}}
}
}}
}
console.log(ans.length)
fl_set.add(JSON.stringify([839, 862]));
console.log(ans.join(' '))
fl_set.add(JSON.stringify([863, 889]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

