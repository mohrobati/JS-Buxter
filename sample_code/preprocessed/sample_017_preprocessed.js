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
fl_set.add(JSON.stringify([38, 585]));
Array(Number(x)).fill(1).map((t, i) => {
fl_set.add(JSON.stringify([38, 585]));
fl_set.add(JSON.stringify([77, 584]));
{
    {
fl_set.add(JSON.stringify([77, 584]));
var [n, m] = readline().split(' ').map(x => Number(x));
fl_set.add(JSON.stringify([83, 138]));
var sum = 0
fl_set.add(JSON.stringify([143, 154]));
var sum2 = 0
fl_set.add(JSON.stringify([159, 171]));
var array2 = []
fl_set.add(JSON.stringify([176, 191]));
fl_set.add(JSON.stringify([196, 273]));
var k = readline().split(' ').map(x => {
fl_set.add(JSON.stringify([196, 273]));
fl_set.add(JSON.stringify([235, 271]));
{
        {
fl_set.add(JSON.stringify([235, 271]));
fl_set.add(JSON.stringify([245, 265]));
return Number(x) - 1;
}}
}
)
fl_set.add(JSON.stringify([196, 273]));
fl_set.add(JSON.stringify([278, 351]));
var c = readline().split(' ').map(x => {
fl_set.add(JSON.stringify([278, 351]));
fl_set.add(JSON.stringify([317, 349]));
{
        {
fl_set.add(JSON.stringify([317, 349]));
fl_set.add(JSON.stringify([327, 343]));
return Number(x);
}}
}
)
fl_set.add(JSON.stringify([278, 351]));
k = k.sort((a, b) => b - a)
fl_set.add(JSON.stringify([356, 383]));
var sum = 0
fl_set.add(JSON.stringify([388, 399]));
var j = 0
fl_set.add(JSON.stringify([404, 413]));
fl_set.add(JSON.stringify([418, 561]));
k.map((x, i) => {
fl_set.add(JSON.stringify([418, 561]));
fl_set.add(JSON.stringify([434, 560]));
{
        {
fl_set.add(JSON.stringify([434, 560]));
fl_set.add(JSON.stringify([444, 553]));
if (c[j] < c[x]) {
fl_set.add(JSON.stringify([444, 553]));
fl_set.add(JSON.stringify([461, 512]));
{
            {
fl_set.add(JSON.stringify([461, 512]));
sum += c[j]
fl_set.add(JSON.stringify([475, 486]));
j++
fl_set.add(JSON.stringify([499, 502]));
}}
} else {
fl_set.add(JSON.stringify([518, 553]));
fl_set.add(JSON.stringify([518, 553]));
{
            {
fl_set.add(JSON.stringify([518, 553]));
sum += c[x]
fl_set.add(JSON.stringify([532, 543]));
}}
}}}
}
)
fl_set.add(JSON.stringify([418, 561]));
console.log(sum)
fl_set.add(JSON.stringify([566, 582]));
}}
}
)
fl_set.add(JSON.stringify([38, 585]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

