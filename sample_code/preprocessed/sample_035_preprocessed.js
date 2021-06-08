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
var x = parseInt(readline())
fl_set.add(JSON.stringify([0, 28]));
Array(parseInt(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([29, 205]));
{
{
fl_set.add(JSON.stringify([72, 204]));
var [n, x] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([74, 151]));
{
  {
fl_set.add(JSON.stringify([125, 149]));
fl_set.add(JSON.stringify([129, 147]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([74, 151]));
var count = euler(x/gcd(x,n))
fl_set.add(JSON.stringify([154, 183]));
console.log(count)
fl_set.add(JSON.stringify([184, 202]));
}}
}
)
fl_set.add(JSON.stringify([29, 205]));
function euler(x) {
fl_set.add(JSON.stringify([209, 476]));
{
  {
fl_set.add(JSON.stringify([227, 476]));
var ans = x
fl_set.add(JSON.stringify([231, 242]));
for (let i = 2; i * i <= x; i++) {
fl_set.add(JSON.stringify([245, 412]));
{
    {
fl_set.add(JSON.stringify([278, 412]));
if (x % i === 0) {
fl_set.add(JSON.stringify([284, 408]));
{
      {
fl_set.add(JSON.stringify([301, 408]));
ans = ans / i
fl_set.add(JSON.stringify([309, 322]));
ans = ans * (i - 1)
fl_set.add(JSON.stringify([329, 348]));
while (x % i === 0) {
fl_set.add(JSON.stringify([355, 402]));
{
        {
fl_set.add(JSON.stringify([375, 402]));
x = x / i
fl_set.add(JSON.stringify([385, 394]));
}}
}
}}
}
}}
}
if (x > 1) {
fl_set.add(JSON.stringify([415, 461]));
{
    {
fl_set.add(JSON.stringify([426, 461]));
ans /= x
fl_set.add(JSON.stringify([432, 440]));
ans *= x - 1
fl_set.add(JSON.stringify([445, 457]));
}}
}
fl_set.add(JSON.stringify([464, 474]));
return ans;
}}
}
function gcd(a, b) {
fl_set.add(JSON.stringify([479, 555]));
{
  {
fl_set.add(JSON.stringify([498, 555]));
if (!b) {
fl_set.add(JSON.stringify([502, 529]));
{
    {
fl_set.add(JSON.stringify([510, 529]));
fl_set.add(JSON.stringify([516, 525]));
return a;;
}}
}
fl_set.add(JSON.stringify([532, 553]));
return gcd(b, a % b);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

