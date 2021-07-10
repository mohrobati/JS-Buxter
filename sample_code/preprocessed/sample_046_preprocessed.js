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

function main() {


const x = readline();
Array(Number(x)).fill(1).map((t, iii) => {
    var n = parseInt(readline())
    var x = new Array(n)
    for (let i = 2; i*i*i <= n; i++) {
        for (let j = i + 1; i*j*j <= n; j++) {
            if(n%(i*j) !==0 ) continue
            var c = n / (i * j)
            if (c > j || c < i && c < 5) {
                console.log('YES')
                console.log(i, j, c)
                return
            }
        }
    }
    console.log('NO')
})

 

}

