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
fl_set.add(JSON.stringify([29, 99]));
var a = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([29, 99]));
fl_set.add(JSON.stringify([75, 97]));
{
{
fl_set.add(JSON.stringify([75, 97]));
fl_set.add(JSON.stringify([77, 95]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([29, 99]));
var array = {
4: 0,
8: 1, 15: 2, 16: 3, 23: 4, 42: 5
}
fl_set.add(JSON.stringify([100, 154]));
fl_set.add(JSON.stringify([155, 205]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([155, 205]));
fl_set.add(JSON.stringify([183, 205]));
{
{
fl_set.add(JSON.stringify([183, 205]));
a[i] = array[a[i]]
fl_set.add(JSON.stringify([185, 203]));
}}
}
array = {}
fl_set.add(JSON.stringify([206, 216]));
var count = new Array(6).fill(0)
fl_set.add(JSON.stringify([217, 249]));
fl_set.add(JSON.stringify([250, 393]));
for (let i = 0; i < n; i++) {
fl_set.add(JSON.stringify([250, 393]));
fl_set.add(JSON.stringify([278, 393]));
{
{
fl_set.add(JSON.stringify([278, 393]));
fl_set.add(JSON.stringify([280, 323]));
if (a[i] === 0) {
fl_set.add(JSON.stringify([280, 323]));
fl_set.add(JSON.stringify([296, 323]));
{
  {
fl_set.add(JSON.stringify([296, 323]));
count[0]++
fl_set.add(JSON.stringify([300, 310]));
fl_set.add(JSON.stringify([313, 321]));
continue;
}}
}
fl_set.add(JSON.stringify([324, 389]));
if (count[a[i] - 1] >= 1) {
fl_set.add(JSON.stringify([324, 389]));
fl_set.add(JSON.stringify([350, 389]));
{
  {
fl_set.add(JSON.stringify([350, 389]));
count[a[i]]++
fl_set.add(JSON.stringify([354, 367]));
count[a[i] - 1]--
fl_set.add(JSON.stringify([370, 387]));
}}
}
}}
}
console.log(a.length - count[5] * 6)
fl_set.add(JSON.stringify([396, 432]));
fl_set.add(JSON.stringify([437, 515]));
function gcd(a, b) {
fl_set.add(JSON.stringify([437, 515]));
fl_set.add(JSON.stringify([456, 515]));
{
  {
fl_set.add(JSON.stringify([456, 515]));
fl_set.add(JSON.stringify([460, 487]));
if (!b) {
fl_set.add(JSON.stringify([460, 487]));
fl_set.add(JSON.stringify([468, 487]));
{
    {
fl_set.add(JSON.stringify([468, 487]));
fl_set.add(JSON.stringify([474, 483]));
return a;;
}}
}
fl_set.add(JSON.stringify([492, 513]));
return gcd(b, a % b);;
}}
}
fl_set.add(JSON.stringify([518, 541]));
function TreeBase() {
fl_set.add(JSON.stringify([518, 541]));
{
}
}
fl_set.add(JSON.stringify([544, 625]));
TreeBase.prototype.clear = function () {
fl_set.add(JSON.stringify([544, 625]));
fl_set.add(JSON.stringify([583, 624]));
{
  {
fl_set.add(JSON.stringify([583, 624]));
this._root = null;
fl_set.add(JSON.stringify([587, 605]));
this.size = 0;
fl_set.add(JSON.stringify([608, 622]));
}}
}

fl_set.add(JSON.stringify([544, 625]));
fl_set.add(JSON.stringify([628, 887]));
TreeBase.prototype.find = function (data) {
fl_set.add(JSON.stringify([628, 887]));
fl_set.add(JSON.stringify([670, 886]));
{
  {
fl_set.add(JSON.stringify([670, 886]));
var res = this._root;
fl_set.add(JSON.stringify([674, 695]));
fl_set.add(JSON.stringify([700, 867]));
while (res !== null) {
fl_set.add(JSON.stringify([700, 867]));
fl_set.add(JSON.stringify([721, 867]));
{
    {
fl_set.add(JSON.stringify([721, 867]));
var c = this._comparator(data, res.data);
fl_set.add(JSON.stringify([727, 768]));
fl_set.add(JSON.stringify([773, 863]));
if (c === 0) {
fl_set.add(JSON.stringify([773, 863]));
fl_set.add(JSON.stringify([786, 816]));
{
      {
fl_set.add(JSON.stringify([786, 816]));
fl_set.add(JSON.stringify([794, 810]));
return res.data;;
}}
} else {
fl_set.add(JSON.stringify([822, 863]));
fl_set.add(JSON.stringify([822, 863]));
{
      {
fl_set.add(JSON.stringify([822, 863]));
res = res.get_child(c > 0);
fl_set.add(JSON.stringify([830, 857]));
}}
}}}
}
fl_set.add(JSON.stringify([872, 884]));
return null;;
}}
}

fl_set.add(JSON.stringify([628, 887]));
fl_set.add(JSON.stringify([890, 1238]));
TreeBase.prototype.findIter = function (data) {
fl_set.add(JSON.stringify([890, 1238]));
fl_set.add(JSON.stringify([936, 1237]));
{
  {
fl_set.add(JSON.stringify([936, 1237]));
var res = this._root;
fl_set.add(JSON.stringify([940, 961]));
var iter = this.iterator();
fl_set.add(JSON.stringify([964, 991]));
fl_set.add(JSON.stringify([996, 1218]));
while (res !== null) {
fl_set.add(JSON.stringify([996, 1218]));
fl_set.add(JSON.stringify([1017, 1218]));
{
    {
fl_set.add(JSON.stringify([1017, 1218]));
var c = this._comparator(data, res.data);
fl_set.add(JSON.stringify([1023, 1064]));
fl_set.add(JSON.stringify([1069, 1214]));
if (c === 0) {
fl_set.add(JSON.stringify([1069, 1214]));
fl_set.add(JSON.stringify([1082, 1134]));
{
      {
fl_set.add(JSON.stringify([1082, 1134]));
iter._cursor = res;
fl_set.add(JSON.stringify([1090, 1109]));
fl_set.add(JSON.stringify([1116, 1128]));
return iter;;
}}
} else {
fl_set.add(JSON.stringify([1140, 1214]));
fl_set.add(JSON.stringify([1140, 1214]));
{
      {
fl_set.add(JSON.stringify([1140, 1214]));
iter._ancestors.push(res);
fl_set.add(JSON.stringify([1148, 1174]));
res = res.get_child(c > 0);
fl_set.add(JSON.stringify([1181, 1208]));
}}
}}}
}
fl_set.add(JSON.stringify([1223, 1235]));
return null;;
}}
}

fl_set.add(JSON.stringify([890, 1238]));
fl_set.add(JSON.stringify([1241, 1835]));
TreeBase.prototype.lowerBound = function (item) {
fl_set.add(JSON.stringify([1241, 1835]));
fl_set.add(JSON.stringify([1289, 1834]));
{
  {
fl_set.add(JSON.stringify([1289, 1834]));
var cur = this._root;
fl_set.add(JSON.stringify([1293, 1314]));
var iter = this.iterator();
fl_set.add(JSON.stringify([1317, 1344]));
var cmp = this._comparator;
fl_set.add(JSON.stringify([1347, 1374]));
fl_set.add(JSON.stringify([1379, 1571]));
while (cur !== null) {
fl_set.add(JSON.stringify([1379, 1571]));
fl_set.add(JSON.stringify([1400, 1571]));
{
    {
fl_set.add(JSON.stringify([1400, 1571]));
var c = cmp(item, cur.data);
fl_set.add(JSON.stringify([1406, 1434]));
fl_set.add(JSON.stringify([1439, 1504]));
if (c === 0) {
fl_set.add(JSON.stringify([1439, 1504]));
fl_set.add(JSON.stringify([1452, 1504]));
{
      {
fl_set.add(JSON.stringify([1452, 1504]));
iter._cursor = cur;
fl_set.add(JSON.stringify([1460, 1479]));
fl_set.add(JSON.stringify([1486, 1498]));
return iter;;
}}
}
iter._ancestors.push(cur);
fl_set.add(JSON.stringify([1509, 1535]));
cur = cur.get_child(c > 0);
fl_set.add(JSON.stringify([1540, 1567]));
}}
}
fl_set.add(JSON.stringify([1576, 1785]));
for (var i = iter._ancestors.length - 1; i >= 0; --i) {
fl_set.add(JSON.stringify([1576, 1785]));
fl_set.add(JSON.stringify([1630, 1785]));
{
    {
fl_set.add(JSON.stringify([1630, 1785]));
cur = iter._ancestors[i];
fl_set.add(JSON.stringify([1636, 1661]));
fl_set.add(JSON.stringify([1666, 1781]));
if (cmp(item, cur.data) < 0) {
fl_set.add(JSON.stringify([1666, 1781]));
fl_set.add(JSON.stringify([1695, 1781]));
{
      {
fl_set.add(JSON.stringify([1695, 1781]));
iter._cursor = cur;
fl_set.add(JSON.stringify([1703, 1722]));
iter._ancestors.length = i;
fl_set.add(JSON.stringify([1729, 1756]));
fl_set.add(JSON.stringify([1763, 1775]));
return iter;;
}}
}
}}
}
iter._ancestors.length = 0;
fl_set.add(JSON.stringify([1790, 1817]));
fl_set.add(JSON.stringify([1820, 1832]));
return iter;;
}}
}

fl_set.add(JSON.stringify([1241, 1835]));
fl_set.add(JSON.stringify([1838, 2061]));
TreeBase.prototype.upperBound = function (item) {
fl_set.add(JSON.stringify([1838, 2061]));
fl_set.add(JSON.stringify([1886, 2060]));
{
  {
fl_set.add(JSON.stringify([1886, 2060]));
var iter = this.lowerBound(item);
fl_set.add(JSON.stringify([1890, 1923]));
var cmp = this._comparator;
fl_set.add(JSON.stringify([1926, 1953]));
fl_set.add(JSON.stringify([1958, 2041]));
while (iter.data() !== null && cmp(iter.data(), item) === 0) {
fl_set.add(JSON.stringify([1958, 2041]));
fl_set.add(JSON.stringify([2019, 2041]));
{
    {
fl_set.add(JSON.stringify([2019, 2041]));
iter.next();
fl_set.add(JSON.stringify([2025, 2037]));
}}
}
fl_set.add(JSON.stringify([2046, 2058]));
return iter;;
}}
}

fl_set.add(JSON.stringify([1838, 2061]));
fl_set.add(JSON.stringify([2064, 2249]));
TreeBase.prototype.min = function () {
fl_set.add(JSON.stringify([2064, 2249]));
fl_set.add(JSON.stringify([2101, 2248]));
{
  {
fl_set.add(JSON.stringify([2101, 2248]));
var res = this._root;
fl_set.add(JSON.stringify([2105, 2126]));
fl_set.add(JSON.stringify([2129, 2169]));
if (res === null) {
fl_set.add(JSON.stringify([2129, 2169]));
fl_set.add(JSON.stringify([2147, 2169]));
{
    {
fl_set.add(JSON.stringify([2147, 2169]));
fl_set.add(JSON.stringify([2153, 2165]));
return null;;
}}
}
fl_set.add(JSON.stringify([2174, 2225]));
while (res.left !== null) {
fl_set.add(JSON.stringify([2174, 2225]));
fl_set.add(JSON.stringify([2200, 2225]));
{
    {
fl_set.add(JSON.stringify([2200, 2225]));
res = res.left;
fl_set.add(JSON.stringify([2206, 2221]));
}}
}
fl_set.add(JSON.stringify([2230, 2246]));
return res.data;;
}}
}

fl_set.add(JSON.stringify([2064, 2249]));
fl_set.add(JSON.stringify([2252, 2439]));
TreeBase.prototype.max = function () {
fl_set.add(JSON.stringify([2252, 2439]));
fl_set.add(JSON.stringify([2289, 2438]));
{
  {
fl_set.add(JSON.stringify([2289, 2438]));
var res = this._root;
fl_set.add(JSON.stringify([2293, 2314]));
fl_set.add(JSON.stringify([2317, 2357]));
if (res === null) {
fl_set.add(JSON.stringify([2317, 2357]));
fl_set.add(JSON.stringify([2335, 2357]));
{
    {
fl_set.add(JSON.stringify([2335, 2357]));
fl_set.add(JSON.stringify([2341, 2353]));
return null;;
}}
}
fl_set.add(JSON.stringify([2362, 2415]));
while (res.right !== null) {
fl_set.add(JSON.stringify([2362, 2415]));
fl_set.add(JSON.stringify([2389, 2415]));
{
    {
fl_set.add(JSON.stringify([2389, 2415]));
res = res.right;
fl_set.add(JSON.stringify([2395, 2411]));
}}
}
fl_set.add(JSON.stringify([2420, 2436]));
return res.data;;
}}
}

fl_set.add(JSON.stringify([2252, 2439]));
fl_set.add(JSON.stringify([2442, 2517]));
TreeBase.prototype.iterator = function () {
fl_set.add(JSON.stringify([2442, 2517]));
fl_set.add(JSON.stringify([2484, 2516]));
{
  {
fl_set.add(JSON.stringify([2484, 2516]));
fl_set.add(JSON.stringify([2488, 2514]));
return new Iterator(this);;
}}
}

fl_set.add(JSON.stringify([2442, 2517]));
fl_set.add(JSON.stringify([2520, 2692]));
TreeBase.prototype.each = function (cb) {
fl_set.add(JSON.stringify([2520, 2692]));
fl_set.add(JSON.stringify([2560, 2691]));
{
  {
fl_set.add(JSON.stringify([2560, 2691]));
var it = this.iterator(), data;
fl_set.add(JSON.stringify([2564, 2595]));
fl_set.add(JSON.stringify([2598, 2689]));
while ((data = it.next()) !== null) {
fl_set.add(JSON.stringify([2598, 2689]));
fl_set.add(JSON.stringify([2634, 2689]));
{
    {
fl_set.add(JSON.stringify([2634, 2689]));
fl_set.add(JSON.stringify([2640, 2685]));
if (cb(data) === false) {
fl_set.add(JSON.stringify([2640, 2685]));
fl_set.add(JSON.stringify([2664, 2685]));
{
      {
fl_set.add(JSON.stringify([2664, 2685]));
fl_set.add(JSON.stringify([2672, 2679]));
return;;
}}
}
}}
}
}}
}

fl_set.add(JSON.stringify([2520, 2692]));
fl_set.add(JSON.stringify([2695, 2868]));
TreeBase.prototype.reach = function (cb) {
fl_set.add(JSON.stringify([2695, 2868]));
fl_set.add(JSON.stringify([2736, 2867]));
{
  {
fl_set.add(JSON.stringify([2736, 2867]));
var it = this.iterator(), data;
fl_set.add(JSON.stringify([2740, 2771]));
fl_set.add(JSON.stringify([2774, 2865]));
while ((data = it.prev()) !== null) {
fl_set.add(JSON.stringify([2774, 2865]));
fl_set.add(JSON.stringify([2810, 2865]));
{
    {
fl_set.add(JSON.stringify([2810, 2865]));
fl_set.add(JSON.stringify([2816, 2861]));
if (cb(data) === false) {
fl_set.add(JSON.stringify([2816, 2861]));
fl_set.add(JSON.stringify([2840, 2861]));
{
      {
fl_set.add(JSON.stringify([2840, 2861]));
fl_set.add(JSON.stringify([2848, 2855]));
return;;
}}
}
}}
}
}}
}

fl_set.add(JSON.stringify([2695, 2868]));
fl_set.add(JSON.stringify([2873, 2968]));
function Iterator(tree) {
fl_set.add(JSON.stringify([2873, 2968]));
fl_set.add(JSON.stringify([2897, 2968]));
{
  {
fl_set.add(JSON.stringify([2897, 2968]));
this._tree = tree;
fl_set.add(JSON.stringify([2901, 2919]));
this._ancestors = [];
fl_set.add(JSON.stringify([2922, 2943]));
this._cursor = null;
fl_set.add(JSON.stringify([2946, 2966]));
}}
}
fl_set.add(JSON.stringify([2971, 3072]));
Iterator.prototype.data = function () {
fl_set.add(JSON.stringify([2971, 3072]));
fl_set.add(JSON.stringify([3009, 3071]));
{
  {
fl_set.add(JSON.stringify([3009, 3071]));
fl_set.add(JSON.stringify([3013, 3069]));
return this._cursor !== null ? this._cursor.data : null;;
}}
}

fl_set.add(JSON.stringify([2971, 3072]));
fl_set.add(JSON.stringify([3075, 3716]));
Iterator.prototype.next = function () {
fl_set.add(JSON.stringify([3075, 3716]));
fl_set.add(JSON.stringify([3113, 3715]));
{
  {
fl_set.add(JSON.stringify([3113, 3715]));
fl_set.add(JSON.stringify([3117, 3654]));
if (this._cursor === null) {
fl_set.add(JSON.stringify([3117, 3654]));
fl_set.add(JSON.stringify([3144, 3240]));
{
    {
fl_set.add(JSON.stringify([3144, 3240]));
var root = this._tree._root;
fl_set.add(JSON.stringify([3150, 3178]));
fl_set.add(JSON.stringify([3183, 3236]));
if (root !== null) {
fl_set.add(JSON.stringify([3183, 3236]));
fl_set.add(JSON.stringify([3202, 3236]));
{
      {
fl_set.add(JSON.stringify([3202, 3236]));
this._minNode(root);
fl_set.add(JSON.stringify([3210, 3230]));
}}
}
}}
} else {
fl_set.add(JSON.stringify([3246, 3654]));
fl_set.add(JSON.stringify([3246, 3654]));
{
    {
fl_set.add(JSON.stringify([3246, 3654]));
fl_set.add(JSON.stringify([3252, 3650]));
if (this._cursor.right === null) {
fl_set.add(JSON.stringify([3252, 3650]));
fl_set.add(JSON.stringify([3285, 3554]));
{
      {
fl_set.add(JSON.stringify([3285, 3554]));
var save;
fl_set.add(JSON.stringify([3293, 3302]));
fl_set.add(JSON.stringify([3312, 3511]));
{
        {
fl_set.add(JSON.stringify([3312, 3511]));
save = this._cursor;
fl_set.add(JSON.stringify([3322, 3342]));
fl_set.add(JSON.stringify([3351, 3503]));
if (this._ancestors.length) {
fl_set.add(JSON.stringify([3351, 3503]));
fl_set.add(JSON.stringify([3379, 3438]));
{
          {
fl_set.add(JSON.stringify([3379, 3438]));
this._cursor = this._ancestors.pop();
fl_set.add(JSON.stringify([3391, 3428]));
}}
} else {
fl_set.add(JSON.stringify([3444, 3503]));
fl_set.add(JSON.stringify([3444, 3503]));
{
          {
fl_set.add(JSON.stringify([3444, 3503]));
this._cursor = null;
fl_set.add(JSON.stringify([3456, 3476]));
fl_set.add(JSON.stringify([3487, 3493]));
break;;
}}
}}}
}}
} else {
fl_set.add(JSON.stringify([3560, 3650]));
fl_set.add(JSON.stringify([3560, 3650]));
{
      {
fl_set.add(JSON.stringify([3560, 3650]));
this._ancestors.push(this._cursor);
fl_set.add(JSON.stringify([3568, 3603]));
this._minNode(this._cursor.right);
fl_set.add(JSON.stringify([3610, 3644]));
}}
}}}
}fl_set.add(JSON.stringify([3657, 3713]));
return this._cursor !== null ? this._cursor.data : null;;
}}
}

fl_set.add(JSON.stringify([3075, 3716]));
fl_set.add(JSON.stringify([3719, 4357]));
Iterator.prototype.prev = function () {
fl_set.add(JSON.stringify([3719, 4357]));
fl_set.add(JSON.stringify([3757, 4356]));
{
  {
fl_set.add(JSON.stringify([3757, 4356]));
fl_set.add(JSON.stringify([3761, 4295]));
if (this._cursor === null) {
fl_set.add(JSON.stringify([3761, 4295]));
fl_set.add(JSON.stringify([3788, 3884]));
{
    {
fl_set.add(JSON.stringify([3788, 3884]));
var root = this._tree._root;
fl_set.add(JSON.stringify([3794, 3822]));
fl_set.add(JSON.stringify([3827, 3880]));
if (root !== null) {
fl_set.add(JSON.stringify([3827, 3880]));
fl_set.add(JSON.stringify([3846, 3880]));
{
      {
fl_set.add(JSON.stringify([3846, 3880]));
this._maxNode(root);
fl_set.add(JSON.stringify([3854, 3874]));
}}
}
}}
} else {
fl_set.add(JSON.stringify([3890, 4295]));
fl_set.add(JSON.stringify([3890, 4295]));
{
    {
fl_set.add(JSON.stringify([3890, 4295]));
fl_set.add(JSON.stringify([3896, 4291]));
if (this._cursor.left === null) {
fl_set.add(JSON.stringify([3896, 4291]));
fl_set.add(JSON.stringify([3928, 4196]));
{
      {
fl_set.add(JSON.stringify([3928, 4196]));
var save;
fl_set.add(JSON.stringify([3936, 3945]));
fl_set.add(JSON.stringify([3955, 4154]));
{
        {
fl_set.add(JSON.stringify([3955, 4154]));
save = this._cursor;
fl_set.add(JSON.stringify([3965, 3985]));
fl_set.add(JSON.stringify([3994, 4146]));
if (this._ancestors.length) {
fl_set.add(JSON.stringify([3994, 4146]));
fl_set.add(JSON.stringify([4022, 4081]));
{
          {
fl_set.add(JSON.stringify([4022, 4081]));
this._cursor = this._ancestors.pop();
fl_set.add(JSON.stringify([4034, 4071]));
}}
} else {
fl_set.add(JSON.stringify([4087, 4146]));
fl_set.add(JSON.stringify([4087, 4146]));
{
          {
fl_set.add(JSON.stringify([4087, 4146]));
this._cursor = null;
fl_set.add(JSON.stringify([4099, 4119]));
fl_set.add(JSON.stringify([4130, 4136]));
break;;
}}
}}}
}}
} else {
fl_set.add(JSON.stringify([4202, 4291]));
fl_set.add(JSON.stringify([4202, 4291]));
{
      {
fl_set.add(JSON.stringify([4202, 4291]));
this._ancestors.push(this._cursor);
fl_set.add(JSON.stringify([4210, 4245]));
this._maxNode(this._cursor.left);
fl_set.add(JSON.stringify([4252, 4285]));
}}
}}}
}fl_set.add(JSON.stringify([4298, 4354]));
return this._cursor !== null ? this._cursor.data : null;;
}}
}

fl_set.add(JSON.stringify([3719, 4357]));
fl_set.add(JSON.stringify([4360, 4528]));
Iterator.prototype._minNode = function (start) {
fl_set.add(JSON.stringify([4360, 4528]));
fl_set.add(JSON.stringify([4407, 4527]));
{
  {
fl_set.add(JSON.stringify([4407, 4527]));
fl_set.add(JSON.stringify([4411, 4501]));
while (start.left !== null) {
fl_set.add(JSON.stringify([4411, 4501]));
fl_set.add(JSON.stringify([4439, 4501]));
{
    {
fl_set.add(JSON.stringify([4439, 4501]));
this._ancestors.push(start);
fl_set.add(JSON.stringify([4445, 4473]));
start = start.left;
fl_set.add(JSON.stringify([4478, 4497]));
}}
}
this._cursor = start;
fl_set.add(JSON.stringify([4504, 4525]));
}}
}

fl_set.add(JSON.stringify([4360, 4528]));
fl_set.add(JSON.stringify([4531, 4701]));
Iterator.prototype._maxNode = function (start) {
fl_set.add(JSON.stringify([4531, 4701]));
fl_set.add(JSON.stringify([4578, 4700]));
{
  {
fl_set.add(JSON.stringify([4578, 4700]));
fl_set.add(JSON.stringify([4582, 4674]));
while (start.right !== null) {
fl_set.add(JSON.stringify([4582, 4674]));
fl_set.add(JSON.stringify([4611, 4674]));
{
    {
fl_set.add(JSON.stringify([4611, 4674]));
this._ancestors.push(start);
fl_set.add(JSON.stringify([4617, 4645]));
start = start.right;
fl_set.add(JSON.stringify([4650, 4670]));
}}
}
this._cursor = start;
fl_set.add(JSON.stringify([4677, 4698]));
}}
}

fl_set.add(JSON.stringify([4531, 4701]));
fl_set.add(JSON.stringify([4704, 4807]));
function Node(data) {
fl_set.add(JSON.stringify([4704, 4807]));
fl_set.add(JSON.stringify([4724, 4807]));
{
  {
fl_set.add(JSON.stringify([4724, 4807]));
this.data = data;
fl_set.add(JSON.stringify([4728, 4745]));
this.left = null;
fl_set.add(JSON.stringify([4748, 4765]));
this.right = null;
fl_set.add(JSON.stringify([4768, 4786]));
this.red = true;
fl_set.add(JSON.stringify([4789, 4805]));
}}
}
fl_set.add(JSON.stringify([4810, 4895]));
Node.prototype.get_child = function (dir) {
fl_set.add(JSON.stringify([4810, 4895]));
fl_set.add(JSON.stringify([4852, 4894]));
{
  {
fl_set.add(JSON.stringify([4852, 4894]));
fl_set.add(JSON.stringify([4856, 4892]));
return dir ? this.right : this.left;;
}}
}

fl_set.add(JSON.stringify([4810, 4895]));
fl_set.add(JSON.stringify([4898, 5020]));
Node.prototype.set_child = function (dir, val) {
fl_set.add(JSON.stringify([4898, 5020]));
fl_set.add(JSON.stringify([4945, 5019]));
{
  {
fl_set.add(JSON.stringify([4945, 5019]));
fl_set.add(JSON.stringify([4949, 5017]));
if (dir) {
fl_set.add(JSON.stringify([4949, 5017]));
fl_set.add(JSON.stringify([4958, 4985]));
{
    {
fl_set.add(JSON.stringify([4958, 4985]));
this.right = val;
fl_set.add(JSON.stringify([4964, 4981]));
}}
} else {
fl_set.add(JSON.stringify([4991, 5017]));
fl_set.add(JSON.stringify([4991, 5017]));
{
    {
fl_set.add(JSON.stringify([4991, 5017]));
this.left = val;
fl_set.add(JSON.stringify([4997, 5013]));
}}
}}}
}

fl_set.add(JSON.stringify([4898, 5020]));
fl_set.add(JSON.stringify([5023, 5125]));
function RBTree(comparator) {
fl_set.add(JSON.stringify([5023, 5125]));
fl_set.add(JSON.stringify([5051, 5125]));
{
  {
fl_set.add(JSON.stringify([5051, 5125]));
this._root = null;
fl_set.add(JSON.stringify([5055, 5073]));
this._comparator = comparator;
fl_set.add(JSON.stringify([5076, 5106]));
this.size = 0;
fl_set.add(JSON.stringify([5109, 5123]));
}}
}
RBTree.prototype = new TreeBase();
fl_set.add(JSON.stringify([5128, 5162]));
fl_set.add(JSON.stringify([5165, 6448]));
RBTree.prototype.insert = function (data) {
fl_set.add(JSON.stringify([5165, 6448]));
fl_set.add(JSON.stringify([5207, 6447]));
{
  {
fl_set.add(JSON.stringify([5207, 6447]));
var ret = false;
fl_set.add(JSON.stringify([5211, 5227]));
fl_set.add(JSON.stringify([5232, 6401]));
if (this._root === null) {
fl_set.add(JSON.stringify([5232, 6401]));
fl_set.add(JSON.stringify([5257, 5328]));
{
    {
fl_set.add(JSON.stringify([5257, 5328]));
this._root = new Node(data);
fl_set.add(JSON.stringify([5263, 5291]));
ret = true;
fl_set.add(JSON.stringify([5296, 5307]));
this.size++;
fl_set.add(JSON.stringify([5312, 5324]));
}}
} else {
fl_set.add(JSON.stringify([5334, 6401]));
fl_set.add(JSON.stringify([5334, 6401]));
{
    {
fl_set.add(JSON.stringify([5334, 6401]));
var head = new Node(undefined);
fl_set.add(JSON.stringify([5340, 5371]));
var dir = 0;
fl_set.add(JSON.stringify([5378, 5390]));
var last = 0;
fl_set.add(JSON.stringify([5395, 5408]));
var gp = null;
fl_set.add(JSON.stringify([5415, 5429]));
var ggp = head;
fl_set.add(JSON.stringify([5434, 5449]));
var p = null;
fl_set.add(JSON.stringify([5454, 5467]));
var node = this._root;
fl_set.add(JSON.stringify([5472, 5494]));
ggp.right = this._root;
fl_set.add(JSON.stringify([5499, 5522]));
fl_set.add(JSON.stringify([5529, 6366]));
while (true) {
fl_set.add(JSON.stringify([5529, 6366]));
fl_set.add(JSON.stringify([5542, 6366]));
{
      {
fl_set.add(JSON.stringify([5542, 6366]));
if (node === null) {
fl_set.add(JSON.stringify([5550, 5830]));
fl_set.add(JSON.stringify([5569, 5682]));
{
        {
fl_set.add(JSON.stringify([5569, 5682]));
node = new Node(data);
fl_set.add(JSON.stringify([5579, 5601]));
p.set_child(dir, node);
fl_set.add(JSON.stringify([5610, 5633]));
ret = true;
fl_set.add(JSON.stringify([5642, 5653]));
this.size++;
fl_set.add(JSON.stringify([5662, 5674]));
}}
} else fl_set.add(JSON.stringify([5688, 5830]));
if (is_red(node.left) && is_red(node.right)) {
fl_set.add(JSON.stringify([5688, 5830]));
fl_set.add(JSON.stringify([5733, 5830]));
{
        {
fl_set.add(JSON.stringify([5733, 5830]));
node.red = true;
fl_set.add(JSON.stringify([5743, 5759]));
node.left.red = false;
fl_set.add(JSON.stringify([5768, 5790]));
node.right.red = false;
fl_set.add(JSON.stringify([5799, 5822]));
}}
}
fl_set.add(JSON.stringify([5839, 6101]));
if (is_red(node) && is_red(p)) {
fl_set.add(JSON.stringify([5839, 6101]));
fl_set.add(JSON.stringify([5870, 6101]));
{
        {
fl_set.add(JSON.stringify([5870, 6101]));
var dir2 = ggp.right === gp;
fl_set.add(JSON.stringify([5880, 5908]));
fl_set.add(JSON.stringify([5919, 6093]));
if (node === p.get_child(last)) {
fl_set.add(JSON.stringify([5919, 6093]));
fl_set.add(JSON.stringify([5951, 6019]));
{
          {
fl_set.add(JSON.stringify([5951, 6019]));
ggp.set_child(dir2, single_rotate(gp, !last));
fl_set.add(JSON.stringify([5963, 6009]));
}}
} else {
fl_set.add(JSON.stringify([6025, 6093]));
fl_set.add(JSON.stringify([6025, 6093]));
{
          {
fl_set.add(JSON.stringify([6025, 6093]));
ggp.set_child(dir2, double_rotate(gp, !last));
fl_set.add(JSON.stringify([6037, 6083]));
}}
}}}
}
var cmp = this._comparator(node.data, data);
fl_set.add(JSON.stringify([6110, 6154]));
fl_set.add(JSON.stringify([6163, 6202]));
if (cmp === 0) {
fl_set.add(JSON.stringify([6163, 6202]));
fl_set.add(JSON.stringify([6178, 6202]));
{
        {
fl_set.add(JSON.stringify([6178, 6202]));
fl_set.add(JSON.stringify([6188, 6194]));
break;;
}}
}
last = dir;
fl_set.add(JSON.stringify([6211, 6222]));
dir = cmp < 0;
fl_set.add(JSON.stringify([6229, 6243]));
fl_set.add(JSON.stringify([6252, 6296]));
if (gp !== null) {
fl_set.add(JSON.stringify([6252, 6296]));
fl_set.add(JSON.stringify([6269, 6296]));
{
        {
fl_set.add(JSON.stringify([6269, 6296]));
ggp = gp;
fl_set.add(JSON.stringify([6279, 6288]));
}}
}
gp = p;
fl_set.add(JSON.stringify([6303, 6310]));
p = node;
fl_set.add(JSON.stringify([6317, 6326]));
node = node.get_child(dir);
fl_set.add(JSON.stringify([6333, 6360]));
}}
}
this._root = head.right;
fl_set.add(JSON.stringify([6373, 6397]));
}}
}this._root.red = false;
fl_set.add(JSON.stringify([6406, 6429]));
fl_set.add(JSON.stringify([6434, 6445]));
return ret;;
}}
}

fl_set.add(JSON.stringify([5165, 6448]));
fl_set.add(JSON.stringify([6451, 8205]));
RBTree.prototype.remove = function (data) {
fl_set.add(JSON.stringify([6451, 8205]));
fl_set.add(JSON.stringify([6493, 8204]));
{
  {
fl_set.add(JSON.stringify([6493, 8204]));
fl_set.add(JSON.stringify([6497, 6545]));
if (this._root === null) {
fl_set.add(JSON.stringify([6497, 6545]));
fl_set.add(JSON.stringify([6522, 6545]));
{
    {
fl_set.add(JSON.stringify([6522, 6545]));
fl_set.add(JSON.stringify([6528, 6541]));
return false;;
}}
}
var head = new Node(undefined);
fl_set.add(JSON.stringify([6550, 6581]));
var node = head;
fl_set.add(JSON.stringify([6584, 6600]));
node.right = this._root;
fl_set.add(JSON.stringify([6603, 6627]));
var p = null;
fl_set.add(JSON.stringify([6630, 6643]));
var gp = null;
fl_set.add(JSON.stringify([6646, 6660]));
var found = null;
fl_set.add(JSON.stringify([6663, 6680]));
var dir = 1;
fl_set.add(JSON.stringify([6683, 6695]));
fl_set.add(JSON.stringify([6700, 7939]));
while (node.get_child(dir) !== null) {
fl_set.add(JSON.stringify([6700, 7939]));
fl_set.add(JSON.stringify([6737, 7939]));
{
    {
fl_set.add(JSON.stringify([6737, 7939]));
var last = dir;
fl_set.add(JSON.stringify([6743, 6758]));
gp = p;
fl_set.add(JSON.stringify([6765, 6772]));
p = node;
fl_set.add(JSON.stringify([6777, 6786]));
node = node.get_child(dir);
fl_set.add(JSON.stringify([6791, 6818]));
var cmp = this._comparator(data, node.data);
fl_set.add(JSON.stringify([6825, 6869]));
dir = cmp > 0;
fl_set.add(JSON.stringify([6876, 6890]));
fl_set.add(JSON.stringify([6897, 6939]));
if (cmp === 0) {
fl_set.add(JSON.stringify([6897, 6939]));
fl_set.add(JSON.stringify([6912, 6939]));
{
      {
fl_set.add(JSON.stringify([6912, 6939]));
found = node;
fl_set.add(JSON.stringify([6920, 6933]));
}}
}
fl_set.add(JSON.stringify([6946, 7935]));
if (!is_red(node) && !is_red(node.get_child(dir))) {
fl_set.add(JSON.stringify([6946, 7935]));
fl_set.add(JSON.stringify([6997, 7935]));
{
      {
fl_set.add(JSON.stringify([6997, 7935]));
if (is_red(node.get_child(!dir))) {
fl_set.add(JSON.stringify([7005, 7929]));
fl_set.add(JSON.stringify([7039, 7138]));
{
        {
fl_set.add(JSON.stringify([7039, 7138]));
var sr = single_rotate(node, dir);
fl_set.add(JSON.stringify([7049, 7083]));
p.set_child(last, sr);
fl_set.add(JSON.stringify([7092, 7114]));
p = sr;
fl_set.add(JSON.stringify([7123, 7130]));
}}
} else fl_set.add(JSON.stringify([7144, 7929]));
if (!is_red(node.get_child(!dir))) {
fl_set.add(JSON.stringify([7144, 7929]));
fl_set.add(JSON.stringify([7179, 7929]));
{
        {
fl_set.add(JSON.stringify([7179, 7929]));
var sibling = p.get_child(!last);
fl_set.add(JSON.stringify([7189, 7222]));
fl_set.add(JSON.stringify([7231, 7921]));
if (sibling !== null) {
fl_set.add(JSON.stringify([7231, 7921]));
fl_set.add(JSON.stringify([7253, 7921]));
{
          {
fl_set.add(JSON.stringify([7253, 7921]));
fl_set.add(JSON.stringify([7265, 7911]));
if (!is_red(sibling.get_child(!last)) && !is_red(sibling.get_child(last))) {
fl_set.add(JSON.stringify([7265, 7911]));
fl_set.add(JSON.stringify([7340, 7441]));
{
            {
fl_set.add(JSON.stringify([7340, 7441]));
p.red = false;
fl_set.add(JSON.stringify([7354, 7368]));
sibling.red = true;
fl_set.add(JSON.stringify([7381, 7400]));
node.red = true;
fl_set.add(JSON.stringify([7413, 7429]));
}}
} else {
fl_set.add(JSON.stringify([7447, 7911]));
fl_set.add(JSON.stringify([7447, 7911]));
{
            {
fl_set.add(JSON.stringify([7447, 7911]));
var dir2 = gp.right === p;
fl_set.add(JSON.stringify([7461, 7487]));
if (is_red(sibling.get_child(last))) {
fl_set.add(JSON.stringify([7502, 7729]));
fl_set.add(JSON.stringify([7539, 7612]));
{
              {
fl_set.add(JSON.stringify([7539, 7612]));
gp.set_child(dir2, double_rotate(p, last));
fl_set.add(JSON.stringify([7555, 7598]));
}}
} else fl_set.add(JSON.stringify([7618, 7729]));
if (is_red(sibling.get_child(!last))) {
fl_set.add(JSON.stringify([7618, 7729]));
fl_set.add(JSON.stringify([7656, 7729]));
{
              {
fl_set.add(JSON.stringify([7656, 7729]));
gp.set_child(dir2, single_rotate(p, last));
fl_set.add(JSON.stringify([7672, 7715]));
}}
}
var gpc = gp.get_child(dir2);
fl_set.add(JSON.stringify([7744, 7773]));
gpc.red = true;
fl_set.add(JSON.stringify([7786, 7801]));
node.red = true;
fl_set.add(JSON.stringify([7814, 7830]));
gpc.left.red = false;
fl_set.add(JSON.stringify([7843, 7864]));
gpc.right.red = false;
fl_set.add(JSON.stringify([7877, 7899]));
}}
}}}
}
}}
}
}}
}
}}
}
fl_set.add(JSON.stringify([7944, 8085]));
if (found !== null) {
fl_set.add(JSON.stringify([7944, 8085]));
fl_set.add(JSON.stringify([7964, 8085]));
{
    {
fl_set.add(JSON.stringify([7964, 8085]));
found.data = node.data;
fl_set.add(JSON.stringify([7970, 7993]));
p.set_child(p.right === node, node.get_child(node.left === null));
fl_set.add(JSON.stringify([7998, 8064]));
this.size--;
fl_set.add(JSON.stringify([8069, 8081]));
}}
}
this._root = head.right;
fl_set.add(JSON.stringify([8090, 8114]));
fl_set.add(JSON.stringify([8117, 8175]));
if (this._root !== null) {
fl_set.add(JSON.stringify([8117, 8175]));
fl_set.add(JSON.stringify([8142, 8175]));
{
    {
fl_set.add(JSON.stringify([8142, 8175]));
this._root.red = false;
fl_set.add(JSON.stringify([8148, 8171]));
}}
}
fl_set.add(JSON.stringify([8180, 8202]));
return found !== null;;
}}
}

fl_set.add(JSON.stringify([6451, 8205]));
fl_set.add(JSON.stringify([8208, 8269]));
function is_red(node) {
fl_set.add(JSON.stringify([8208, 8269]));
fl_set.add(JSON.stringify([8230, 8269]));
{
  {
fl_set.add(JSON.stringify([8230, 8269]));
fl_set.add(JSON.stringify([8234, 8267]));
return node !== null && node.red;;
}}
}
fl_set.add(JSON.stringify([8272, 8478]));
function single_rotate(root, dir) {
fl_set.add(JSON.stringify([8272, 8478]));
fl_set.add(JSON.stringify([8306, 8478]));
{
  {
fl_set.add(JSON.stringify([8306, 8478]));
var save = root.get_child(!dir);
fl_set.add(JSON.stringify([8310, 8342]));
root.set_child(!dir, save.get_child(dir));
fl_set.add(JSON.stringify([8347, 8389]));
save.set_child(dir, root);
fl_set.add(JSON.stringify([8392, 8418]));
root.red = true;
fl_set.add(JSON.stringify([8423, 8439]));
save.red = false;
fl_set.add(JSON.stringify([8442, 8459]));
fl_set.add(JSON.stringify([8464, 8476]));
return save;;
}}
}
fl_set.add(JSON.stringify([8481, 8620]));
function double_rotate(root, dir) {
fl_set.add(JSON.stringify([8481, 8620]));
fl_set.add(JSON.stringify([8515, 8620]));
{
  {
fl_set.add(JSON.stringify([8515, 8620]));
root.set_child(!dir, single_rotate(root.get_child(!dir), !dir));
fl_set.add(JSON.stringify([8519, 8583]));
fl_set.add(JSON.stringify([8586, 8618]));
return single_rotate(root, dir);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

