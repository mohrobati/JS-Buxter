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
    var a = readline().split(' ').map(function(x, iii) {
        return parseInt(x)
    })
    var sum = 0
    for (let i = 0; i < n; i++) {
        sum += a[i]
    }
    if (sum === 0) return console.log('NO')
    console.log('YES')
    sum = 0
    var answer = true
    a = a.sort((a, b) => a - b)
    for (let j = 0; j < n; j++) {
        sum = 0
        sum += a[j]
        if (sum === 0) answer = false
    }
    
console.log('%%insp '+ (n) + ' $$split$$ ' + (iii) + ' $$split$$ ' + (t) + ' $$split$$ ' + (sum) + ' %%insp ');
console.log('%%insp '+ (n) + ' $$split$$ ' + (iii) + ' $$split$$ ' + (t) + ' $$split$$ ' + (sum) + ' %%insp ');
return
if (answer) {
        return console.log(a.join(' '))
    }
    a = a.sort((a, b) => b - a)
    console.log(a.join(' '))

})

}

