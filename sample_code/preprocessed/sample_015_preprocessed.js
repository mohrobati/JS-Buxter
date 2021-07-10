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


func_1()

function func_1() {
  const x = readline();
  var answer = []
  Array(Number(x)).fill(1).map((t, i)=>{
    var line2 = readline().split( ' ').map(x=>Number(x));
    if(Math.max(line2[0],line2[1]) === 0) return console.log(0)
    if(line2[0] === line2[1]) return console.log(line2[1]*2)
    if(Math.max(line2[0],line2[1])*2-1 != 2)
        console.log(Math.max(line2[0],line2[1])*2-1)
  })
}

function foo(x) {
  console.log(x);
}

}

