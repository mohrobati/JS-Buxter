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
Array(Number(x)).fill(1).map((t, i) => {
fl_set.add(JSON.stringify([25, 364]));
{
{
fl_set.add(JSON.stringify([64, 363]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([66, 94]));
var a = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([95, 164]));
{
  {
fl_set.add(JSON.stringify([139, 163]));
fl_set.add(JSON.stringify([143, 161]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([95, 164]));
var sum = 0
fl_set.add(JSON.stringify([167, 178]));
var max = 0
fl_set.add(JSON.stringify([179, 190]));
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([191, 266]));
{
  {
fl_set.add(JSON.stringify([219, 266]));
sum += a[j]
fl_set.add(JSON.stringify([223, 234]));
max = a[j]>max ? a[j] : max
fl_set.add(JSON.stringify([237, 264]));
}}
}
if (max > Math.floor(sum /2)) {
fl_set.add(JSON.stringify([267, 320]));
fl_set.add(JSON.stringify([297, 320]));
return console.log('T');
}
console.log(sum % 2 === 1? 'T' : 'HL')
fl_set.add(JSON.stringify([321, 359]));
}}
}
)
fl_set.add(JSON.stringify([25, 364]));
function getBaseLog(x, y) {
fl_set.add(JSON.stringify([366, 431]));
{
  {
fl_set.add(JSON.stringify([392, 431]));
fl_set.add(JSON.stringify([396, 429]));
return Math.log(y) / Math.log(x);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

