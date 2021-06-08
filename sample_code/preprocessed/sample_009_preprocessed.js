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
fl_set.add(JSON.stringify([10, 517]));
{
    {
fl_set.add(JSON.stringify([28, 517]));
var n = parseInt(readline());
fl_set.add(JSON.stringify([34, 63]));
{
fl_set.add(JSON.stringify([176, 211]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([68, 171]));
{
      {
fl_set.add(JSON.stringify([114, 169]));
fl_set.add(JSON.stringify([122, 163]));
return { value: parseInt(x), index: iii };
}}
}
)
fl_set.add(JSON.stringify([68, 171]));
}

fl_set.add(JSON.stringify([176, 211]));
if (!partition(a)) {
fl_set.add(JSON.stringify([216, 256]));
fl_set.add(JSON.stringify([235, 256]));
return console.log(0);
}
var copy = []
fl_set.add(JSON.stringify([261, 274]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([279, 515]));
{
      {
fl_set.add(JSON.stringify([307, 515]));
copy = []
fl_set.add(JSON.stringify([315, 324]));
for (let j = 0; j < n; j++) {
fl_set.add(JSON.stringify([331, 405]));
{
        {
fl_set.add(JSON.stringify([359, 405]));
if (j !== i) {
fl_set.add(JSON.stringify([369, 397]));
copy.push(a[j])
fl_set.add(JSON.stringify([382, 397]));
}
}}
}
if (!partition(copy)) {
fl_set.add(JSON.stringify([412, 509]));
{
        {
fl_set.add(JSON.stringify([434, 509]));
console.log(1)
fl_set.add(JSON.stringify([444, 458]));
fl_set.add(JSON.stringify([467, 501]));
return console.log(a[i].index + 1);
}}
}
}}
}
}}
}
function partition(arr) {
fl_set.add(JSON.stringify([519, 1168]));
{
  {
fl_set.add(JSON.stringify([543, 1168]));
var n = arr.length
fl_set.add(JSON.stringify([547, 565]));
var sum = 0;
fl_set.add(JSON.stringify([568, 580]));
var i, j;
fl_set.add(JSON.stringify([583, 592]));
for (i = 0; i < n; i++)
    {
fl_set.add(JSON.stringify([596, 644]));
sum += arr[i].value;
fl_set.add(JSON.stringify([624, 644]));
}
if (sum % 2 !== 0)
    {
fl_set.add(JSON.stringify([649, 685]));
fl_set.add(JSON.stringify([672, 685]));
return false;;
}
var part = new Array(n + 1)
fl_set.add(JSON.stringify([689, 716]));
for (let k = 0; k < n + 1; k++) {
fl_set.add(JSON.stringify([719, 805]));
{
    {
fl_set.add(JSON.stringify([751, 805]));
part[k] = new Array(Math.floor(sum / 2) + 1)
fl_set.add(JSON.stringify([757, 801]));
}}
}
for (i = 0; i <= sum / 2; i++)
    {
fl_set.add(JSON.stringify([809, 863]));
part[0][i] = false;
fl_set.add(JSON.stringify([844, 863]));
}
for (i = 0; i <= n; i++)
    {
fl_set.add(JSON.stringify([867, 914]));
part[i][0] = true;
fl_set.add(JSON.stringify([896, 914]));
}
for (i = 1; i <= n; i++) {
fl_set.add(JSON.stringify([918, 1139]));
{
    {
fl_set.add(JSON.stringify([943, 1139]));
for (j = 1; j <= sum / 2; j++) {
fl_set.add(JSON.stringify([949, 1135]));
{
      {
fl_set.add(JSON.stringify([980, 1135]));
part[i][j] = part[i - 1][j];
fl_set.add(JSON.stringify([988, 1016]));
if (j >= arr[i - 1].value)
        {
fl_set.add(JSON.stringify([1023, 1129]));
part[i][j] = part[i][j] ||
          part[i - 1][j - arr[i - 1].value];
fl_set.add(JSON.stringify([1058, 1129]));
}
}}
}
}}
}
fl_set.add(JSON.stringify([1142, 1166]));
return part[n][sum / 2];;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

