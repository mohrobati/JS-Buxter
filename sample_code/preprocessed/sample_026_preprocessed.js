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
func_1()
fl_set.add(JSON.stringify([0, 8]));
fl_set.add(JSON.stringify([10, 667]));
function func_1() {
fl_set.add(JSON.stringify([10, 667]));
fl_set.add(JSON.stringify([28, 667]));
{
{
fl_set.add(JSON.stringify([28, 667]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([30, 58]));
var a = readline()
fl_set.add(JSON.stringify([59, 77]));
var b = readline()
fl_set.add(JSON.stringify([78, 96]));
var perm = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
fl_set.add(JSON.stringify([99, 152]));
fl_set.add(JSON.stringify([155, 647]));
for (let i = 0; i < perm.length; i++) {
fl_set.add(JSON.stringify([155, 647]));
fl_set.add(JSON.stringify([193, 647]));
{
    {
fl_set.add(JSON.stringify([193, 647]));
var toCompare = perm[i][0].repeat(n)
fl_set.add(JSON.stringify([199, 235]));
toCompare += perm[i][1].repeat(n)
fl_set.add(JSON.stringify([240, 273]));
toCompare += perm[i][2].repeat(n)
fl_set.add(JSON.stringify([278, 311]));
fl_set.add(JSON.stringify([316, 438]));
if (!toCompare.includes(b) && !toCompare.includes(a)) {
fl_set.add(JSON.stringify([316, 438]));
fl_set.add(JSON.stringify([370, 438]));
{
      {
fl_set.add(JSON.stringify([370, 438]));
console.log('YES')
fl_set.add(JSON.stringify([378, 396]));
fl_set.add(JSON.stringify([403, 432]));
return console.log(toCompare);
}}
}
toCompare = perm[i].repeat(n)
fl_set.add(JSON.stringify([443, 472]));
var first = !toCompare.includes(b)
fl_set.add(JSON.stringify([477, 511]));
var second = !toCompare.includes(a)
fl_set.add(JSON.stringify([516, 551]));
fl_set.add(JSON.stringify([556, 645]));
if (first && second) {
fl_set.add(JSON.stringify([556, 645]));
fl_set.add(JSON.stringify([577, 645]));
{
      {
fl_set.add(JSON.stringify([577, 645]));
console.log('YES')
fl_set.add(JSON.stringify([585, 603]));
fl_set.add(JSON.stringify([610, 639]));
return console.log(toCompare);
}}
}
}}
}
console.log('NO')
fl_set.add(JSON.stringify([648, 665]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

