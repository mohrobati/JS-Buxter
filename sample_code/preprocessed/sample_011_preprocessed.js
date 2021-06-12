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
fl_set.add(JSON.stringify([143, 353]));
while (res.length < n) {
fl_set.add(JSON.stringify([143, 353]));
fl_set.add(JSON.stringify([166, 353]));
{
{
fl_set.add(JSON.stringify([166, 353]));
var letter = 0
fl_set.add(JSON.stringify([168, 182]));
fl_set.add(JSON.stringify([183, 351]));
for (let i = 0; i < k; i++) {
fl_set.add(JSON.stringify([183, 351]));
fl_set.add(JSON.stringify([211, 351]));
{
  {
fl_set.add(JSON.stringify([211, 351]));
res.push(alphabet[letter])
fl_set.add(JSON.stringify([215, 241]));
fl_set.add(JSON.stringify([244, 338]));
for (let j = i + 1; j < k; j++) {
fl_set.add(JSON.stringify([244, 338]));
fl_set.add(JSON.stringify([276, 338]));
{
    {
fl_set.add(JSON.stringify([276, 338]));
res.push(alphabet[letter])
fl_set.add(JSON.stringify([282, 308]));
res.push(alphabet[j])
fl_set.add(JSON.stringify([313, 334]));
}}
}
letter++
fl_set.add(JSON.stringify([341, 349]));
}}
}
}}
}
var ans= []
fl_set.add(JSON.stringify([354, 365]));
fl_set.add(JSON.stringify([366, 414]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([366, 414]));
fl_set.add(JSON.stringify([394, 414]));
{
{
fl_set.add(JSON.stringify([394, 414]));
ans.push(res[i])
fl_set.add(JSON.stringify([396, 412]));
}}
}
console.log(ans.join(''))
fl_set.add(JSON.stringify([415, 440]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

