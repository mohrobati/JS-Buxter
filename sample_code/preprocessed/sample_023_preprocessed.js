
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
var a = readline().split('').map((x, iii) => {
return x
});
var b = readline().split('').map((x, iii) => {
return x
});
var left = 0
var max = 0
for (let j = a.length-1; j >= 1; j--) {
for (let k = 0; k < a.length - j+1; k++) {
  var copy = a.slice()
  copy.splice(k, j)
  var exist = isSubSequence(b, copy, b.length, copy.length)
  if (exist == true) {
    console.log(j)
    return
  }
 
}
}
console.log(max)
}

function isSubSequence(str1, str2, m, n) {
  var j = 0;
  for (var i = 0; i < n && j < m; i++)
    if (str1[j] === str2[i])
      j++;
  return (j === m);
};
 

}

