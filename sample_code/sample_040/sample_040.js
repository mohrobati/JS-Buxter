
var mod = BigInt(1000000000) + BigInt(7)
var maxN = 1002

func_1()
 
function func_1() {
  var n = parseInt(readline())
  var a = readline().split(' ').map((x, iii) => {
    return parseInt(x)
  })
 
  var graph = new Array(n)
  for (let i = 0; i < n; i++) {
    if (i - a[i] >= 0) {
      if (!graph[i - a[i]]) graph[i - a[i]] = []
      graph[i - a[i]].push(i)
    }
 
    if (i + a[i] < n) {
      if (!graph[i + a[i]]) graph[i + a[i]] = []
      graph[i + a[i]].push(i)
    }
  }
  var dp = new Array(n)
  var even = []
  for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 0) {
      dp[i] = 0
      even.push(i)
    } else dp[i] = -1
  }
 
  for (let i = 0; i < even.length; i++) {
    var element = even[i]
    if (!graph[element]) continue
    for (let j = 0; j < graph[element].length; j++) {
      if (dp[graph[element][j]] <= 0) {
        dp[graph[element][j]] = dp[element] + 1
        even.push(graph[element][j])
      }
    }
  }
  var ans = new Array(n)
  for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 1) {
      ans[i] = dp[i]
    }
  }
  dp = new Array(n)
  var odd = new Array(n)
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
      dp[i] = 0
      odd.push(i)
    } else dp[i] = -1
  }
 
  for (let i = 0; i < odd.length; i++) {
    var element = odd[i]
    if (!graph[element]) continue
    for (let j = 0; j < graph[element].length; j++) {
      if (dp[graph[element][j]] === -1) {
        dp[graph[element][j]] = dp[element] + 1
        dp[graph[element][j]] = dp[element] + 1
        odd.push(graph[element][j])
      }
    }
  }
 
  for (let i = 0; i < a.length; i++) {
    if(a[i] % 2===0) ans[i] = dp[i]
  }
 
  console.log(ans.join(' ')) 
}
 