var [n, k] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
})
var a = readline().split('').map((x, iii) => {
  return x
})
var array = readline().split(' ').map((x, iii) => {
  return x
})
var count = 0
var ans = 0
for (let i = 0; i < n; i++) {
  if (array.includes(a[i])) {
    count++
  } else {
    ans += count * (count + 1) / 2
    count = 0
  }
}
if (count < 0) ans += count * (count + 1) / 2
console.log(ans)
var val = 0