
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
    var k = g/i
    if(k != i) count++
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
 

}

