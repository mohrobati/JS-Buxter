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
fl_set.add(JSON.stringify([0, 74]));
{
{
fl_set.add(JSON.stringify([51, 73]));
fl_set.add(JSON.stringify([53, 71]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 74]));
var a = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([75, 133]));
{
{
fl_set.add(JSON.stringify([120, 132]));
fl_set.add(JSON.stringify([122, 130]));
return x;
}}
}
)
fl_set.add(JSON.stringify([75, 133]));
var array = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([134, 197]));
{
{
fl_set.add(JSON.stringify([184, 196]));
fl_set.add(JSON.stringify([186, 194]));
return x;
}}
}
)
fl_set.add(JSON.stringify([134, 197]));
var count = 0
fl_set.add(JSON.stringify([200, 213]));
var ans = 0
fl_set.add(JSON.stringify([214, 225]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([226, 353]));
{
 
{
fl_set.add(JSON.stringify([254, 353]));
if (array.includes(a[i])) {
fl_set.add(JSON.stringify([258, 351]));
{
  {
fl_set.add(JSON.stringify([284, 297]));
count++
fl_set.add(JSON.stringify([288, 295]));
}}
} else {
fl_set.add(JSON.stringify([303, 351]));
{
  {
fl_set.add(JSON.stringify([303, 351]));
ans += count * (count + 1) / 2
fl_set.add(JSON.stringify([307, 337]));
count = 0
fl_set.add(JSON.stringify([340, 349]));
}}
}}
}
if (count !== 0) {
fl_set.add(JSON.stringify([354, 401]));
ans += count * (count + 1) / 2
fl_set.add(JSON.stringify([371, 401]));
}
console.log(ans)
fl_set.add(JSON.stringify([404, 420]));
var val = 0
fl_set.add(JSON.stringify([423, 434]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

