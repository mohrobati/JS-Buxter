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
fl_set.add(JSON.stringify([29, 102]));
{
    {
fl_set.add(JSON.stringify([75, 101]));
fl_set.add(JSON.stringify([81, 99]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([29, 102]));
var count = new Array(n + 2).fill(0)
fl_set.add(JSON.stringify([103, 139]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([140, 189]));
{
    {
fl_set.add(JSON.stringify([168, 189]));
count[a[i]]++
fl_set.add(JSON.stringify([174, 187]));
}}
}
var b = count.slice()
fl_set.add(JSON.stringify([190, 211]));
var max = 0
fl_set.add(JSON.stringify([214, 225]));
for (let i = 0; i < n + 2; i++) {
fl_set.add(JSON.stringify([226, 526]));
{
 
    {
fl_set.add(JSON.stringify([258, 526]));
if (i - 1 >= 0 && b[i - 1] > 0) {
fl_set.add(JSON.stringify([266, 355]));
{
        {
fl_set.add(JSON.stringify([298, 355]));
max++
fl_set.add(JSON.stringify([308, 313]));
b[i - 1]--
fl_set.add(JSON.stringify([322, 332]));
}}
}
if (b[i] > 0) {
fl_set.add(JSON.stringify([360, 427]));
{
        {
fl_set.add(JSON.stringify([374, 427]));
max++
fl_set.add(JSON.stringify([384, 389]));
b[i]--
fl_set.add(JSON.stringify([398, 404]));
}}
}
if (i + 1 < n + 2 && b[i + 1] > 0) {
fl_set.add(JSON.stringify([432, 524]));
{
        {
fl_set.add(JSON.stringify([467, 524]));
max++
fl_set.add(JSON.stringify([477, 482]));
b[i + 1]--
fl_set.add(JSON.stringify([491, 501]));
}}
}
}
}
b = count.slice()
fl_set.add(JSON.stringify([531, 548]));
var min = 0
fl_set.add(JSON.stringify([549, 560]));
for (let i = 0; i < n+2; i++) {
fl_set.add(JSON.stringify([561, 648]));
{
    {
fl_set.add(JSON.stringify([591, 648]));
if(b[i] !==0) {
fl_set.add(JSON.stringify([597, 646]));
{
        {
fl_set.add(JSON.stringify([611, 646]));
i=i+2
fl_set.add(JSON.stringify([621, 626]));
min++
fl_set.add(JSON.stringify([635, 640]));
}}
}
}}
}
console.log(min, max)
fl_set.add(JSON.stringify([653, 674]));
function checkString(a) {
fl_set.add(JSON.stringify([676, 955]));
{
    {
fl_set.add(JSON.stringify([700, 955]));
var count = 0
fl_set.add(JSON.stringify([706, 719]));
var res = true
fl_set.add(JSON.stringify([724, 738]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([743, 903]));
{
        {
fl_set.add(JSON.stringify([778, 903]));
if (a[i] === '(') {
fl_set.add(JSON.stringify([788, 897]));
count++
fl_set.add(JSON.stringify([806, 813]));
} else {
fl_set.add(JSON.stringify([827, 897]));
{
            {
fl_set.add(JSON.stringify([827, 897]));
count--
fl_set.add(JSON.stringify([841, 848]));
if (count < 0) {
fl_set.add(JSON.stringify([861, 887]));
res = false
fl_set.add(JSON.stringify([876, 887]));
}
}}
}}}
}
if (count !== 0) {
fl_set.add(JSON.stringify([908, 936]));
res = false
fl_set.add(JSON.stringify([925, 936]));
}
fl_set.add(JSON.stringify([941, 951]));
return res;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

