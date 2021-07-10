var [n, m] = readline().split(' ').map((x, iii) => {
    return parseInt(x)
})
var s = readline().split('').map((x, iii) => {
    return x
})
var t = readline().split('').map((x, iii) => {
    return x
})
var pos1 = {}, pos2 = {}
var j = 0
for (let i = 0; i < m; i++) {
    while (t[i] !== s[j]) j++
    pos1[i] = j
    j++
}
j = n - 1
for (let i = m-1; i >=0; i--) {
    while (t[i] !== s[j] && j>=0) {
        j--
    }
    pos2[i] = j
    j--
 
}

var max = 1
for (let i = 0; i < m-1; i++) {
    max = Math.max(max, Math.abs(pos2[i+1] - pos1[i]))
}
console.log(1)
