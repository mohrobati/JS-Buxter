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
Array(Number(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([22, 619]));
{
    {
fl_set.add(JSON.stringify([63, 618]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([69, 97]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([102, 183]));
{
        {
fl_set.add(JSON.stringify([148, 182]));
fl_set.add(JSON.stringify([158, 176]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([102, 183]));
var sum = 0
fl_set.add(JSON.stringify([188, 199]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([204, 259]));
{
        {
fl_set.add(JSON.stringify([232, 259]));
sum += a[i]
fl_set.add(JSON.stringify([242, 253]));
}}
}
if (sum === 0) {
fl_set.add(JSON.stringify([264, 303]));
fl_set.add(JSON.stringify([279, 303]));
return console.log('NO');
}
console.log('YES')
fl_set.add(JSON.stringify([308, 326]));
sum = 0
fl_set.add(JSON.stringify([331, 338]));
var answer = true
fl_set.add(JSON.stringify([343, 360]));
a = a.sort((a, b) => a - b)
fl_set.add(JSON.stringify([365, 392]));
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([397, 490]));
{
        {
fl_set.add(JSON.stringify([425, 490]));
sum += a[j]
fl_set.add(JSON.stringify([435, 446]));
if (sum === 0) {
fl_set.add(JSON.stringify([455, 484]));
answer = false
fl_set.add(JSON.stringify([470, 484]));
}
}}
}
if (answer) {
fl_set.add(JSON.stringify([495, 554]));
{
        {
fl_set.add(JSON.stringify([507, 554]));
fl_set.add(JSON.stringify([517, 548]));
return console.log(a.join(' '));
}}
}
a = a.sort((a, b) => b - a)
fl_set.add(JSON.stringify([559, 586]));
console.log(a.join(' '))
fl_set.add(JSON.stringify([591, 615]));
}}
}
)
fl_set.add(JSON.stringify([22, 619]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

