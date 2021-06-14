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
fl_set.add(JSON.stringify([0, 78]));
var [n, m] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([0, 78]));
fl_set.add(JSON.stringify([51, 77]));
{
    {
fl_set.add(JSON.stringify([51, 77]));
fl_set.add(JSON.stringify([57, 75]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([0, 78]));
fl_set.add(JSON.stringify([79, 141]));
var s = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([79, 141]));
fl_set.add(JSON.stringify([124, 140]));
{
    {
fl_set.add(JSON.stringify([124, 140]));
fl_set.add(JSON.stringify([130, 138]));
return x;
}}
}
)
fl_set.add(JSON.stringify([79, 141]));
fl_set.add(JSON.stringify([142, 204]));
var t = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([142, 204]));
fl_set.add(JSON.stringify([187, 203]));
{
    {
fl_set.add(JSON.stringify([187, 203]));
fl_set.add(JSON.stringify([193, 201]));
return x;
}}
}
)
fl_set.add(JSON.stringify([142, 204]));
var pos1 = {}, pos2 = {}
fl_set.add(JSON.stringify([205, 229]));
var j = 0
fl_set.add(JSON.stringify([230, 239]));
fl_set.add(JSON.stringify([240, 325]));
for (let i = 0; i < m; i++) {
fl_set.add(JSON.stringify([240, 325]));
fl_set.add(JSON.stringify([268, 325]));
{
    {
fl_set.add(JSON.stringify([268, 325]));
fl_set.add(JSON.stringify([274, 299]));
while (t[i] !== s[j]) {
fl_set.add(JSON.stringify([274, 299]));
j++
fl_set.add(JSON.stringify([296, 299]));
}
pos1[i] = j
fl_set.add(JSON.stringify([304, 315]));
j++
fl_set.add(JSON.stringify([320, 323]));
}}
}
j = n - 1
fl_set.add(JSON.stringify([326, 335]));
fl_set.add(JSON.stringify([336, 449]));
for (let i = m-1; i >=0; i--) {
fl_set.add(JSON.stringify([336, 449]));
fl_set.add(JSON.stringify([366, 449]));
{
    {
fl_set.add(JSON.stringify([366, 449]));
fl_set.add(JSON.stringify([372, 421]));
while (t[i] !== s[j] && j>=0) {
fl_set.add(JSON.stringify([372, 421]));
fl_set.add(JSON.stringify([402, 421]));
{
        {
fl_set.add(JSON.stringify([402, 421]));
j--
fl_set.add(JSON.stringify([412, 415]));
}}
}
pos2[i] = j
fl_set.add(JSON.stringify([426, 437]));
j--
fl_set.add(JSON.stringify([442, 445]));
}}
}
var max = 1
fl_set.add(JSON.stringify([451, 462]));
fl_set.add(JSON.stringify([463, 551]));
for (let i = 0; i < m-1; i++) {
fl_set.add(JSON.stringify([463, 551]));
fl_set.add(JSON.stringify([493, 551]));
{
    {
fl_set.add(JSON.stringify([493, 551]));
max = Math.max(max, Math.abs(pos2[i+1] - pos1[i]))
fl_set.add(JSON.stringify([499, 549]));
}}
}
console.log(max)
fl_set.add(JSON.stringify([552, 568]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

