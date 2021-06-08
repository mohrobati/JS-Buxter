func_1()

function func_1() {
var [n, k, l] = readline().split(' ').map((x, iii) => {
return parseInt(x)
})
 
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
})
a = a.sort((a, b) => a - b)
var i = 0
while (a[i] <= a[0] + l) i++
var count = i
 
if (count < n) return console.log(0)
 
var ans = 0
for (let i = 0; i < n; i++) {
var index = Math.min(i * k, count - (n - i))
ans += a[index]
}
console.log(ans)
}

 