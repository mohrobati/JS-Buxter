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
fl_set.add(JSON.stringify([11, 871]));
function func_1() {
fl_set.add(JSON.stringify([11, 871]));
fl_set.add(JSON.stringify([29, 871]));
{
  {
fl_set.add(JSON.stringify([29, 871]));
fl_set.add(JSON.stringify([33, 114]));
var [n, m] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([33, 114]));
fl_set.add(JSON.stringify([84, 112]));
{
    {
fl_set.add(JSON.stringify([84, 112]));
fl_set.add(JSON.stringify([90, 108]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([33, 114]));
fl_set.add(JSON.stringify([117, 193]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([117, 193]));
fl_set.add(JSON.stringify([163, 191]));
{
    {
fl_set.add(JSON.stringify([163, 191]));
fl_set.add(JSON.stringify([169, 187]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([117, 193]));
fl_set.add(JSON.stringify([196, 272]));
var b = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([196, 272]));
fl_set.add(JSON.stringify([242, 270]));
{
    {
fl_set.add(JSON.stringify([242, 270]));
fl_set.add(JSON.stringify([248, 266]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([196, 272]));
var max = 0
fl_set.add(JSON.stringify([275, 286]));
fl_set.add(JSON.stringify([289, 459]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([289, 459]));
fl_set.add(JSON.stringify([317, 459]));
{
    {
fl_set.add(JSON.stringify([317, 459]));
var min = a[i]
fl_set.add(JSON.stringify([323, 337]));
fl_set.add(JSON.stringify([342, 426]));
for (let j = 0; j < m; j++) {
fl_set.add(JSON.stringify([342, 426]));
fl_set.add(JSON.stringify([370, 426]));
{
      {
fl_set.add(JSON.stringify([370, 426]));
fl_set.add(JSON.stringify([378, 420]));
if ((b[j] & a[i]) < min) {
fl_set.add(JSON.stringify([378, 420]));
min = b[j] & a[i]
fl_set.add(JSON.stringify([403, 420]));
}
}}
}
max = Math.max(max, min)
fl_set.add(JSON.stringify([431, 455]));
}}
}
var ans = 0
fl_set.add(JSON.stringify([462, 473]));
var add = 0
fl_set.add(JSON.stringify([476, 487]));
var exist
fl_set.add(JSON.stringify([490, 499]));
var answer
fl_set.add(JSON.stringify([502, 512]));
fl_set.add(JSON.stringify([515, 869]));
for (let k = 0; k < 513; k++) {
fl_set.add(JSON.stringify([515, 869]));
fl_set.add(JSON.stringify([545, 869]));
{
    {
fl_set.add(JSON.stringify([545, 869]));
answer = true
fl_set.add(JSON.stringify([551, 564]));
fl_set.add(JSON.stringify([569, 813]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([569, 813]));
fl_set.add(JSON.stringify([597, 813]));
{
      {
fl_set.add(JSON.stringify([597, 813]));
exist = false
fl_set.add(JSON.stringify([605, 618]));
fl_set.add(JSON.stringify([625, 734]));
for (let j = 0; j < m; j++) {
fl_set.add(JSON.stringify([625, 734]));
fl_set.add(JSON.stringify([653, 734]));
{
        {
fl_set.add(JSON.stringify([653, 734]));
fl_set.add(JSON.stringify([663, 726]));
if ((b[j] & a[i] | k) === k) {
fl_set.add(JSON.stringify([663, 726]));
fl_set.add(JSON.stringify([692, 726]));
{
          {
fl_set.add(JSON.stringify([692, 726]));
exist = true
fl_set.add(JSON.stringify([704, 716]));
}}
}
}}
}
fl_set.add(JSON.stringify([772, 807]));
if (exist === false) {
fl_set.add(JSON.stringify([772, 807]));
answer = false
fl_set.add(JSON.stringify([793, 807]));
}
}}
}
fl_set.add(JSON.stringify([818, 865]));
if (answer) {
fl_set.add(JSON.stringify([818, 865]));
fl_set.add(JSON.stringify([830, 865]));
{
      {
fl_set.add(JSON.stringify([830, 865]));
fl_set.add(JSON.stringify([838, 859]));
return console.log(k);
}}
}
}}
}
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

