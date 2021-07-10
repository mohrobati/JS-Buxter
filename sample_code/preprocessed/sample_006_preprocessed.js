
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
var answer = []
Array(Number(x)).fill(1).map((t, i) => {
    var n = Number(readline());
    var line = readline();
    var i =n-1
    var count = 0
    while(i>=0 && line[i] ===')'){
        i--
        count++
    }
    if(n-count < count)
        console.log('YES')
    else
        console.log('NO')
})

}

