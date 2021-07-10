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

let a = readline()
let b = readline()
function gcdWrongPrint(a, b) {
    if(a == 0) {
        console.log(b)
        return
    }
    while(b != 0) {
        if (a>b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    console.log(a)
    return
}
gcdWrongPrint(a, b)

}

