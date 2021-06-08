var maxN = 21
var mod = 1000000007

var n = BigInt(readline())
var a = readline().split(' ').map((x, iii) => {
return BigInt(x)
});
var b = readline().split(' ').map((x, iii) => {
return BigInt(x)
});
for (let i = BigInt(1); i <= n; i++) {
a[i - BigInt(1)] = a[i - BigInt(1)] * i * (n - i + BigInt(1))
}
a = a.sort((a, b) => {
if (a > b) {
  return 1;
} else if (a < b) {
  return -1;
} else {
  return 0;
}
});
b = b.sort((a, b) => {
if (a > b) {
  return 1;
} else if (a < b) {
  return -1;
} else {
  return 0;
}
})
 
var sum = BigInt(0)
for (let i = BigInt(0); i < n; i++) {
sum = (sum + a[i] * b[n - i - BigInt(1)]) % mod
}

console.log(sum.toString())
 
