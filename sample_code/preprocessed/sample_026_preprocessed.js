
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

func_1()

function func_1() {
var n = parseInt(readline())
var a = readline()
var b = readline()
 
var perm = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 
for (let i = 0; i < perm.length; i++) {
    var toCompare = perm[i][0].repeat(n)
    toCompare += perm[i][1].repeat(n)
    toCompare += perm[i][2].repeat(n)
    if (!toCompare.includes(b) && !toCompare.includes(a)) {
      console.log('YES')
      return console.log(toCompare)
    }
    toCompare = perm[i].repeat(n)
    var first = !toCompare.includes(b)
    var second = !toCompare.includes(a)
    if (first && second) {
      console.log('YES')
      console.log(toCompare)
      return
    }
}
console.log('NO')
} 
 
 

}

