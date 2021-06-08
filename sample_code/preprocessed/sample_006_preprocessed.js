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
fl_set.add(JSON.stringify([0, 21]));
var answer = []
fl_set.add(JSON.stringify([22, 37]));
Array(Number(x)).fill(1).map((t, i) => {
fl_set.add(JSON.stringify([38, 288]));
{
    {
fl_set.add(JSON.stringify([77, 287]));
var n = Number(readline());
fl_set.add(JSON.stringify([83, 110]));
var line = readline();
fl_set.add(JSON.stringify([115, 137]));
var i =n-1
fl_set.add(JSON.stringify([142, 152]));
var count = 0
fl_set.add(JSON.stringify([157, 170]));
while(i>=0 && line[i] ===')'){
fl_set.add(JSON.stringify([175, 239]));
{
        {
fl_set.add(JSON.stringify([204, 239]));
i--
fl_set.add(JSON.stringify([214, 217]));
count++
fl_set.add(JSON.stringify([226, 233]));
}}
}
console.log(n-count < count ? 'YES':'NO')
fl_set.add(JSON.stringify([244, 285]));
}}
}
)
fl_set.add(JSON.stringify([38, 288]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

