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
const xx = readline();
fl_set.add(JSON.stringify([0, 22]));
Array(Number(xx)).fill(1).map((t, i) => {
fl_set.add(JSON.stringify([23, 475]));
{
{
fl_set.add(JSON.stringify([63, 474]));
var n = parseInt(readline());
fl_set.add(JSON.stringify([65, 94]));
for (let j = 1; j < n ; j++) {
fl_set.add(JSON.stringify([199, 250]));
{
  {
fl_set.add(JSON.stringify([228, 250]));
{
fl_set.add(JSON.stringify([232, 248]));
{
fl_set.add(JSON.stringify([204, 214]));
{
fl_set.add(JSON.stringify([183, 198]));
{
fl_set.add(JSON.stringify([168, 182]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([95, 167]));
{
  {
fl_set.add(JSON.stringify([141, 165]));
fl_set.add(JSON.stringify([145, 163]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([95, 167]));
}

fl_set.add(JSON.stringify([168, 182]));
}

fl_set.add(JSON.stringify([183, 198]));
}

fl_set.add(JSON.stringify([204, 214]));
}

fl_set.add(JSON.stringify([232, 248]));
}}
}
if (res === 0) {
fl_set.add(JSON.stringify([253, 293]));
fl_set.add(JSON.stringify([268, 293]));
return console.log('YES');
}
var count = 0
fl_set.add(JSON.stringify([294, 307]));
var aa = 0
fl_set.add(JSON.stringify([310, 320]));
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([321, 414]));
{
  {
fl_set.add(JSON.stringify([349, 414]));
aa = a[j] ^aa
fl_set.add(JSON.stringify([353, 366]));
if(aa === res) {
fl_set.add(JSON.stringify([369, 412]));
{
    {
fl_set.add(JSON.stringify([384, 412]));
count++
fl_set.add(JSON.stringify([390, 397]));
aa = 0
fl_set.add(JSON.stringify([402, 408]));
}}
}
}}
}
if (count>=3) {
fl_set.add(JSON.stringify([415, 454]));
fl_set.add(JSON.stringify([429, 454]));
return console.log('YES');
}
console.log('NO')
fl_set.add(JSON.stringify([455, 472]));
}}
}
)
fl_set.add(JSON.stringify([23, 475]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

