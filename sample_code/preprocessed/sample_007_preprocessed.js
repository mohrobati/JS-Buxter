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
function longestCommonSubstring(string1, string2) {
fl_set.add(JSON.stringify([209, 1727]));
{
  const s1 = [...string1];
  {
fl_set.add(JSON.stringify([259, 1727]));
{
fl_set.add(JSON.stringify([290, 314]));
{
fl_set.add(JSON.stringify([263, 287]));
Array(parseInt(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([29, 207]));
{

{
fl_set.add(JSON.stringify([72, 206]));
var a = readline()
fl_set.add(JSON.stringify([75, 93]));
var b = readline()
fl_set.add(JSON.stringify([94, 112]));
var string = longestCommonSubstring(a,b)
fl_set.add(JSON.stringify([113, 153]));
console.log(a.length + b.length - 2*string.length)
fl_set.add(JSON.stringify([154, 204]));
}}
}
)
fl_set.add(JSON.stringify([29, 207]));
}

fl_set.add(JSON.stringify([263, 287]));
}

fl_set.add(JSON.stringify([290, 314]));
for (let columnIndex = 0; columnIndex <= s1.length; columnIndex += 1) {
fl_set.add(JSON.stringify([439, 555]));
{
    {
fl_set.add(JSON.stringify([509, 555]));
{
fl_set.add(JSON.stringify([515, 551]));
{
fl_set.add(JSON.stringify([444, 464]));
const substringMatrix = Array(s2.length + 1).fill(null).map(() => {
fl_set.add(JSON.stringify([318, 435]));
{
    {
fl_set.add(JSON.stringify([384, 433]));
fl_set.add(JSON.stringify([390, 429]));
return Array(s1.length + 1).fill(null);;
}}
}
)
fl_set.add(JSON.stringify([318, 435]));
}

fl_set.add(JSON.stringify([444, 464]));
}

fl_set.add(JSON.stringify([515, 551]));
}}
}
for (let rowIndex = 0; rowIndex <= s2.length; rowIndex += 1) {
fl_set.add(JSON.stringify([559, 663]));
{
    {
fl_set.add(JSON.stringify([620, 663]));
substringMatrix[rowIndex][0] = 0;
fl_set.add(JSON.stringify([626, 659]));
}}
}
let longestSubstringLength = 0;
fl_set.add(JSON.stringify([667, 698]));
let longestSubstringColumn = 0;
fl_set.add(JSON.stringify([701, 732]));
let longestSubstringRow = 0;
fl_set.add(JSON.stringify([735, 763]));
for (let rowIndex = 1; rowIndex <= s2.length; rowIndex += 1) {
fl_set.add(JSON.stringify([767, 1390]));
{
    {
fl_set.add(JSON.stringify([828, 1390]));
for (let columnIndex = 1; columnIndex <= s1.length; columnIndex += 1) {
fl_set.add(JSON.stringify([834, 1386]));
{
      {
fl_set.add(JSON.stringify([904, 1386]));
if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
fl_set.add(JSON.stringify([912, 1135]));
{
        {
fl_set.add(JSON.stringify([958, 1068]));
substringMatrix[rowIndex][columnIndex] = substringMatrix[rowIndex - 1][columnIndex - 1] + 1;
fl_set.add(JSON.stringify([968, 1060]));
}}
} else {
fl_set.add(JSON.stringify([1074, 1135]));
{
        {
fl_set.add(JSON.stringify([1074, 1135]));
substringMatrix[rowIndex][columnIndex] = 0;
fl_set.add(JSON.stringify([1084, 1127]));
}}
}if (substringMatrix[rowIndex][columnIndex] > longestSubstringLength) {
fl_set.add(JSON.stringify([1143, 1380]));
{
        {
fl_set.add(JSON.stringify([1212, 1380]));
longestSubstringLength = substringMatrix[rowIndex][columnIndex];
fl_set.add(JSON.stringify([1222, 1286]));
longestSubstringColumn = columnIndex;
fl_set.add(JSON.stringify([1295, 1332]));
longestSubstringRow = rowIndex;
fl_set.add(JSON.stringify([1341, 1372]));
}}
}
}}
}
}}
}
if (longestSubstringLength === 0) {
fl_set.add(JSON.stringify([1394, 1448]));
{
    {
fl_set.add(JSON.stringify([1428, 1448]));
fl_set.add(JSON.stringify([1434, 1444]));
return '';;
}}
}
let longestSubstring = '';
fl_set.add(JSON.stringify([1452, 1478]));
while (substringMatrix[longestSubstringRow][longestSubstringColumn] > 0) {
fl_set.add(JSON.stringify([1482, 1697]));
{
    {
fl_set.add(JSON.stringify([1555, 1697]));
longestSubstring = s1[longestSubstringColumn - 1] + longestSubstring;
fl_set.add(JSON.stringify([1561, 1630]));
longestSubstringRow -= 1;
fl_set.add(JSON.stringify([1635, 1660]));
longestSubstringColumn -= 1;
fl_set.add(JSON.stringify([1665, 1693]));
}}
}
fl_set.add(JSON.stringify([1701, 1725]));
return longestSubstring;;
}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

