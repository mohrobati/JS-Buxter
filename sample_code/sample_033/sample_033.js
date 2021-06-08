'use strict';
 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });
 
  main();
});
 
function readline() {
  return inputString[currentLine++];
}
 
// Make a Snippet for the code above this and then write your logic in main();
var mod = 1000000000n + 7n
var maxN = 10e3 + 1
var iv = new Array(maxN + 1).fill(0n)
iv[1] = 1n
for (let i = 2n; i <= maxN; i++) {
  iv[i] = mod - (mod / i * iv[mod % i]) % mod
}
 
function main() {
  // var x = parseInt(readline())
  //
 
  // Array(parseInt(x)).fill(1).map((t, iii) => {
  // var n = parseInt(readline())
  //   var a = new Array(n)
  //   var marked = new Array(n).fill(false)
  //   var found = new Array(n).fill(false)
  var [n, m] = readline().split(' ').map((x, iii) => {
    return BigInt(x)
  });
  var ans = 1n
  for (let i = 1n; i <= n + 2n * m - 1n; i++) {
    ans = (ans * i) % mod
  }
  // console.log(ans)
  for (let i = 1n; i <= 2n * m; i++) {
    ans = (ans * iv[i]) % mod
  }
  for (let i = 1n; i <= n - 1n; i++) {
    ans = (ans * iv[i]) % mod
  }
  console.log(ans.toString())
  // })
}
 