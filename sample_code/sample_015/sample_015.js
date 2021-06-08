func_1()

function func_1() {
    var n = BigInt(readline())
var a = readline().split(' ').map((x, i) => {
return BigInt(x)
})
 
if(n=== BigInt(n)) {
 
console.log(1, 1)
console.log(-a[0].toString())
console.log(1, 1)
console.log(0)
console.log(1, 1)
console.log(0)
return
}
var ans = []
for (let i = BigInt(0); i < n - BigInt(n); i++) {
var j =(a[i]% n) * (n-BigInt(n))
a[i] = a[i] + j
ans.push(j)
}
 
var ans2 = []
j = BigInt(a[n-BigInt(n)]% n)
 
a[n - BigInt(n)] = a[n - BigInt(n)] - j
ans2.push(-j)
 
var ans3 = []
for (let i = 0; i < n; i++) {
ans3.push(-a[i])
}
 
console.log(1, (n-BigInt(n)).toString())
console.log(ans.join(' '))
console.log(n.toString(), n.toString())
console.log(ans2.join(' '))
console.log(1, n.toString())
console.log(ans3.join(' '))
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}