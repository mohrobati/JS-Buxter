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
fl_set.add(JSON.stringify([0, 74]));
var [n, k] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([0, 74]));
fl_set.add(JSON.stringify([51, 73]));
{
{
fl_set.add(JSON.stringify([51, 73]));
fl_set.add(JSON.stringify([53, 71]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 74]));
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
fl_set.add(JSON.stringify([75, 129]));
var res = []
fl_set.add(JSON.stringify([130, 142]));
fl_set.add(JSON.stringify([143, 389]));
while (res.length < n) {
fl_set.add(JSON.stringify([143, 389]));
fl_set.add(JSON.stringify([166, 389]));
{
    {
fl_set.add(JSON.stringify([166, 389]));
var letter = 0
fl_set.add(JSON.stringify([172, 186]));
fl_set.add(JSON.stringify([191, 387]));
for (let i = 0; i < k; i++) {
fl_set.add(JSON.stringify([191, 387]));
fl_set.add(JSON.stringify([219, 387]));
{
      {
fl_set.add(JSON.stringify([219, 387]));
res.push(alphabet[letter])
fl_set.add(JSON.stringify([227, 253]));
fl_set.add(JSON.stringify([260, 366]));
for (let j = i + 1; j < k; j++) {
fl_set.add(JSON.stringify([260, 366]));
fl_set.add(JSON.stringify([292, 366]));
{
        {
fl_set.add(JSON.stringify([292, 366]));
res.push(alphabet[letter])
fl_set.add(JSON.stringify([302, 328]));
res.push(alphabet[j])
fl_set.add(JSON.stringify([337, 358]));
}}
}
letter++
fl_set.add(JSON.stringify([373, 381]));
}}
}
}}
}
var ans = []
fl_set.add(JSON.stringify([390, 402]));
fl_set.add(JSON.stringify([403, 455]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([403, 455]));
fl_set.add(JSON.stringify([431, 455]));
{
    {
fl_set.add(JSON.stringify([431, 455]));
ans.push(res[i])
fl_set.add(JSON.stringify([437, 453]));
}}
}
console.log(ans.join(''))
fl_set.add(JSON.stringify([456, 481]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

