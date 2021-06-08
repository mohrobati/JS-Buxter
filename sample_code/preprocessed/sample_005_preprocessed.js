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
Array(Number(x)).fill(1).map((t, i) => {
fl_set.add(JSON.stringify([38, 951]));
{
    var [n, m] = readline().split(' ').map(x => {
        return Number(x)
    });
    var xy = []
    var x, y
    var x1, y2
    var index
    {
fl_set.add(JSON.stringify([77, 950]));
for (var i = 0; i < 2 * n; i++) {
fl_set.add(JSON.stringify([224, 502]));
{
        index = Math.floor(i / 2)
        {
fl_set.add(JSON.stringify([256, 502]));
if (!xy[index]) {
fl_set.add(JSON.stringify([300, 354]));
{
            {
fl_set.add(JSON.stringify([316, 354]));
{
fl_set.add(JSON.stringify([330, 344]));
{
fl_set.add(JSON.stringify([266, 291]));
{
fl_set.add(JSON.stringify([229, 238]));
{
fl_set.add(JSON.stringify([210, 219]));
{
fl_set.add(JSON.stringify([195, 205]));
{
fl_set.add(JSON.stringify([182, 190]));
{
fl_set.add(JSON.stringify([166, 177]));
var [n, m] = readline().split(' ').map(x => {
fl_set.add(JSON.stringify([83, 161]));
{
        {
fl_set.add(JSON.stringify([127, 159]));
fl_set.add(JSON.stringify([137, 153]));
return Number(x);
}}
}
)
fl_set.add(JSON.stringify([83, 161]));
}

fl_set.add(JSON.stringify([166, 177]));
}

fl_set.add(JSON.stringify([182, 190]));
}

fl_set.add(JSON.stringify([195, 205]));
}

fl_set.add(JSON.stringify([210, 219]));
}

fl_set.add(JSON.stringify([229, 238]));
}

fl_set.add(JSON.stringify([266, 291]));
}

fl_set.add(JSON.stringify([330, 344]));
}}
}
{
fl_set.add(JSON.stringify([479, 496]));
{
fl_set.add(JSON.stringify([453, 470]));
[x, y] = readline().split(' ').map(x => {
fl_set.add(JSON.stringify([363, 444]));
{
            {
fl_set.add(JSON.stringify([403, 443]));
fl_set.add(JSON.stringify([417, 433]));
return Number(x);
}}
}
)
fl_set.add(JSON.stringify([363, 444]));
}

fl_set.add(JSON.stringify([453, 470]));
}

fl_set.add(JSON.stringify([479, 496]));
}
}
if (m % 2 !== 0) {
fl_set.add(JSON.stringify([507, 548]));
fl_set.add(JSON.stringify([524, 548]));
return console.log('NO');
}
var simm = false
fl_set.add(JSON.stringify([553, 569]));
var simmDiag = false
fl_set.add(JSON.stringify([574, 594]));
for (var i = 0; i < n; i++) {
fl_set.add(JSON.stringify([599, 681]));
{
        {
fl_set.add(JSON.stringify([627, 681]));
if (xy[i][1] === xy[i][2]) {
fl_set.add(JSON.stringify([637, 675]));
simm = true
fl_set.add(JSON.stringify([664, 675]));
}
}}
}
for (var i = 0; i < n; i++) {
fl_set.add(JSON.stringify([686, 899]));
{
        {
fl_set.add(JSON.stringify([714, 899]));
for (var j = 0; j < n; j++) {
fl_set.add(JSON.stringify([724, 893]));
{
            {
fl_set.add(JSON.stringify([752, 893]));
if (xy[i][0] === xy[j][0] && xy[i][1] === xy[j][2] && xy[i][2] === xy[j][1] && xy[i][3] === xy[j][3]) {
fl_set.add(JSON.stringify([766, 883]));
simmDiag = true
fl_set.add(JSON.stringify([868, 883]));
}
}}
}
}}
}
console.log(simmDiag && simm ? 'YES' : "NO")
fl_set.add(JSON.stringify([904, 948]));
}
}
)
fl_set.add(JSON.stringify([38, 951]));
function gcd(a, b) {
fl_set.add(JSON.stringify([953, 1040]));
{
    {
fl_set.add(JSON.stringify([972, 1040]));
if (!b) {
fl_set.add(JSON.stringify([978, 1011]));
{
        {
fl_set.add(JSON.stringify([986, 1011]));
fl_set.add(JSON.stringify([996, 1005]));
return a;;
}}
}
fl_set.add(JSON.stringify([1017, 1038]));
return gcd(b, a % b);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

