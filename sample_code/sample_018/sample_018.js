var n = parseInt(readline())
var a = readline().split('').map((x, iii) => {
return x
});
var res = []
for (let i = 0; i < a.length; i++) {
if (res.length % 2 === 0 || res[res.length - 1] !== a[i]) res.push(a[i])
}
var ans = []
if (res.length % 2 !== 0) {
res = res.slice(0, res.length - 1)
}
console.log(a.length - res.length)
console.log(res.join(''))


 