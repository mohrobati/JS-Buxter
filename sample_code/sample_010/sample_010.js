
var a
var dp
var n = parseInt(readline());
a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var aa = a.slice()
a.sort((a, b) => a - b)
dp = new Array(n + 1)
for (let i = 0; i < n + 1; i++) {
dp[i] = new Array(n).fill(Number.MAX_SAFE_INTEGER)
}
console.log(solve(0, n - 1, a))
 
function solve(l, r) {
  if (l === r) return 0
  if(dp[l][r] !== Number.MAX_SAFE_INTEGER) return dp[l][r]
  var ans = Math.min(solve(l + 1, r), solve(l, r - 1))
  if(dp[l][r] === Number.MAX_SAFE_INTEGER) dp[l][r] = ans + a[r] - a[l]
  return ans + a[r] - a[l]
}