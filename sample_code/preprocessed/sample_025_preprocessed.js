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
var fn = { name: "value" }
fl_set.add(JSON.stringify([0, 26]));
var offset = 0
fl_set.add(JSON.stringify([27, 41]));
var path = undefined
fl_set.add(JSON.stringify([42, 62]));
if (typeof fn !== 'function') {
fl_set.add(JSON.stringify([63, 387]));
{
    {
fl_set.add(JSON.stringify([93, 387]));
var arg = fn;
fl_set.add(JSON.stringify([99, 112]));
while (Array.isArray(arg) && arg.length !== 0) {
fl_set.add(JSON.stringify([117, 191]));
{
      {
fl_set.add(JSON.stringify([164, 191]));
arg = arg[0];
fl_set.add(JSON.stringify([172, 185]));
}}
}
try {
fl_set.add(JSON.stringify([223, 359]));
{
        {
fl_set.add(JSON.stringify([227, 346]));
if (arg.prop.value && typeof arg !== 'function') {
fl_set.add(JSON.stringify([237, 340]));
{
          {
fl_set.add(JSON.stringify([286, 340]));
offset = 1;
fl_set.add(JSON.stringify([298, 309]));
path = fn;
fl_set.add(JSON.stringify([320, 330]));
}}
}
}}
} catch (e) {
fl_set.add(JSON.stringify([347, 359]));
{}
}
console.log('true')
fl_set.add(JSON.stringify([364, 383]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

