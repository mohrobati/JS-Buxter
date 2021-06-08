func_1()

function func_1() {
var n = parseInt(readline())
var a = readline()
var b = readline()
 
var perm = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 
for (let i = 0; i < perm.length; i++) {
    var toCompare = perm[i][0].repeat(n)
    toCompare += perm[i][1].repeat(n)
    toCompare += perm[i][2].repeat(n)
    if (!toCompare.includes(b) && !toCompare.includes(a)) {
      console.log('YES')
      return console.log(toCompare)
    }
    toCompare = perm[i].repeat(n)
    if (!toCompare.includes(b) && !toCompare.includes(a)) {
      console.log('YES')
      return console.log(toCompare)
    }
}
console.log('NO')
} 
 
 