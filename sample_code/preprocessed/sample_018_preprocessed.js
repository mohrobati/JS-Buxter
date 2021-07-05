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
fl_set.add(JSON.stringify([102, 212]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([102, 212]));
fl_set.add(JSON.stringify([137, 212]));
{
{
fl_set.add(JSON.stringify([137, 212]));
fl_set.add(JSON.stringify([139, 210]));
if (res.length % 2 === 0 || res[res.length - 1] == a[i]) {
fl_set.add(JSON.stringify([139, 210]));
res.push(a[i])
fl_set.add(JSON.stringify([196, 210]));
}
}}
}
var ans = []
fl_set.add(JSON.stringify([213, 225]));
fl_set.add(JSON.stringify([226, 290]));
if (res.length % 2 !== 0) {
fl_set.add(JSON.stringify([226, 290]));
fl_set.add(JSON.stringify([252, 290]));
{
{
fl_set.add(JSON.stringify([252, 290]));
res = res.slice(0, res.length - 1)
fl_set.add(JSON.stringify([254, 288]));
}}
}
console.log(a.length - res.length)
fl_set.add(JSON.stringify([291, 325]));
console.log(res.join(''))
fl_set.add(JSON.stringify([326, 351]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

