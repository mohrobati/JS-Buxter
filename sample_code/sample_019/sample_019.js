var n = parseInt(readline())
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var array = {
4: 0,
8: 1, 15: 2, 16: 3, 23: 4, 42: 5
}
for (let i = 0; i < n; i++) {
a[i] = array[a[i]]
}
array = {}
var count = new Array(6).fill(0)
for (let i = 0; i < n; i++) {
if (a[i] == 0) {
  count[0]++
  continue
}
if (count[a[i] - 1] >= 1) {
  count[a[i]]++
  count[a[i] - 1]--
}
 
}
 
console.log(a.length - count[5] * 6)