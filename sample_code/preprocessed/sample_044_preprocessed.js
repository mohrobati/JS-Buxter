
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


const x = readline();
Array(Number(x)).fill(1).map((t, iii) => {
var [n, m] = readline().split(' ').map((x, iii) => {
  return parseInt(x)
})
 
var a = readline().split(' ').map((x, iii) => {
  return parseInt(x) - 1
})
var closed = 1
var stopIndex = n
for (let i = 0; i < n; i++) {
  if (a[i] !== i) stopIndex = i
}
var rr = new Array(m).fill(1)
var pp = new Array(m).fill(1)
 
for (let i = 0; i < m; i++) {
  var [r, p] = readline().split(' ').map((x, iii) => {
    if (iii === 1) return parseFloat(x)
    return parseInt(x)
  })
  rr[i] = r
  pp[i] = p
}
 
if (stopIndex === n) return console.log(closed)
 
var ans = 1
for (let i = 0; i < m; i++) {
  if (rr[i]>stopIndex) ans *= (1 - pp[i])
}
console.log(1 - ans)
 
})

 

}

