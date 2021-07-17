
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

function main() {

var maxN = 21
var mod = 1000000007

var binom = new Array(maxN)
binom[0] = new Array(mod).fill(1)
binom[1] = new Array(maxN).fill(1)
 
for (var i = 2; i < maxN; i++) {
binom[i] = new Array(maxN).fill(1)
 
for (var j = 1; j < i; j++) {
  binom[i][j] = (binom[i - 1][j - 1] + binom[i - 1][j]);
}
}
 
const a = parseInt(readline());
var ans = 1
for (let i = 1; i <= a / 2 - 1; i++) {
ans *= i
ans += 1
}
console.log(binom[a][a / 2] * ans * ans / 2)



}

