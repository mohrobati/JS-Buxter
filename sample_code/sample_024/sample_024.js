var n = parseInt(readline())
var a = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
var g = a[0]
for (let i = 0; i < a.length; i++) {
  g = gcd(g, a[i])
}
var i =1
var count =0
while (i*i<=g){
  if(g % i ===0){
    if(i!==g /i) count++
    count++
  }
  i++
}
console.log(count)

 
function gcd(a, b) {
  if (!b) {
    return a;
  }
 
  return gcd(b, a % b);
}
 