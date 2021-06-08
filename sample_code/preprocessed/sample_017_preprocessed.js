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
var maxN = 21
fl_set.add(JSON.stringify([0, 13]));
var mod = 1000000007
fl_set.add(JSON.stringify([14, 34]));
var n = BigInt(readline())
fl_set.add(JSON.stringify([36, 62]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([63, 131]));
{
{
fl_set.add(JSON.stringify([109, 129]));
fl_set.add(JSON.stringify([111, 127]));
return BigInt(x);
}}
}
)
fl_set.add(JSON.stringify([63, 131]));
var b = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([132, 200]));
{
{
fl_set.add(JSON.stringify([178, 198]));
fl_set.add(JSON.stringify([180, 196]));
return BigInt(x);
}}
}
)
fl_set.add(JSON.stringify([132, 200]));
for (let i = BigInt(1); i <= n; i++) {
fl_set.add(JSON.stringify([201, 303]));
{
{
fl_set.add(JSON.stringify([238, 303]));
a[i - BigInt(1)] = a[i - BigInt(1)] * i * (n - i + BigInt(1))
fl_set.add(JSON.stringify([240, 301]));
}}
}
a = a.sort((a, b) => {
fl_set.add(JSON.stringify([304, 411]));
{
{
fl_set.add(JSON.stringify([325, 409]));
if (a > b) {
fl_set.add(JSON.stringify([327, 407]));
{
  {
fl_set.add(JSON.stringify([338, 353]));
fl_set.add(JSON.stringify([342, 351]));
return 1;;
}}
} else if (a < b) {
fl_set.add(JSON.stringify([359, 407]));
{
  {
fl_set.add(JSON.stringify([370, 386]));
fl_set.add(JSON.stringify([374, 384]));
return -1;;
}}
} else {
fl_set.add(JSON.stringify([392, 407]));
{
  {
fl_set.add(JSON.stringify([392, 407]));
fl_set.add(JSON.stringify([396, 405]));
return 0;;
}}
}}}
}
)
fl_set.add(JSON.stringify([304, 411]));
b = b.sort((a, b) => {
fl_set.add(JSON.stringify([412, 518]));
{
{
fl_set.add(JSON.stringify([433, 517]));
if (a > b) {
fl_set.add(JSON.stringify([435, 515]));
{
  {
fl_set.add(JSON.stringify([446, 461]));
fl_set.add(JSON.stringify([450, 459]));
return 1;;
}}
} else if (a < b) {
fl_set.add(JSON.stringify([467, 515]));
{
  {
fl_set.add(JSON.stringify([478, 494]));
fl_set.add(JSON.stringify([482, 492]));
return -1;;
}}
} else {
fl_set.add(JSON.stringify([500, 515]));
{
  {
fl_set.add(JSON.stringify([500, 515]));
fl_set.add(JSON.stringify([504, 513]));
return 0;;
}}
}}}
}
)
fl_set.add(JSON.stringify([412, 518]));
var sum = BigInt(0)
fl_set.add(JSON.stringify([521, 540]));
for (let i = BigInt(0); i < n; i++) {
fl_set.add(JSON.stringify([541, 628]));
{
{
fl_set.add(JSON.stringify([577, 628]));
sum = (sum + a[i] * b[n - i - BigInt(1)]) % mod
fl_set.add(JSON.stringify([579, 626]));
}}
}
console.log(sum.toString())
fl_set.add(JSON.stringify([630, 657]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

