func_1()

function func_1() {
var n = parseInt(readline())
 
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
})
 
var map = {}
var sum = 0
var x = 0
var y = 0
for (let i = 0; i < n; i++) {
for (let j = i + 1; j < n; j++) {
  sum = a[i] + a[j]
  if (!map[sum]) map[sum] = `${i}:${j}`
  else {
    [x, y] = map[sum].split(':').map(x => parseInt(x))
    if (x !== i && x !== j && y !== i && y !== j) {
      console.log('YES')
      console.log(i + 1, j + 1, x + 1, y + 1)
      return
    }
  }
}
}
console.log('NO')
 
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}
}