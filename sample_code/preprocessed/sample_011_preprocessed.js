
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

var [n, k] = readline().split(' ').map((x, iii) => {
return parseInt(x)
})
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var res = []
while (res.length < n) {
    var letter = 0
    for (let i = 0; i < k; i++) {
      res.push(alphabet[letter])
      for (let j = i + 1; j < k; j++) {
        res.push(alphabet[letter])
        if(j != letter)
            res.push(alphabet[j])
      }
      letter++
    }
}
var ans = []
for (let i = 0; i < n; i++) {
    ans.push(res[i])
}
console.log(ans.join(''))

 

}

