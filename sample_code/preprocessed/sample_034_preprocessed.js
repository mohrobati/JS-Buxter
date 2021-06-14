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
fl_set.add(JSON.stringify([29, 681]));
Array(parseInt(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([29, 681]));
fl_set.add(JSON.stringify([72, 680]));
{
{
fl_set.add(JSON.stringify([72, 680]));
fl_set.add(JSON.stringify([74, 135]));
var a = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([74, 135]));
fl_set.add(JSON.stringify([119, 133]));
{
  {
fl_set.add(JSON.stringify([119, 133]));
fl_set.add(JSON.stringify([123, 131]));
return x;
}}
}
)
fl_set.add(JSON.stringify([74, 135]));
fl_set.add(JSON.stringify([136, 197]));
var b = readline().split('').map((x, iii) => {
fl_set.add(JSON.stringify([136, 197]));
fl_set.add(JSON.stringify([181, 195]));
{
  {
fl_set.add(JSON.stringify([181, 195]));
fl_set.add(JSON.stringify([185, 193]));
return x;
}}
}
)
fl_set.add(JSON.stringify([136, 197]));
var position = {}
fl_set.add(JSON.stringify([198, 215]));
fl_set.add(JSON.stringify([216, 322]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([216, 322]));
fl_set.add(JSON.stringify([251, 322]));
{
  {
fl_set.add(JSON.stringify([251, 322]));
fl_set.add(JSON.stringify([255, 295]));
if (!position[a[i]]) {
fl_set.add(JSON.stringify([255, 295]));
position[a[i]] = []
fl_set.add(JSON.stringify([276, 295]));
}
position[a[i]].push(i)
fl_set.add(JSON.stringify([298, 320]));
}}
}
var pos = -1
fl_set.add(JSON.stringify([325, 337]));
var exist = true
fl_set.add(JSON.stringify([338, 354]));
var ans = 1
fl_set.add(JSON.stringify([355, 366]));
fl_set.add(JSON.stringify([367, 624]));
for (let i = 0; i < b.length; i++) {
fl_set.add(JSON.stringify([367, 624]));
fl_set.add(JSON.stringify([402, 624]));
{
  {
fl_set.add(JSON.stringify([402, 624]));
fl_set.add(JSON.stringify([406, 460]));
if (!position[b[i]]) {
fl_set.add(JSON.stringify([406, 460]));
fl_set.add(JSON.stringify([427, 460]));
{
    {
fl_set.add(JSON.stringify([427, 460]));
exist = false
fl_set.add(JSON.stringify([433, 446]));
fl_set.add(JSON.stringify([451, 456]));
break;
}}
}
var j = 0
fl_set.add(JSON.stringify([463, 472]));
j = find(pos, position[b[i]])
fl_set.add(JSON.stringify([475, 504]));
fl_set.add(JSON.stringify([507, 596]));
if (j === position[b[i]].length) {
fl_set.add(JSON.stringify([507, 596]));
fl_set.add(JSON.stringify([540, 596]));
{
    {
fl_set.add(JSON.stringify([540, 596]));
ans++
fl_set.add(JSON.stringify([546, 551]));
pos = position[b[i]][0]
fl_set.add(JSON.stringify([556, 579]));
fl_set.add(JSON.stringify([584, 592]));
continue;
}}
}
pos = position[b[i]][j]
fl_set.add(JSON.stringify([599, 622]));
}}
}
fl_set.add(JSON.stringify([627, 661]));
if (!exist) {
fl_set.add(JSON.stringify([627, 661]));
fl_set.add(JSON.stringify([639, 661]));
return console.log(-1);
}
console.log(ans)
fl_set.add(JSON.stringify([662, 678]));
}}
}
)
fl_set.add(JSON.stringify([29, 681]));
fl_set.add(JSON.stringify([687, 886]));
function find(value, a) {
fl_set.add(JSON.stringify([687, 886]));
fl_set.add(JSON.stringify([711, 886]));
{
    {
fl_set.add(JSON.stringify([711, 886]));
var l = -1
fl_set.add(JSON.stringify([717, 727]));
var r = a.length
fl_set.add(JSON.stringify([732, 748]));
fl_set.add(JSON.stringify([753, 871]));
while (r > l + 1) {
fl_set.add(JSON.stringify([753, 871]));
fl_set.add(JSON.stringify([771, 871]));
{
    {
fl_set.add(JSON.stringify([771, 871]));
var m = Math.floor((r + l) / 2)
fl_set.add(JSON.stringify([777, 808]));
fl_set.add(JSON.stringify([813, 837]));
if (a[m] <= value) {
fl_set.add(JSON.stringify([813, 837]));
l = m
fl_set.add(JSON.stringify([832, 837]));
}
fl_set.add(JSON.stringify([842, 865]));
if (a[m] > value) {
fl_set.add(JSON.stringify([842, 865]));
r = m
fl_set.add(JSON.stringify([860, 865]));
}
}}
}
fl_set.add(JSON.stringify([876, 884]));
return r;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

