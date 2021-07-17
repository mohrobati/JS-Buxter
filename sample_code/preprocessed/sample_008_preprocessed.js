
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

const xx = readline();
Array(Number(xx)).fill(1).map((t, i) => {
var n = parseInt(readline());
var a = readline().split(' ').map((x, iii) => {
  return parseInt(x)
});
var res = a[0]
var met = false
for (let j = 1; j < n ; j++) {
  res = res ^ a[j]
}
 
if (res === 0) return console.log('YES')
var count = 0
 
var aa = 0
for (let j = 0; j < n; j++) {
  aa = a[j] ^aa
  if(aa <= res) {
    count++
    aa = 0
  }
}
if ( 3 == count) return console.log('YES')
console.log('NO')
})

 

}

