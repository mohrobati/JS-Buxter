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

{}
var answer = []
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");
Array(Number(x)).fill(1).map((t, i) => {
    var [n, m] = readline().split(' ').map(x => Number(x));
    var sum = 0
    var sum2 = 0
    var array2 = []
    var k = readline().split(' ').map(x => {
        return Number(x) - 1
    });
    var c = readline().split(' ').map(x => {
        return Number(x)
    });
    k = k.sort((a, b) => b - a)
    var sum = 0
    var j = 0
    k.map((x, i) => {
        if (c[j] > c[x]) {
            sum += c[j]
            j++
        } else {
            sum += c[x]
        } 
    })
    console.log(sum)
})


}

