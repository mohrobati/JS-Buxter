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
let a = readline()
fl_set.add(JSON.stringify([0, 18]));
let b = readline()
fl_set.add(JSON.stringify([19, 37]));
function gcdWrongPrint(a, b) {
fl_set.add(JSON.stringify([38, 279]));
{
    {
fl_set.add(JSON.stringify([67, 279]));
if(a == 0) {
fl_set.add(JSON.stringify([73, 129]));
{
        {
fl_set.add(JSON.stringify([84, 129]));
console.log(b)
fl_set.add(JSON.stringify([94, 108]));
fl_set.add(JSON.stringify([117, 123]));
return;
}}
}
while(b != 0) {
fl_set.add(JSON.stringify([134, 247]));
{
        {
fl_set.add(JSON.stringify([148, 247]));
if (a>b) {
fl_set.add(JSON.stringify([158, 241]));
{
            {
fl_set.add(JSON.stringify([167, 201]));
a = a - b;
fl_set.add(JSON.stringify([181, 191]));
}}
} else {
fl_set.add(JSON.stringify([207, 241]));
{
            {
fl_set.add(JSON.stringify([207, 241]));
b = b - a;
fl_set.add(JSON.stringify([221, 231]));
}}
}}}
}
console.log(a)
fl_set.add(JSON.stringify([252, 266]));
fl_set.add(JSON.stringify([271, 277]));
return;
}}
}
gcdWrongPrint(a, b)
fl_set.add(JSON.stringify([280, 299]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

