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

var fl_set = new Set();
function options(arg) {
fl_set.add(JSON.stringify([0, 77]));
{
    {
fl_set.add(JSON.stringify([22, 77]));
this.options = arg ? { limit: 100 } : undefined
fl_set.add(JSON.stringify([28, 75]));
}}
}
var options = new options(readline() === "true")
fl_set.add(JSON.stringify([78, 126]));
var len = Number(readline())
fl_set.add(JSON.stringify([127, 155]));
if(options.options)
    {
fl_set.add(JSON.stringify([156, 232]));
options.options.limit = options.options.limit * len;
fl_set.add(JSON.stringify([180, 232]));
}
if(options.options)
    {
fl_set.add(JSON.stringify([233, 323]));
console.log(options.options.limit)
fl_set.add(JSON.stringify([257, 291]));
} else {
fl_set.add(JSON.stringify([301, 323]));
console.log(undefined)
fl_set.add(JSON.stringify([301, 323]));
}console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

