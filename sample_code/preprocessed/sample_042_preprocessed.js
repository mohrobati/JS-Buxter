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
fl_set.add(JSON.stringify([0, 76]));
{
  {
fl_set.add(JSON.stringify([51, 75]));
fl_set.add(JSON.stringify([55, 73]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 76]));
var a = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([77, 137]));
{
  {
fl_set.add(JSON.stringify([122, 136]));
fl_set.add(JSON.stringify([126, 134]));
return x;
}}
}
)
fl_set.add(JSON.stringify([77, 137]));
var array = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([138, 203]));
{
  {
fl_set.add(JSON.stringify([188, 202]));
fl_set.add(JSON.stringify([192, 200]));
return x;
}}
}
)
fl_set.add(JSON.stringify([138, 203]));
var count = 0
fl_set.add(JSON.stringify([204, 217]));
var ans = 0
fl_set.add(JSON.stringify([218, 229]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([230, 367]));
{
  {
fl_set.add(JSON.stringify([258, 367]));
if (array.includes(a[i])) {
fl_set.add(JSON.stringify([262, 365]));
{
    {
fl_set.add(JSON.stringify([288, 305]));
count++
fl_set.add(JSON.stringify([294, 301]));
}}
} else {
fl_set.add(JSON.stringify([311, 365]));
{
    {
fl_set.add(JSON.stringify([311, 365]));
ans += count * (count + 1) / 2
fl_set.add(JSON.stringify([317, 347]));
count = 0
fl_set.add(JSON.stringify([352, 361]));
}}
}}}
}
if (count !== 0) {
fl_set.add(JSON.stringify([368, 415]));
ans += count * (count + 1) / 2
fl_set.add(JSON.stringify([385, 415]));
}
console.log(ans)
fl_set.add(JSON.stringify([416, 432]));
var val = 0
fl_set.add(JSON.stringify([433, 444]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

