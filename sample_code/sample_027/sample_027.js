var [n, k] = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
 
var min = Number.MAX_SAFE_INTEGER
 
var object = new Array(2 * 10e4 + 1)
for (let j = 0; j < 2 * 10e4 + 1; j++) {
object[j] = []
}
 
for (let j = 0; j < n; j++) {
var count = 0
var val = a[j]
while (val > 0) {
  object[val].push(count)
  val = Math.floor(val / 2)
  count++
}
}

for (let j = 0; j < 2 * 10e4 + 1; j++) {
if (object[j].length < k) continue
object[j] = object[j].sort((a, b) => a - b)
var sum = 0
for (let i = 0; i < k; i++) {
  sum += object[j][i]
}
min = Math.min(min, sum)
}
 
console.log(min)
 

 
 