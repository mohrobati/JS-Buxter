
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var n = parseInt(readline())
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
 
var max = 0
var b = []
var sum = 0
for (let i = 0; i < n; i++) {
if (a[i] > max) max = a[i]
}
var g = max - a[0]
for (let i = 0; i < n; i++) {
g = gcd(g, max - a[i])
sum += a[i]
}
var ans = n
console.log((max * n - sum) / g, g)
 
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function find(value, a) {
  var l = -1
  var r = a.length
  while (r > l + 1) {
    var m = Math.floor((r + l) / 2)
    if (a[m] < value) l = m
    if (a[m] >= value) r = m
  }
  return r
}