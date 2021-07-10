var [n, m, k] = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var a = new Array(k)
for (let i = 0; i < k; i++) {
a[i] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
}
var b = new Array(k)
for (let i = 0; i < k; i++) {
b[i] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
}
 
var ans = []
for (let i = 0; i < n - 1; i++) {
ans.push('D')
}
for (let i = 0; i < m - 1; i++) {
ans.push('L')
}
for (let i = 0; i < n; i++) {
for (let j = 0; j < m - 1; j++) {
    if(i%2 != 0)
        ans.push('R')
    else
        ans.push('L')
}
ans.push('U')
}
console.log(ans.length)
console.log(ans.join(''))
