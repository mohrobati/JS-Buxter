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
var [n, a, b, k] = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([0, 82]));
{
    {
fl_set.add(JSON.stringify([55, 81]));
fl_set.add(JSON.stringify([61, 79]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 82]));
var array = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([85, 162]));
{
 
    {
fl_set.add(JSON.stringify([133, 161]));
fl_set.add(JSON.stringify([141, 159]));
return parseInt(x);
}
}
)
fl_set.add(JSON.stringify([85, 162]));
var res = new Array(n)
fl_set.add(JSON.stringify([163, 185]));
var aa = 0
fl_set.add(JSON.stringify([186, 196]));
{
fl_set.add(JSON.stringify([399, 430]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([197, 398]));
{
    {
fl_set.add(JSON.stringify([225, 398]));
if (array[i] % (a + b) === 0) {
fl_set.add(JSON.stringify([231, 396]));
{
        {
fl_set.add(JSON.stringify([261, 312]));
res[i] = Math.ceil((a + b) / a) - 1
fl_set.add(JSON.stringify([271, 306]));
}}
} else {
fl_set.add(JSON.stringify([318, 396]));
{
        {
fl_set.add(JSON.stringify([318, 396]));
aa = array[i] % (a + b)
fl_set.add(JSON.stringify([328, 351]));
res[i] = Math.ceil(aa / a) - 1
fl_set.add(JSON.stringify([360, 390]));
}}
}}}
}
}

fl_set.add(JSON.stringify([399, 430]));
var ans = 0
fl_set.add(JSON.stringify([431, 442]));
var kk = k
fl_set.add(JSON.stringify([443, 453]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([454, 610]));
{
    {
fl_set.add(JSON.stringify([482, 610]));
if (res[i] <= 0) {
fl_set.add(JSON.stringify([488, 543]));
{
        {
fl_set.add(JSON.stringify([505, 543]));
ans++
fl_set.add(JSON.stringify([515, 520]));
}}
}
if (kk >= res[i]) {
fl_set.add(JSON.stringify([548, 608]));
{
        {
fl_set.add(JSON.stringify([566, 608]));
ans++
fl_set.add(JSON.stringify([576, 581]));
kk -= res[i]
fl_set.add(JSON.stringify([590, 602]));
}}
}
}}
}
console.log(ans)
fl_set.add(JSON.stringify([611, 627]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

