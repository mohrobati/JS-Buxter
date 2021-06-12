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
fl_set.add(JSON.stringify([29, 96]));
var a = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([29, 96]));
fl_set.add(JSON.stringify([73, 95]));
{
{
fl_set.add(JSON.stringify([73, 95]));
fl_set.add(JSON.stringify([75, 93]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([29, 96]));
a = a.sort((a, b) => a - b)
fl_set.add(JSON.stringify([99, 126]));
var sum1 = 0
fl_set.add(JSON.stringify([127, 139]));
var sum2 = 0
fl_set.add(JSON.stringify([140, 152]));
var max = a[n-1]
fl_set.add(JSON.stringify([153, 169]));
var base = Math.floor(Math.pow(max, 1/(n-1)))
fl_set.add(JSON.stringify([170, 215]));
var base1 = Math.ceil(Math.pow(max, 1/(n-1)))
fl_set.add(JSON.stringify([216, 261]));
var mult1 = 1
fl_set.add(JSON.stringify([264, 277]));
fl_set.add(JSON.stringify([278, 359]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([278, 359]));
fl_set.add(JSON.stringify([313, 359]));
{
{
fl_set.add(JSON.stringify([313, 359]));
sum1+= Math.abs(mult1 - a[i])
fl_set.add(JSON.stringify([315, 344]));
mult1*= base
fl_set.add(JSON.stringify([345, 357]));
}}
}
var mult2 = 1
fl_set.add(JSON.stringify([360, 373]));
fl_set.add(JSON.stringify([374, 456]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([374, 456]));
fl_set.add(JSON.stringify([409, 456]));
{
{
fl_set.add(JSON.stringify([409, 456]));
sum2+= Math.abs(mult2 - a[i])
fl_set.add(JSON.stringify([411, 440]));
mult2*= base1
fl_set.add(JSON.stringify([441, 454]));
}}
}
console.log(Math.min(sum1, sum2))
fl_set.add(JSON.stringify([457, 490]));
fl_set.add(JSON.stringify([495, 560]));
function getBaseLog(x, y) {
fl_set.add(JSON.stringify([495, 560]));
fl_set.add(JSON.stringify([521, 560]));
{
  {
fl_set.add(JSON.stringify([521, 560]));
fl_set.add(JSON.stringify([525, 558]));
return Math.log(y) / Math.log(x);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

