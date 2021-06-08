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
var [n, m, k] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([0, 78]));
{
{
fl_set.add(JSON.stringify([54, 76]));
fl_set.add(JSON.stringify([56, 74]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 78]));
var a = new Array(k)
fl_set.add(JSON.stringify([79, 99]));
for (let i = 0; i < k; i++) {
fl_set.add(JSON.stringify([100, 203]));
{
{
fl_set.add(JSON.stringify([128, 203]));
a[i] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([130, 201]));
{
  {
fl_set.add(JSON.stringify([175, 199]));
fl_set.add(JSON.stringify([179, 197]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([130, 201]));
}}
}
var b = new Array(k)
fl_set.add(JSON.stringify([204, 224]));
for (let i = 0; i < k; i++) {
fl_set.add(JSON.stringify([225, 328]));
{
{
fl_set.add(JSON.stringify([253, 328]));
b[i] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([255, 326]));
{
  {
fl_set.add(JSON.stringify([300, 324]));
fl_set.add(JSON.stringify([304, 322]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([255, 326]));
}}
}
var ans = []
fl_set.add(JSON.stringify([331, 343]));
for (let i = 0; i < n - 1; i++) {
fl_set.add(JSON.stringify([344, 393]));
{
{
fl_set.add(JSON.stringify([376, 393]));
ans.push('D')
fl_set.add(JSON.stringify([378, 391]));
}}
}
for (let i = 0; i < m - 1; i++) {
fl_set.add(JSON.stringify([394, 443]));
{
{
fl_set.add(JSON.stringify([426, 443]));
ans.push('L')
fl_set.add(JSON.stringify([428, 441]));
}}
}
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([444, 561]));
{
{
fl_set.add(JSON.stringify([472, 561]));
for (let j = 0; j < m - 1; j++) {
fl_set.add(JSON.stringify([474, 545]));
{
  {
fl_set.add(JSON.stringify([506, 545]));
ans.push(i % 2 === 0 ? 'R' : 'L')
fl_set.add(JSON.stringify([510, 543]));
}}
}
ans.push('U')
fl_set.add(JSON.stringify([546, 559]));
}}
}
console.log(ans.length)
fl_set.add(JSON.stringify([562, 585]));
console.log(ans.join(''))
fl_set.add(JSON.stringify([586, 611]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

