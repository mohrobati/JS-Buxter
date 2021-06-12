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
fl_set.add(JSON.stringify([29, 88]));
var a = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([29, 88]));
fl_set.add(JSON.stringify([74, 86]));
{
{
fl_set.add(JSON.stringify([74, 86]));
fl_set.add(JSON.stringify([76, 84]));
return x;
}}
}
)
fl_set.add(JSON.stringify([29, 88]));
var res = []
fl_set.add(JSON.stringify([89, 101]));
fl_set.add(JSON.stringify([102, 213]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([102, 213]));
fl_set.add(JSON.stringify([137, 213]));
{
{
fl_set.add(JSON.stringify([137, 213]));
fl_set.add(JSON.stringify([139, 211]));
if (res.length % 2 === 0 || res[res.length - 1] !== a[i]) {
fl_set.add(JSON.stringify([139, 211]));
res.push(a[i])
fl_set.add(JSON.stringify([197, 211]));
}
}}
}
var ans = []
fl_set.add(JSON.stringify([214, 226]));
fl_set.add(JSON.stringify([227, 291]));
if (res.length % 2 !== 0) {
fl_set.add(JSON.stringify([227, 291]));
fl_set.add(JSON.stringify([253, 291]));
{
{
fl_set.add(JSON.stringify([253, 291]));
res = res.slice(0, res.length - 1)
fl_set.add(JSON.stringify([255, 289]));
}}
}
console.log(a.length - res.length)
fl_set.add(JSON.stringify([292, 326]));
console.log(res.join(''))
fl_set.add(JSON.stringify([327, 352]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

