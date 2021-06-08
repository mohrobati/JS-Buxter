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
function func_1() {
fl_set.add(JSON.stringify([10, 425]));
{
{
fl_set.add(JSON.stringify([28, 425]));
var [n, k, l] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([30, 107]));
{
{
fl_set.add(JSON.stringify([84, 106]));
fl_set.add(JSON.stringify([86, 104]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([30, 107]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([110, 179]));
{
{
fl_set.add(JSON.stringify([156, 178]));
fl_set.add(JSON.stringify([158, 176]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([110, 179]));
a = a.sort((a, b) => a - b)
fl_set.add(JSON.stringify([180, 207]));
var i = 0
fl_set.add(JSON.stringify([208, 217]));
while (a[i] <= a[0] + l) {
fl_set.add(JSON.stringify([218, 246]));
i++
fl_set.add(JSON.stringify([243, 246]));
}
var count = i
fl_set.add(JSON.stringify([247, 260]));
if (count < n) {
fl_set.add(JSON.stringify([263, 299]));
fl_set.add(JSON.stringify([278, 299]));
return console.log(0);
}
var ans = 0
fl_set.add(JSON.stringify([302, 313]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([314, 406]));
{
{
fl_set.add(JSON.stringify([342, 406]));
var index = Math.min(i * k, count - (n - i))
fl_set.add(JSON.stringify([344, 388]));
ans += a[index]
fl_set.add(JSON.stringify([389, 404]));
}}
}
console.log(ans)
fl_set.add(JSON.stringify([407, 423]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

