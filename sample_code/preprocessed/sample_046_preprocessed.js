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
Array(Number(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([23, 477]));
{
    {
fl_set.add(JSON.stringify([64, 476]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([70, 98]));
var x = new Array(n)
fl_set.add(JSON.stringify([103, 123]));
for (let i = 2; i*i*i <= n; i++) {
fl_set.add(JSON.stringify([128, 452]));
{
        {
fl_set.add(JSON.stringify([161, 452]));
for (let j = i + 1; i*j*j <= n; j++) {
fl_set.add(JSON.stringify([171, 446]));
{
            {
fl_set.add(JSON.stringify([208, 446]));
if(n%(i*j) !==0 ) continue
var c = n / (i * j)
fl_set.add(JSON.stringify([261, 280]));
if (c !== j && c !== i && c > 2) {
fl_set.add(JSON.stringify([293, 436]));
{
                {
fl_set.add(JSON.stringify([326, 436]));
console.log('YES')
fl_set.add(JSON.stringify([344, 362]));
console.log(i, j, c)
fl_set.add(JSON.stringify([379, 399]));
fl_set.add(JSON.stringify([416, 422]));
return;
}}
}
}}
}
}}
}
console.log('NO')
fl_set.add(JSON.stringify([457, 474]));
}}
}
)
fl_set.add(JSON.stringify([23, 477]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

