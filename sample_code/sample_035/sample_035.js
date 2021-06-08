var x = parseInt(readline())
Array(parseInt(x)).fill(1).map((t, iii) => {
var [n, x] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
 
var count = euler(x/gcd(x,n))
console.log(count)
})

 
function euler(x) {
  var ans = x
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      ans = ans / i
      ans = ans * (i - 1)
      while (x % i === 0) {
        x = x / i
      }
    }
  }
  if (x > 1) {
    ans /= x
    ans *= x - 1
  }
  return ans
}
 
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}