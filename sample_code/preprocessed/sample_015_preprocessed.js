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
fl_set.add(JSON.stringify([10, 764]));
{
    {
fl_set.add(JSON.stringify([28, 764]));
var n = BigInt(readline())
fl_set.add(JSON.stringify([34, 60]));
var a = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([61, 126]));
{
{
fl_set.add(JSON.stringify([105, 125]));
fl_set.add(JSON.stringify([107, 123]));
return BigInt(x);
}}
}
)
fl_set.add(JSON.stringify([61, 126]));
if(n=== BigInt(n)) {
fl_set.add(JSON.stringify([129, 274]));
{
 
{
fl_set.add(JSON.stringify([148, 274]));
console.log(1, 1)
fl_set.add(JSON.stringify([152, 169]));
console.log(-a[0].toString())
fl_set.add(JSON.stringify([170, 199]));
console.log(1, 1)
fl_set.add(JSON.stringify([200, 217]));
console.log(0)
fl_set.add(JSON.stringify([218, 232]));
console.log(1, 1)
fl_set.add(JSON.stringify([233, 250]));
console.log(0)
fl_set.add(JSON.stringify([251, 265]));
fl_set.add(JSON.stringify([266, 272]));
return;
}
}
var ans = []
fl_set.add(JSON.stringify([275, 287]));
for (let i = BigInt(0); i < n - BigInt(n); i++) {
fl_set.add(JSON.stringify([288, 400]));
{
{
fl_set.add(JSON.stringify([336, 400]));
var j =(a[i]% n) * (n-BigInt(n))
fl_set.add(JSON.stringify([338, 370]));
a[i] = a[i] + j
fl_set.add(JSON.stringify([371, 386]));
ans.push(j)
fl_set.add(JSON.stringify([387, 398]));
}}
}
var ans2 = []
fl_set.add(JSON.stringify([403, 416]));
j = BigInt(a[n-BigInt(n)]% n)
fl_set.add(JSON.stringify([417, 446]));
a[n - BigInt(n)] = a[n - BigInt(n)] - j
fl_set.add(JSON.stringify([449, 488]));
ans2.push(-j)
fl_set.add(JSON.stringify([489, 502]));
var ans3 = []
fl_set.add(JSON.stringify([505, 518]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([519, 567]));
{
{
fl_set.add(JSON.stringify([547, 567]));
ans3.push(-a[i])
fl_set.add(JSON.stringify([549, 565]));
}}
}
console.log(1, (n-BigInt(n)).toString())
fl_set.add(JSON.stringify([570, 610]));
console.log(ans.join(' '))
fl_set.add(JSON.stringify([611, 637]));
console.log(n.toString(), n.toString())
fl_set.add(JSON.stringify([638, 677]));
console.log(ans2.join(' '))
fl_set.add(JSON.stringify([678, 705]));
console.log(1, n.toString())
fl_set.add(JSON.stringify([706, 734]));
console.log(ans3.join(' '))
fl_set.add(JSON.stringify([735, 762]));
}}
}
function getBaseLog(x, y) {
fl_set.add(JSON.stringify([766, 831]));
{
  {
fl_set.add(JSON.stringify([792, 831]));
fl_set.add(JSON.stringify([796, 829]));
return Math.log(y) / Math.log(x);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

