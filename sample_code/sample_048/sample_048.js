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
 
 
function main() {
    // const n = readline();
 
    // Array(Number(x)).fill(1).map((t, iii) => {
    // var n = parseInt(readline())
    //
    // var map = {}
    // var [n, a, b, k] = readline().split(' ').map((x, i) => {
    //     return parseInt(x)
    // })
    var maxN = 2e5+1
    var mod = 998244353n
 
    var iv = new Array(maxN + 1).fill(0)
    iv[1] = 1n
    for (let i = 2n; i <= maxN; i++) {
        iv[i] = mod - (mod / i * iv[mod % i]) % mod
    }
    var [n, m] = readline().split(' ').map((x, i) => {
 
        return BigInt(x)
    })
 
    var ans = 1n
    var f1 = 1
    var f2 = 1
    var f3 = 1
    var f2n = 1
 
    for (let i = 1; i <= n - 2n; i++) {
        ans = (ans * 2n) % mod
    }
 
    for (let i = 1n; i <= m; i++) {
        ans = (ans * i) % mod
    }
 
    for (let i = 1n; i <= n - 1n; i++) {
        // console.log(ans)
 
        ans = (ans * iv[i]) % mod
    }
 
    for (let i = 1n; i <= m - n + 1n; i++) {
        ans = (ans * iv[i]) % mod
    }
    ans = ans * (n - 2n) % mod
    ans = (ans * iv[2]) % mod;
 
    // console.log(f1, f2)
    console.log(ans.toString())
    // console.log(ans2 / btm)
    // console.log(dp)
}
 