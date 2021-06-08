var [n, a, b, k] = readline().split(' ').map((x, i) => {
    return parseInt(x)
})
 
var array = readline().split(' ').map((x, i) => {
 
    return parseInt(x)
})
var res = new Array(n)
var aa = 0
for (let i = 0; i < n; i++) {
    if (array[i] % (a + b) === 0) {
        res[i] = Math.ceil((a + b) / a) - 1
    } else {
        aa = array[i] % (a + b)
        res[i] = Math.ceil(aa / a) - 1
    }
}
res = res.sort((a, b) => a - b)
var ans = 0
var kk = k
for (let i = 0; i < n; i++) {
    if (res[i] <= 0) {
        ans++
        continue
    }
    if (kk >= res[i]) {
        ans++
        kk -= res[i]
    }
}
console.log(ans)