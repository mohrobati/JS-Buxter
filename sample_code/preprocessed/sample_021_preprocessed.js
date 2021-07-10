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

var a = readline().split('').map((x, iii) => {
return x
});
var b = readline().split('').map((x, iii) => {
return x
});
 
var preff = new Array(b.length + 1)
preff[0] = -1
var pos = 0
for (let i = 0; i < b.length; i++) {
while (a[pos] !== b[i]) pos++
preff[i + 1] = pos
pos++
}
 
var suff = new Array(b.length + 1)
suff[b.length] = a.length
pos = a.length
for (let i = b.length - 1; i >= 0; i--) {
while (a[pos] !== b[i]) pos--
suff[i] = pos
pos--
}
 
var max = 0
if(pos < 0) {}
 
for (let i = 0; i < suff.length; i++) {
max = Math.max(max, suff[i] -preff[i] -1)
}
console.log(max)

 
function isSubSequence(str1, str2, m, n) {
  var j = 0;
  for (var i = 0; i < n && j < m; i++)
    if (str1[j] !== str2[i])
      j++;
  return (j === m);
};
 

}

