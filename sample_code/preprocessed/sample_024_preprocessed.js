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
var n = parseInt(readline())
fl_set.add(JSON.stringify([0, 28]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([29, 101]));
{
  {
fl_set.add(JSON.stringify([75, 99]));
fl_set.add(JSON.stringify([79, 97]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([29, 101]));
var g = a[0]
fl_set.add(JSON.stringify([102, 114]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([115, 172]));
{
  {
fl_set.add(JSON.stringify([150, 172]));
g = gcd(g, a[i])
fl_set.add(JSON.stringify([154, 170]));
}}
}
var i =1
fl_set.add(JSON.stringify([173, 181]));
var count =0
fl_set.add(JSON.stringify([182, 194]));
while (i*i<=g){
fl_set.add(JSON.stringify([195, 277]));
{
  {
fl_set.add(JSON.stringify([209, 277]));
if(g % i ===0){
fl_set.add(JSON.stringify([213, 269]));
{
    {
fl_set.add(JSON.stringify([227, 269]));
if(i!==g /i) {
fl_set.add(JSON.stringify([233, 253]));
count++
fl_set.add(JSON.stringify([246, 253]));
}
count++
fl_set.add(JSON.stringify([258, 265]));
}}
}
i++
fl_set.add(JSON.stringify([272, 275]));
}}
}
console.log(count)
fl_set.add(JSON.stringify([278, 296]));
function gcd(a, b) {
fl_set.add(JSON.stringify([300, 378]));
{
  {
fl_set.add(JSON.stringify([319, 378]));
if (!b) {
fl_set.add(JSON.stringify([323, 350]));
{
    {
fl_set.add(JSON.stringify([331, 350]));
fl_set.add(JSON.stringify([337, 346]));
return a;;
}}
}
fl_set.add(JSON.stringify([355, 376]));
return gcd(b, a % b);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

