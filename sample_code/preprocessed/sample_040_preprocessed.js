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
var mod = BigInt(1000000000) + BigInt(7)
fl_set.add(JSON.stringify([1, 41]));
var maxN = 1002
fl_set.add(JSON.stringify([42, 57]));
func_1()
fl_set.add(JSON.stringify([59, 67]));
function func_1() {
fl_set.add(JSON.stringify([70, 1693]));
{
  {
fl_set.add(JSON.stringify([88, 1693]));
var n = parseInt(readline())
fl_set.add(JSON.stringify([92, 120]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([123, 198]));
{
    {
fl_set.add(JSON.stringify([169, 197]));
fl_set.add(JSON.stringify([175, 193]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([123, 198]));
var graph = new Array(n)
fl_set.add(JSON.stringify([203, 227]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([230, 484]));
{
    {
fl_set.add(JSON.stringify([258, 484]));
if (i - a[i] >= 0) {
fl_set.add(JSON.stringify([264, 369]));
{
      {
fl_set.add(JSON.stringify([283, 369]));
if (!graph[i - a[i]]) {
fl_set.add(JSON.stringify([291, 333]));
graph[i - a[i]] = []
fl_set.add(JSON.stringify([313, 333]));
}
graph[i - a[i]].push(i)
fl_set.add(JSON.stringify([340, 363]));
}}
}
if (i + a[i] < n) {
fl_set.add(JSON.stringify([376, 480]));
{
      {
fl_set.add(JSON.stringify([394, 480]));
if (!graph[i + a[i]]) {
fl_set.add(JSON.stringify([402, 444]));
graph[i + a[i]] = []
fl_set.add(JSON.stringify([424, 444]));
}
graph[i + a[i]].push(i)
fl_set.add(JSON.stringify([451, 474]));
}}
}
}}
}
var dp = new Array(n)
fl_set.add(JSON.stringify([487, 508]));
var even = []
fl_set.add(JSON.stringify([511, 524]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([527, 643]));
{
    {
fl_set.add(JSON.stringify([555, 643]));
if (a[i] % 2 === 0) {
fl_set.add(JSON.stringify([561, 639]));
{
      {
fl_set.add(JSON.stringify([581, 623]));
dp[i] = 0
fl_set.add(JSON.stringify([589, 598]));
even.push(i)
fl_set.add(JSON.stringify([605, 617]));
}}
} else {
fl_set.add(JSON.stringify([629, 639]));
dp[i] = -1
fl_set.add(JSON.stringify([629, 639]));
}}}
}
for (let i = 0; i < even.length; i++) {
fl_set.add(JSON.stringify([648, 946]));
{
    {
fl_set.add(JSON.stringify([686, 946]));
var element = even[i]
fl_set.add(JSON.stringify([692, 713]));
if (!graph[element]) {
fl_set.add(JSON.stringify([718, 747]));
fl_set.add(JSON.stringify([739, 747]));
continue;
}
for (let j = 0; j < graph[element].length; j++) {
fl_set.add(JSON.stringify([752, 942]));
{
      {
fl_set.add(JSON.stringify([800, 942]));
if (dp[graph[element][j]] === -1) {
fl_set.add(JSON.stringify([808, 936]));
{
        {
fl_set.add(JSON.stringify([842, 936]));
dp[graph[element][j]] = dp[element] + 1
fl_set.add(JSON.stringify([852, 891]));
even.push(graph[element][j])
fl_set.add(JSON.stringify([900, 928]));
}}
}
}}
}
}}
}
var ans = new Array(n)
fl_set.add(JSON.stringify([949, 971]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([974, 1060]));
{
    {
fl_set.add(JSON.stringify([1002, 1060]));
if (a[i] % 2 === 1) {
fl_set.add(JSON.stringify([1008, 1056]));
{
      {
fl_set.add(JSON.stringify([1028, 1056]));
ans[i] = dp[i]
fl_set.add(JSON.stringify([1036, 1050]));
}}
}
}}
}
dp = new Array(n)
fl_set.add(JSON.stringify([1063, 1080]));
var odd = new Array(n)
fl_set.add(JSON.stringify([1083, 1105]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([1108, 1230]));
{
    {
fl_set.add(JSON.stringify([1143, 1230]));
if (a[i] % 2 === 1) {
fl_set.add(JSON.stringify([1149, 1226]));
{
      {
fl_set.add(JSON.stringify([1169, 1210]));
dp[i] = 0
fl_set.add(JSON.stringify([1177, 1186]));
odd.push(i)
fl_set.add(JSON.stringify([1193, 1204]));
}}
} else {
fl_set.add(JSON.stringify([1216, 1226]));
dp[i] = -1
fl_set.add(JSON.stringify([1216, 1226]));
}}}
}
for (let i = 0; i < odd.length; i++) {
fl_set.add(JSON.stringify([1235, 1578]));
{
    {
fl_set.add(JSON.stringify([1272, 1578]));
var element = odd[i]
fl_set.add(JSON.stringify([1278, 1298]));
if (!graph[element]) {
fl_set.add(JSON.stringify([1303, 1332]));
fl_set.add(JSON.stringify([1324, 1332]));
continue;
}
for (let j = 0; j < graph[element].length; j++) {
fl_set.add(JSON.stringify([1337, 1574]));
{
      {
fl_set.add(JSON.stringify([1385, 1574]));
if (dp[graph[element][j]] === -1) {
fl_set.add(JSON.stringify([1393, 1568]));
{
        {
fl_set.add(JSON.stringify([1427, 1568]));
dp[graph[element][j]] = dp[element] + 1
fl_set.add(JSON.stringify([1437, 1476]));
dp[graph[element][j]] = dp[element] + 1
fl_set.add(JSON.stringify([1485, 1524]));
odd.push(graph[element][j])
fl_set.add(JSON.stringify([1533, 1560]));
}}
}
}}
}
}}
}
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([1583, 1659]));
{
    {
fl_set.add(JSON.stringify([1618, 1659]));
if(a[i] % 2===0) {
fl_set.add(JSON.stringify([1624, 1655]));
ans[i] = dp[i]
fl_set.add(JSON.stringify([1641, 1655]));
}
}}
}
console.log(ans.join(' '))
fl_set.add(JSON.stringify([1664, 1690]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

