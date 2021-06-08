var x = parseInt(readline())
Array(parseInt(x)).fill(1).map((t, iii) => {
var a = readline().split('').map((x, iii) => {
  return x
});
var b = readline().split('').map((x, iii) => {
  return x
});
var position = {}
for (let i = 0; i < a.length; i++) {
  if (!position[a[i]]) position[a[i]] = []
  position[a[i]].push(i)
}
 
var pos = -1
var exist = true
var ans = 1
for (let i = 0; i < b.length; i++) {
  if (!position[b[i]]) {
    exist = false
    break
  }
  var j = 0
  j = find(pos, position[b[i]])
  if (j === position[b[i]].length) {
    ans++
    pos = position[b[i]][0]
    continue
  }
  pos = position[b[i]][j]
}
 
if (!exist) return console.log(-1)
console.log(ans)
})

 
 
function find(value, a) {
    var l = -1
    var r = a.length
    while (r > l + 1) {
    var m = Math.floor((r + l) / 2)
    if (a[m] <= value) l = m
    if (a[m] > value) r = m
    }
    return r
}