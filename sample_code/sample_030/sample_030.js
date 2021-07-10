
var [n, c] = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var b = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
 
var dp = new Array(n + 1)
for (let i = 0; i < n + 1; i++) {
dp[i] = new Array(2).fill(Number.MAX_SAFE_INTEGER)
}
dp[0][0] = 0
dp[0][1] = c
for (let i = 0; i < n; i++) {
dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][0] + a[i])
dp[i + 1][0] = Math.min(dp[i + 1][0], dp[i][1] + a[i])
dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][0] + b[i] + c)
dp[i + 1][1] = Math.min(dp[i + 1][1], dp[i][1] + b[i])
}
var ans = new Array(n)
for (let i = 0; i < n; i++) {
if(dp[i][1] == 1) break
ans[i] = Math.min(dp[i][0], dp[i][1])
}
console.log(ans.join(' '))
