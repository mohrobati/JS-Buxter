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
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
fl_set.add(JSON.stringify([1, 55]));
var a = readline().split('').map((x, i) => {
fl_set.add(JSON.stringify([57, 115]));
{
  {
fl_set.add(JSON.stringify([100, 114]));
fl_set.add(JSON.stringify([104, 112]));
return x;
}}
}
)
fl_set.add(JSON.stringify([57, 115]));
var set = {}
fl_set.add(JSON.stringify([117, 129]));
for (let i = 0; i < a.length; i++) {
fl_set.add(JSON.stringify([130, 248]));
{
  {
fl_set.add(JSON.stringify([165, 248]));
if (!set[a[i]]) {
fl_set.add(JSON.stringify([169, 224]));
set[a[i]] = new RBTree((a, b) => a - b)
fl_set.add(JSON.stringify([185, 224]));
}
set[a[i]].insert(i)
fl_set.add(JSON.stringify([227, 246]));
}}
}
var n = parseInt(readline())
fl_set.add(JSON.stringify([249, 277]));
for (var i = 0; i < n; i++) {
fl_set.add(JSON.stringify([278, 792]));
{

  {
fl_set.add(JSON.stringify([306, 792]));
var [command, l, r] = readline().split(' ').map((x, i) => {
fl_set.add(JSON.stringify([311, 424]));
{
    {
fl_set.add(JSON.stringify([369, 423]));
if (i === 2) {
fl_set.add(JSON.stringify([375, 396]));
fl_set.add(JSON.stringify([388, 396]));
return x;
}
fl_set.add(JSON.stringify([401, 419]));
return parseInt(x);
}}
}
)
fl_set.add(JSON.stringify([311, 424]));
l = l - 1
fl_set.add(JSON.stringify([427, 436]));
if (command === 1) {
fl_set.add(JSON.stringify([439, 790]));
{
    {
fl_set.add(JSON.stringify([458, 575]));
set[a[l]].remove(l)
fl_set.add(JSON.stringify([464, 483]));
a[l] = r
fl_set.add(JSON.stringify([488, 496]));
if (!set[r]) {
fl_set.add(JSON.stringify([501, 550]));
set[r] = new RBTree((a, b) => a - b)
fl_set.add(JSON.stringify([514, 550]));
}
set[r].insert(l)
fl_set.add(JSON.stringify([555, 571]));
}}
} else {
fl_set.add(JSON.stringify([581, 790]));
{
    {
fl_set.add(JSON.stringify([581, 790]));
var ans = 0;
fl_set.add(JSON.stringify([587, 599]));
r--
fl_set.add(JSON.stringify([604, 607]));
alphabet.map((x) => {
fl_set.add(JSON.stringify([612, 765]));
{
      {
fl_set.add(JSON.stringify([632, 764]));
if (set[x]) {
fl_set.add(JSON.stringify([640, 758]));
{

        {
fl_set.add(JSON.stringify([652, 758]));
var value = set[x].lowerBound(l).data()
fl_set.add(JSON.stringify([663, 702]));
if (value !== null && value <= r) {
fl_set.add(JSON.stringify([711, 750]));
ans++
fl_set.add(JSON.stringify([745, 750]));
}
}}
}
}}
}
)
fl_set.add(JSON.stringify([612, 765]));
console.log(ans)
fl_set.add(JSON.stringify([770, 786]));
}}
}}}
}
function TreeBase() {
fl_set.add(JSON.stringify([794, 817]));
{
}
}
TreeBase.prototype.clear = function () {
fl_set.add(JSON.stringify([820, 901]));
{
  {
fl_set.add(JSON.stringify([859, 900]));
this._root = null;
fl_set.add(JSON.stringify([863, 881]));
this.size = 0;
fl_set.add(JSON.stringify([884, 898]));
}}
}

fl_set.add(JSON.stringify([820, 901]));
TreeBase.prototype.find = function (data) {
fl_set.add(JSON.stringify([904, 1161]));
{
  {
fl_set.add(JSON.stringify([946, 1160]));
var res = this._root;
fl_set.add(JSON.stringify([950, 971]));
while (res !== null) {
fl_set.add(JSON.stringify([975, 1142]));
{
    {
fl_set.add(JSON.stringify([996, 1142]));
var c = this._comparator(data, res.data);
fl_set.add(JSON.stringify([1002, 1043]));
if (c === 0) {
fl_set.add(JSON.stringify([1048, 1138]));
{
      {
fl_set.add(JSON.stringify([1061, 1091]));
fl_set.add(JSON.stringify([1069, 1085]));
return res.data;;
}}
} else {
fl_set.add(JSON.stringify([1097, 1138]));
{
      {
fl_set.add(JSON.stringify([1097, 1138]));
res = res.get_child(c > 0);
fl_set.add(JSON.stringify([1105, 1132]));
}}
}}}
}
fl_set.add(JSON.stringify([1146, 1158]));
return null;;
}}
}

fl_set.add(JSON.stringify([904, 1161]));
TreeBase.prototype.findIter = function (data) {
fl_set.add(JSON.stringify([1164, 1510]));
{
  {
fl_set.add(JSON.stringify([1210, 1509]));
var res = this._root;
fl_set.add(JSON.stringify([1214, 1235]));
var iter = this.iterator();
fl_set.add(JSON.stringify([1238, 1265]));
while (res !== null) {
fl_set.add(JSON.stringify([1269, 1491]));
{
    {
fl_set.add(JSON.stringify([1290, 1491]));
var c = this._comparator(data, res.data);
fl_set.add(JSON.stringify([1296, 1337]));
if (c === 0) {
fl_set.add(JSON.stringify([1342, 1487]));
{
      {
fl_set.add(JSON.stringify([1355, 1407]));
iter._cursor = res;
fl_set.add(JSON.stringify([1363, 1382]));
fl_set.add(JSON.stringify([1389, 1401]));
return iter;;
}}
} else {
fl_set.add(JSON.stringify([1413, 1487]));
{
      {
fl_set.add(JSON.stringify([1413, 1487]));
iter._ancestors.push(res);
fl_set.add(JSON.stringify([1421, 1447]));
res = res.get_child(c > 0);
fl_set.add(JSON.stringify([1454, 1481]));
}}
}}}
}
fl_set.add(JSON.stringify([1495, 1507]));
return null;;
}}
}

fl_set.add(JSON.stringify([1164, 1510]));
TreeBase.prototype.lowerBound = function (item) {
fl_set.add(JSON.stringify([1513, 2104]));
{
  {
fl_set.add(JSON.stringify([1561, 2103]));
var cur = this._root;
fl_set.add(JSON.stringify([1565, 1586]));
var iter = this.iterator();
fl_set.add(JSON.stringify([1589, 1616]));
var cmp = this._comparator;
fl_set.add(JSON.stringify([1619, 1646]));
while (cur !== null) {
fl_set.add(JSON.stringify([1650, 1842]));
{
    {
fl_set.add(JSON.stringify([1671, 1842]));
var c = cmp(item, cur.data);
fl_set.add(JSON.stringify([1677, 1705]));
if (c === 0) {
fl_set.add(JSON.stringify([1710, 1775]));
{
      {
fl_set.add(JSON.stringify([1723, 1775]));
iter._cursor = cur;
fl_set.add(JSON.stringify([1731, 1750]));
fl_set.add(JSON.stringify([1757, 1769]));
return iter;;
}}
}
iter._ancestors.push(cur);
fl_set.add(JSON.stringify([1780, 1806]));
cur = cur.get_child(c > 0);
fl_set.add(JSON.stringify([1811, 1838]));
}}
}
for (var i = iter._ancestors.length - 1; i >= 0; --i) {
fl_set.add(JSON.stringify([1846, 2055]));
{
    {
fl_set.add(JSON.stringify([1900, 2055]));
cur = iter._ancestors[i];
fl_set.add(JSON.stringify([1906, 1931]));
if (cmp(item, cur.data) < 0) {
fl_set.add(JSON.stringify([1936, 2051]));
{
      {
fl_set.add(JSON.stringify([1965, 2051]));
iter._cursor = cur;
fl_set.add(JSON.stringify([1973, 1992]));
iter._ancestors.length = i;
fl_set.add(JSON.stringify([1999, 2026]));
fl_set.add(JSON.stringify([2033, 2045]));
return iter;;
}}
}
}}
}
iter._ancestors.length = 0;
fl_set.add(JSON.stringify([2059, 2086]));
fl_set.add(JSON.stringify([2089, 2101]));
return iter;;
}}
}

fl_set.add(JSON.stringify([1513, 2104]));
TreeBase.prototype.upperBound = function (item) {
fl_set.add(JSON.stringify([2107, 2328]));
{
  {
fl_set.add(JSON.stringify([2155, 2327]));
var iter = this.lowerBound(item);
fl_set.add(JSON.stringify([2159, 2192]));
var cmp = this._comparator;
fl_set.add(JSON.stringify([2195, 2222]));
while (iter.data() !== null && cmp(iter.data(), item) === 0) {
fl_set.add(JSON.stringify([2226, 2309]));
{
    {
fl_set.add(JSON.stringify([2287, 2309]));
iter.next();
fl_set.add(JSON.stringify([2293, 2305]));
}}
}
fl_set.add(JSON.stringify([2313, 2325]));
return iter;;
}}
}

fl_set.add(JSON.stringify([2107, 2328]));
TreeBase.prototype.min = function () {
fl_set.add(JSON.stringify([2331, 2514]));
{
  {
fl_set.add(JSON.stringify([2368, 2513]));
var res = this._root;
fl_set.add(JSON.stringify([2372, 2393]));
if (res === null) {
fl_set.add(JSON.stringify([2396, 2436]));
{
    {
fl_set.add(JSON.stringify([2414, 2436]));
fl_set.add(JSON.stringify([2420, 2432]));
return null;;
}}
}
while (res.left !== null) {
fl_set.add(JSON.stringify([2440, 2491]));
{
    {
fl_set.add(JSON.stringify([2466, 2491]));
res = res.left;
fl_set.add(JSON.stringify([2472, 2487]));
}}
}
fl_set.add(JSON.stringify([2495, 2511]));
return res.data;;
}}
}

fl_set.add(JSON.stringify([2331, 2514]));
TreeBase.prototype.max = function () {
fl_set.add(JSON.stringify([2517, 2702]));
{
  {
fl_set.add(JSON.stringify([2554, 2701]));
var res = this._root;
fl_set.add(JSON.stringify([2558, 2579]));
if (res === null) {
fl_set.add(JSON.stringify([2582, 2622]));
{
    {
fl_set.add(JSON.stringify([2600, 2622]));
fl_set.add(JSON.stringify([2606, 2618]));
return null;;
}}
}
while (res.right !== null) {
fl_set.add(JSON.stringify([2626, 2679]));
{
    {
fl_set.add(JSON.stringify([2653, 2679]));
res = res.right;
fl_set.add(JSON.stringify([2659, 2675]));
}}
}
fl_set.add(JSON.stringify([2683, 2699]));
return res.data;;
}}
}

fl_set.add(JSON.stringify([2517, 2702]));
TreeBase.prototype.iterator = function () {
fl_set.add(JSON.stringify([2706, 2781]));
{
  {
fl_set.add(JSON.stringify([2748, 2780]));
fl_set.add(JSON.stringify([2752, 2778]));
return new Iterator(this);;
}}
}

fl_set.add(JSON.stringify([2706, 2781]));
TreeBase.prototype.each = function (cb) {
fl_set.add(JSON.stringify([2784, 2956]));
{
  {
fl_set.add(JSON.stringify([2824, 2955]));
var it = this.iterator(), data;
fl_set.add(JSON.stringify([2828, 2859]));
while ((data = it.next()) !== null) {
fl_set.add(JSON.stringify([2862, 2953]));
{
    {
fl_set.add(JSON.stringify([2898, 2953]));
if (cb(data) === false) {
fl_set.add(JSON.stringify([2904, 2949]));
{
      {
fl_set.add(JSON.stringify([2928, 2949]));
fl_set.add(JSON.stringify([2936, 2943]));
return;;
}}
}
}}
}
}}
}

fl_set.add(JSON.stringify([2784, 2956]));
TreeBase.prototype.reach = function (cb) {
fl_set.add(JSON.stringify([2959, 3132]));
{
  {
fl_set.add(JSON.stringify([3000, 3131]));
var it = this.iterator(), data;
fl_set.add(JSON.stringify([3004, 3035]));
while ((data = it.prev()) !== null) {
fl_set.add(JSON.stringify([3038, 3129]));
{
    {
fl_set.add(JSON.stringify([3074, 3129]));
if (cb(data) === false) {
fl_set.add(JSON.stringify([3080, 3125]));
{
      {
fl_set.add(JSON.stringify([3104, 3125]));
fl_set.add(JSON.stringify([3112, 3119]));
return;;
}}
}
}}
}
}}
}

fl_set.add(JSON.stringify([2959, 3132]));
function Iterator(tree) {
fl_set.add(JSON.stringify([3135, 3230]));
{
  {
fl_set.add(JSON.stringify([3159, 3230]));
this._tree = tree;
fl_set.add(JSON.stringify([3163, 3181]));
this._ancestors = [];
fl_set.add(JSON.stringify([3184, 3205]));
this._cursor = null;
fl_set.add(JSON.stringify([3208, 3228]));
}}
}
Iterator.prototype.data = function () {
fl_set.add(JSON.stringify([3232, 3333]));
{
  {
fl_set.add(JSON.stringify([3270, 3332]));
fl_set.add(JSON.stringify([3274, 3330]));
return this._cursor !== null ? this._cursor.data : null;;
}}
}

fl_set.add(JSON.stringify([3232, 3333]));
Iterator.prototype.next = function () {
fl_set.add(JSON.stringify([3337, 3981]));
{
  {
fl_set.add(JSON.stringify([3375, 3980]));
if (this._cursor === null) {
fl_set.add(JSON.stringify([3379, 3919]));
{
    {
fl_set.add(JSON.stringify([3406, 3502]));
var root = this._tree._root;
fl_set.add(JSON.stringify([3412, 3440]));
if (root !== null) {
fl_set.add(JSON.stringify([3445, 3498]));
{
      {
fl_set.add(JSON.stringify([3464, 3498]));
this._minNode(root);
fl_set.add(JSON.stringify([3472, 3492]));
}}
}
}}
} else {
fl_set.add(JSON.stringify([3508, 3919]));
{
    {
fl_set.add(JSON.stringify([3508, 3919]));
if (this._cursor.right === null) {
fl_set.add(JSON.stringify([3514, 3915]));
{


      {
fl_set.add(JSON.stringify([3547, 3818]));
var save;
fl_set.add(JSON.stringify([3557, 3566]));
{
        {
fl_set.add(JSON.stringify([3576, 3775]));
save = this._cursor;
fl_set.add(JSON.stringify([3586, 3606]));
if (this._ancestors.length) {
fl_set.add(JSON.stringify([3615, 3767]));
{
          {
fl_set.add(JSON.stringify([3643, 3702]));
this._cursor = this._ancestors.pop();
fl_set.add(JSON.stringify([3655, 3692]));
}}
} else {
fl_set.add(JSON.stringify([3708, 3767]));
{
          {
fl_set.add(JSON.stringify([3708, 3767]));
this._cursor = null;
fl_set.add(JSON.stringify([3720, 3740]));
fl_set.add(JSON.stringify([3751, 3757]));
break;;
}}
}}}
}}
} else {
fl_set.add(JSON.stringify([3824, 3915]));
{

      {
fl_set.add(JSON.stringify([3824, 3915]));
this._ancestors.push(this._cursor);
fl_set.add(JSON.stringify([3833, 3868]));
this._minNode(this._cursor.right);
fl_set.add(JSON.stringify([3875, 3909]));
}}
}}}
}fl_set.add(JSON.stringify([3922, 3978]));
return this._cursor !== null ? this._cursor.data : null;;
}}
}

fl_set.add(JSON.stringify([3337, 3981]));
Iterator.prototype.prev = function () {
fl_set.add(JSON.stringify([3985, 4623]));
{
  {
fl_set.add(JSON.stringify([4023, 4622]));
if (this._cursor === null) {
fl_set.add(JSON.stringify([4027, 4561]));
{
    {
fl_set.add(JSON.stringify([4054, 4150]));
var root = this._tree._root;
fl_set.add(JSON.stringify([4060, 4088]));
if (root !== null) {
fl_set.add(JSON.stringify([4093, 4146]));
{
      {
fl_set.add(JSON.stringify([4112, 4146]));
this._maxNode(root);
fl_set.add(JSON.stringify([4120, 4140]));
}}
}
}}
} else {
fl_set.add(JSON.stringify([4156, 4561]));
{
    {
fl_set.add(JSON.stringify([4156, 4561]));
if (this._cursor.left === null) {
fl_set.add(JSON.stringify([4162, 4557]));
{
      {
fl_set.add(JSON.stringify([4194, 4462]));
var save;
fl_set.add(JSON.stringify([4202, 4211]));
{
        {
fl_set.add(JSON.stringify([4221, 4420]));
save = this._cursor;
fl_set.add(JSON.stringify([4231, 4251]));
if (this._ancestors.length) {
fl_set.add(JSON.stringify([4260, 4412]));
{
          {
fl_set.add(JSON.stringify([4288, 4347]));
this._cursor = this._ancestors.pop();
fl_set.add(JSON.stringify([4300, 4337]));
}}
} else {
fl_set.add(JSON.stringify([4353, 4412]));
{
          {
fl_set.add(JSON.stringify([4353, 4412]));
this._cursor = null;
fl_set.add(JSON.stringify([4365, 4385]));
fl_set.add(JSON.stringify([4396, 4402]));
break;;
}}
}}}
}}
} else {
fl_set.add(JSON.stringify([4468, 4557]));
{
      {
fl_set.add(JSON.stringify([4468, 4557]));
this._ancestors.push(this._cursor);
fl_set.add(JSON.stringify([4476, 4511]));
this._maxNode(this._cursor.left);
fl_set.add(JSON.stringify([4518, 4551]));
}}
}}}
}fl_set.add(JSON.stringify([4564, 4620]));
return this._cursor !== null ? this._cursor.data : null;;
}}
}

fl_set.add(JSON.stringify([3985, 4623]));
Iterator.prototype._minNode = function (start) {
fl_set.add(JSON.stringify([4625, 4793]));
{
  {
fl_set.add(JSON.stringify([4672, 4792]));
while (start.left !== null) {
fl_set.add(JSON.stringify([4676, 4766]));
{
    {
fl_set.add(JSON.stringify([4704, 4766]));
this._ancestors.push(start);
fl_set.add(JSON.stringify([4710, 4738]));
start = start.left;
fl_set.add(JSON.stringify([4743, 4762]));
}}
}
this._cursor = start;
fl_set.add(JSON.stringify([4769, 4790]));
}}
}

fl_set.add(JSON.stringify([4625, 4793]));
Iterator.prototype._maxNode = function (start) {
fl_set.add(JSON.stringify([4795, 4965]));
{
  {
fl_set.add(JSON.stringify([4842, 4964]));
while (start.right !== null) {
fl_set.add(JSON.stringify([4846, 4938]));
{
    {
fl_set.add(JSON.stringify([4875, 4938]));
this._ancestors.push(start);
fl_set.add(JSON.stringify([4881, 4909]));
start = start.right;
fl_set.add(JSON.stringify([4914, 4934]));
}}
}
this._cursor = start;
fl_set.add(JSON.stringify([4941, 4962]));
}}
}

fl_set.add(JSON.stringify([4795, 4965]));
function Node(data) {
fl_set.add(JSON.stringify([4967, 5070]));
{
  {
fl_set.add(JSON.stringify([4987, 5070]));
this.data = data;
fl_set.add(JSON.stringify([4991, 5008]));
this.left = null;
fl_set.add(JSON.stringify([5011, 5028]));
this.right = null;
fl_set.add(JSON.stringify([5031, 5049]));
this.red = true;
fl_set.add(JSON.stringify([5052, 5068]));
}}
}
Node.prototype.get_child = function (dir) {
fl_set.add(JSON.stringify([5072, 5157]));
{
  {
fl_set.add(JSON.stringify([5114, 5156]));
fl_set.add(JSON.stringify([5118, 5154]));
return dir ? this.right : this.left;;
}}
}

fl_set.add(JSON.stringify([5072, 5157]));
Node.prototype.set_child = function (dir, val) {
fl_set.add(JSON.stringify([5159, 5281]));
{
  {
fl_set.add(JSON.stringify([5206, 5280]));
if (dir) {
fl_set.add(JSON.stringify([5210, 5278]));
{
    {
fl_set.add(JSON.stringify([5219, 5246]));
this.right = val;
fl_set.add(JSON.stringify([5225, 5242]));
}}
} else {
fl_set.add(JSON.stringify([5252, 5278]));
{
    {
fl_set.add(JSON.stringify([5252, 5278]));
this.left = val;
fl_set.add(JSON.stringify([5258, 5274]));
}}
}}}
}

fl_set.add(JSON.stringify([5159, 5281]));
function RBTree(comparator) {
fl_set.add(JSON.stringify([5283, 5385]));
{
  {
fl_set.add(JSON.stringify([5311, 5385]));
this._root = null;
fl_set.add(JSON.stringify([5315, 5333]));
this._comparator = comparator;
fl_set.add(JSON.stringify([5336, 5366]));
this.size = 0;
fl_set.add(JSON.stringify([5369, 5383]));
}}
}
RBTree.prototype = new TreeBase();
fl_set.add(JSON.stringify([5387, 5421]));
RBTree.prototype.insert = function (data) {
fl_set.add(JSON.stringify([5424, 6704]));
{
  {
fl_set.add(JSON.stringify([5466, 6703]));
var ret = false;
fl_set.add(JSON.stringify([5470, 5486]));
if (this._root === null) {
fl_set.add(JSON.stringify([5490, 6658]));
{

    {
fl_set.add(JSON.stringify([5515, 5587]));
this._root = new Node(data);
fl_set.add(JSON.stringify([5522, 5550]));
ret = true;
fl_set.add(JSON.stringify([5555, 5566]));
this.size++;
fl_set.add(JSON.stringify([5571, 5583]));
}}
} else {
fl_set.add(JSON.stringify([5593, 6658]));
{
    {
fl_set.add(JSON.stringify([5593, 6658]));
var head = new Node(undefined);
fl_set.add(JSON.stringify([5599, 5630]));
var dir = 0;
fl_set.add(JSON.stringify([5636, 5648]));
var last = 0;
fl_set.add(JSON.stringify([5653, 5666]));
var gp = null;
fl_set.add(JSON.stringify([5673, 5687]));
var ggp = head;
fl_set.add(JSON.stringify([5692, 5707]));
var p = null;
fl_set.add(JSON.stringify([5712, 5725]));
var node = this._root;
fl_set.add(JSON.stringify([5730, 5752]));
ggp.right = this._root;
fl_set.add(JSON.stringify([5757, 5780]));
while (true) {
fl_set.add(JSON.stringify([5787, 6623]));
{
      {
fl_set.add(JSON.stringify([5800, 6623]));
if (node === null) {
fl_set.add(JSON.stringify([5808, 6090]));
{

        {
fl_set.add(JSON.stringify([5827, 5941]));
node = new Node(data);
fl_set.add(JSON.stringify([5838, 5860]));
p.set_child(dir, node);
fl_set.add(JSON.stringify([5869, 5892]));
ret = true;
fl_set.add(JSON.stringify([5901, 5912]));
this.size++;
fl_set.add(JSON.stringify([5921, 5933]));
}}
} else if (is_red(node.left) && is_red(node.right)) {
fl_set.add(JSON.stringify([5947, 6090]));
{

        {
fl_set.add(JSON.stringify([5992, 6090]));
node.red = true;
fl_set.add(JSON.stringify([6003, 6019]));
node.left.red = false;
fl_set.add(JSON.stringify([6028, 6050]));
node.right.red = false;
fl_set.add(JSON.stringify([6059, 6082]));
}}
}
if (is_red(node) && is_red(p)) {
fl_set.add(JSON.stringify([6099, 6360]));
{
        {
fl_set.add(JSON.stringify([6130, 6360]));
var dir2 = ggp.right === gp;
fl_set.add(JSON.stringify([6140, 6168]));
if (node === p.get_child(last)) {
fl_set.add(JSON.stringify([6178, 6352]));
{
          {
fl_set.add(JSON.stringify([6210, 6278]));
ggp.set_child(dir2, single_rotate(gp, !last));
fl_set.add(JSON.stringify([6222, 6268]));
}}
} else {
fl_set.add(JSON.stringify([6284, 6352]));
{
          {
fl_set.add(JSON.stringify([6284, 6352]));
ggp.set_child(dir2, double_rotate(gp, !last));
fl_set.add(JSON.stringify([6296, 6342]));
}}
}}}
}
var cmp = this._comparator(node.data, data);
fl_set.add(JSON.stringify([6368, 6412]));
if (cmp === 0) {
fl_set.add(JSON.stringify([6421, 6460]));
{
        {
fl_set.add(JSON.stringify([6436, 6460]));
fl_set.add(JSON.stringify([6446, 6452]));
break;;
}}
}
last = dir;
fl_set.add(JSON.stringify([6468, 6479]));
dir = cmp < 0;
fl_set.add(JSON.stringify([6486, 6500]));
if (gp !== null) {
fl_set.add(JSON.stringify([6509, 6553]));
{
        {
fl_set.add(JSON.stringify([6526, 6553]));
ggp = gp;
fl_set.add(JSON.stringify([6536, 6545]));
}}
}
gp = p;
fl_set.add(JSON.stringify([6560, 6567]));
p = node;
fl_set.add(JSON.stringify([6574, 6583]));
node = node.get_child(dir);
fl_set.add(JSON.stringify([6590, 6617]));
}}
}
this._root = head.right;
fl_set.add(JSON.stringify([6630, 6654]));
}}
}this._root.red = false;
fl_set.add(JSON.stringify([6663, 6686]));
fl_set.add(JSON.stringify([6690, 6701]));
return ret;;
}}
}

fl_set.add(JSON.stringify([5424, 6704]));
RBTree.prototype.remove = function (data) {
fl_set.add(JSON.stringify([6707, 8456]));
{
  {
fl_set.add(JSON.stringify([6749, 8455]));
if (this._root === null) {
fl_set.add(JSON.stringify([6753, 6801]));
{
    {
fl_set.add(JSON.stringify([6778, 6801]));
fl_set.add(JSON.stringify([6784, 6797]));
return false;;
}}
}
var head = new Node(undefined);
fl_set.add(JSON.stringify([6805, 6836]));
var node = head;
fl_set.add(JSON.stringify([6839, 6855]));
node.right = this._root;
fl_set.add(JSON.stringify([6858, 6882]));
var p = null;
fl_set.add(JSON.stringify([6885, 6898]));
var gp = null;
fl_set.add(JSON.stringify([6901, 6915]));
var found = null;
fl_set.add(JSON.stringify([6918, 6935]));
var dir = 1;
fl_set.add(JSON.stringify([6938, 6950]));
while (node.get_child(dir) !== null) {
fl_set.add(JSON.stringify([6954, 8191]));
{
    {
fl_set.add(JSON.stringify([6991, 8191]));
var last = dir;
fl_set.add(JSON.stringify([6997, 7012]));
gp = p;
fl_set.add(JSON.stringify([7019, 7026]));
p = node;
fl_set.add(JSON.stringify([7031, 7040]));
node = node.get_child(dir);
fl_set.add(JSON.stringify([7045, 7072]));
var cmp = this._comparator(data, node.data);
fl_set.add(JSON.stringify([7078, 7122]));
dir = cmp > 0;
fl_set.add(JSON.stringify([7128, 7142]));
if (cmp === 0) {
fl_set.add(JSON.stringify([7149, 7191]));
{
      {
fl_set.add(JSON.stringify([7164, 7191]));
found = node;
fl_set.add(JSON.stringify([7172, 7185]));
}}
}
if (!is_red(node) && !is_red(node.get_child(dir))) {
fl_set.add(JSON.stringify([7198, 8187]));
{
      {
fl_set.add(JSON.stringify([7249, 8187]));
if (is_red(node.get_child(!dir))) {
fl_set.add(JSON.stringify([7257, 8181]));
{
        {
fl_set.add(JSON.stringify([7291, 7390]));
var sr = single_rotate(node, dir);
fl_set.add(JSON.stringify([7301, 7335]));
p.set_child(last, sr);
fl_set.add(JSON.stringify([7344, 7366]));
p = sr;
fl_set.add(JSON.stringify([7375, 7382]));
}}
} else if (!is_red(node.get_child(!dir))) {
fl_set.add(JSON.stringify([7396, 8181]));
{
        {
fl_set.add(JSON.stringify([7431, 8181]));
var sibling = p.get_child(!last);
fl_set.add(JSON.stringify([7441, 7474]));
if (sibling !== null) {
fl_set.add(JSON.stringify([7483, 8173]));
{
          {
fl_set.add(JSON.stringify([7505, 8173]));
if (!is_red(sibling.get_child(!last)) && !is_red(sibling.get_child(last))) {
fl_set.add(JSON.stringify([7517, 8163]));
{

            {
fl_set.add(JSON.stringify([7592, 7694]));
p.red = false;
fl_set.add(JSON.stringify([7607, 7621]));
sibling.red = true;
fl_set.add(JSON.stringify([7634, 7653]));
node.red = true;
fl_set.add(JSON.stringify([7666, 7682]));
}}
} else {
fl_set.add(JSON.stringify([7700, 8163]));
{
            {
fl_set.add(JSON.stringify([7700, 8163]));
var dir2 = gp.right === p;
fl_set.add(JSON.stringify([7714, 7740]));
if (is_red(sibling.get_child(last))) {
fl_set.add(JSON.stringify([7754, 7981]));
{
              {
fl_set.add(JSON.stringify([7791, 7864]));
gp.set_child(dir2, double_rotate(p, last));
fl_set.add(JSON.stringify([7807, 7850]));
}}
} else if (is_red(sibling.get_child(!last))) {
fl_set.add(JSON.stringify([7870, 7981]));
{
              {
fl_set.add(JSON.stringify([7908, 7981]));
gp.set_child(dir2, single_rotate(p, last));
fl_set.add(JSON.stringify([7924, 7967]));
}}
}
var gpc = gp.get_child(dir2);
fl_set.add(JSON.stringify([7996, 8025]));
gpc.red = true;
fl_set.add(JSON.stringify([8038, 8053]));
node.red = true;
fl_set.add(JSON.stringify([8066, 8082]));
gpc.left.red = false;
fl_set.add(JSON.stringify([8095, 8116]));
gpc.right.red = false;
fl_set.add(JSON.stringify([8129, 8151]));
}}
}}}
}
}}
}
}}
}
}}
}
if (found !== null) {
fl_set.add(JSON.stringify([8196, 8337]));
{
    {
fl_set.add(JSON.stringify([8216, 8337]));
found.data = node.data;
fl_set.add(JSON.stringify([8222, 8245]));
p.set_child(p.right === node, node.get_child(node.left === null));
fl_set.add(JSON.stringify([8250, 8316]));
this.size--;
fl_set.add(JSON.stringify([8321, 8333]));
}}
}
this._root = head.right;
fl_set.add(JSON.stringify([8342, 8366]));
if (this._root !== null) {
fl_set.add(JSON.stringify([8369, 8427]));
{
    {
fl_set.add(JSON.stringify([8394, 8427]));
this._root.red = false;
fl_set.add(JSON.stringify([8400, 8423]));
}}
}
fl_set.add(JSON.stringify([8431, 8453]));
return found !== null;;
}}
}

fl_set.add(JSON.stringify([6707, 8456]));
function is_red(node) {
fl_set.add(JSON.stringify([8458, 8519]));
{
  {
fl_set.add(JSON.stringify([8480, 8519]));
fl_set.add(JSON.stringify([8484, 8517]));
return node !== null && node.red;;
}}
}
function single_rotate(root, dir) {
fl_set.add(JSON.stringify([8521, 8724]));
{
  {
fl_set.add(JSON.stringify([8555, 8724]));
var save = root.get_child(!dir);
fl_set.add(JSON.stringify([8559, 8591]));
root.set_child(!dir, save.get_child(dir));
fl_set.add(JSON.stringify([8595, 8637]));
save.set_child(dir, root);
fl_set.add(JSON.stringify([8640, 8666]));
root.red = true;
fl_set.add(JSON.stringify([8670, 8686]));
save.red = false;
fl_set.add(JSON.stringify([8689, 8706]));
fl_set.add(JSON.stringify([8710, 8722]));
return save;;
}}
}
function double_rotate(root, dir) {
fl_set.add(JSON.stringify([8726, 8865]));
{
  {
fl_set.add(JSON.stringify([8760, 8865]));
root.set_child(!dir, single_rotate(root.get_child(!dir), !dir));
fl_set.add(JSON.stringify([8764, 8828]));
fl_set.add(JSON.stringify([8831, 8863]));
return single_rotate(root, dir);;
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

