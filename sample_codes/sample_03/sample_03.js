const xx = readline();
Array(Number(xx)).fill(1).map((t, i) => {
var a = readline().split('').map((x, iii) => {
  return x
});
var allA = true
for (let j = 0; j < a.length; j++) {
  if (a[j] !== 'a') allA = false
}
if (allA) return console.log('NO')

var ans = []
var once = true
for (let j = 0; j < a.length; j++) {
  if (a[a.length - j - 1] !== 'a' && once) {
    ans.push('a')
    once = false
  }
  ans.push(a[j])
}
console.log('YES')
console.log(ans.join(''))
})