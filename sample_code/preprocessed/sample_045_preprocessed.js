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
fl_set.add(JSON.stringify([29, 102]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([29, 102]));
fl_set.add(JSON.stringify([75, 101]));
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
fl_set.add(JSON.stringify([140, 189]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([140, 189]));
fl_set.add(JSON.stringify([168, 189]));
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
fl_set.add(JSON.stringify([212, 223]));
fl_set.add(JSON.stringify([224, 522]));
for (let i = 0; i < n + 2; i++) {
fl_set.add(JSON.stringify([224, 522]));
fl_set.add(JSON.stringify([256, 522]));
{
    {
fl_set.add(JSON.stringify([256, 522]));
fl_set.add(JSON.stringify([262, 351]));
if (i - 1 >= 0 && b[i - 1] > 0) {
fl_set.add(JSON.stringify([262, 351]));
fl_set.add(JSON.stringify([294, 351]));
{
        {
fl_set.add(JSON.stringify([294, 351]));
max++
fl_set.add(JSON.stringify([304, 309]));
b[i - 1]--
fl_set.add(JSON.stringify([318, 328]));
fl_set.add(JSON.stringify([337, 345]));
continue;
}}
}
fl_set.add(JSON.stringify([356, 423]));
if (b[i] > 0) {
fl_set.add(JSON.stringify([356, 423]));
fl_set.add(JSON.stringify([370, 423]));
{
        {
fl_set.add(JSON.stringify([370, 423]));
max++
fl_set.add(JSON.stringify([380, 385]));
b[i]--
fl_set.add(JSON.stringify([394, 400]));
fl_set.add(JSON.stringify([409, 417]));
continue;
}}
}
fl_set.add(JSON.stringify([428, 520]));
if (i + 1 < n + 2 && b[i + 1] > 0) {
fl_set.add(JSON.stringify([428, 520]));
fl_set.add(JSON.stringify([463, 520]));
{
        {
fl_set.add(JSON.stringify([463, 520]));
max++
fl_set.add(JSON.stringify([473, 478]));
b[i + 1]--
fl_set.add(JSON.stringify([487, 497]));
fl_set.add(JSON.stringify([506, 514]));
continue;
}}
}
}}
}
b = count.slice()
fl_set.add(JSON.stringify([524, 541]));
var min = 0
fl_set.add(JSON.stringify([542, 553]));
fl_set.add(JSON.stringify([554, 641]));
for (let i = 0; i < n+2; i++) {
fl_set.add(JSON.stringify([554, 641]));
fl_set.add(JSON.stringify([584, 641]));
{
    {
fl_set.add(JSON.stringify([584, 641]));
fl_set.add(JSON.stringify([590, 639]));
if(b[i] !==0) {
fl_set.add(JSON.stringify([590, 639]));
fl_set.add(JSON.stringify([604, 639]));
{
        {
fl_set.add(JSON.stringify([604, 639]));
i=i+2
fl_set.add(JSON.stringify([614, 619]));
min++
fl_set.add(JSON.stringify([628, 633]));
}}
}
}}
}
console.log(min, max)
fl_set.add(JSON.stringify([643, 664]));
fl_set.add(JSON.stringify([665, 943]));
function checkString(a) {
fl_set.add(JSON.stringify([665, 943]));
fl_set.add(JSON.stringify([689, 943]));
{
    {
fl_set.add(JSON.stringify([689, 943]));
var count = 0
fl_set.add(JSON.stringify([695, 708]));
var res = true
fl_set.add(JSON.stringify([713, 727]));
fl_set.add(JSON.stringify([732, 892]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([732, 892]));
fl_set.add(JSON.stringify([767, 892]));
{
        {
fl_set.add(JSON.stringify([767, 892]));
fl_set.add(JSON.stringify([777, 886]));
if (a[i] === '(') {
fl_set.add(JSON.stringify([777, 886]));
count++
fl_set.add(JSON.stringify([795, 802]));
} else {
fl_set.add(JSON.stringify([816, 886]));
fl_set.add(JSON.stringify([816, 886]));
{
            {
fl_set.add(JSON.stringify([816, 886]));
count--
fl_set.add(JSON.stringify([830, 837]));
fl_set.add(JSON.stringify([850, 876]));
if (count < 0) {
fl_set.add(JSON.stringify([850, 876]));
res = false
fl_set.add(JSON.stringify([865, 876]));
}
}}
}}}
}
fl_set.add(JSON.stringify([897, 925]));
if (count !== 0) {
fl_set.add(JSON.stringify([897, 925]));
res = false
fl_set.add(JSON.stringify([914, 925]));
}
fl_set.add(JSON.stringify([930, 940]));
return res;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

