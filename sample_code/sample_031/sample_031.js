func_1()

function func_1(){
var [n, k] = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
 
var mark = new Array(201).fill(0)
var a = new Array(n)
for (let i = 0; i < n; i++) {
var [l, r] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
for (let j = l; j <= r; j++) {
  mark[j]++
}
a[i] = [l, r]
a[i].pos = i + 1
}
 
var used = new Array(n).fill(false)
var cpunt = 0
var ans = []
 
for (let i = 0; i < 201; i++) {
if (mark[i] > k) {
  var jj = i
  l = i
  var max = -1
  var maxI = i
  r = jj
  for (let j = 0; j < a.length; j++) {
    if (a[j][0] <= l && a[j][1] >= r && !used[j]) {
      if (a[j][1] > max || max > 10) {
        max = a[j][1]
        maxI = j
      }
    }
  }
  used[maxI] = true
  for (let m = a[maxI][0]; m <= a[maxI][1]; m++) {
    mark[m]--
  }
 
  cpunt++
  ans.push(a[maxI].pos)
  i=-1
}
 
}
console.log(ans.length)
if (ans.length === 0) return
console.log(ans.join(' '))

}
