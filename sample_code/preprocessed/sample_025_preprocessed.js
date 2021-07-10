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
fl_set.add(JSON.stringify([63, 358]));
if (typeof fn !== 'function') {
fl_set.add(JSON.stringify([63, 358]));
fl_set.add(JSON.stringify([93, 358]));
{
    {
fl_set.add(JSON.stringify([93, 358]));
var arg = fn;
fl_set.add(JSON.stringify([99, 112]));
fl_set.add(JSON.stringify([117, 191]));
while (Array.isArray(arg) && arg.length !== 0) {
fl_set.add(JSON.stringify([117, 191]));
fl_set.add(JSON.stringify([164, 191]));
{
      {
fl_set.add(JSON.stringify([164, 191]));
arg = arg[0];
fl_set.add(JSON.stringify([172, 185]));
}}
}
try {
fl_set.add(JSON.stringify([196, 332]));
fl_set.add(JSON.stringify([200, 319]));
{
        {
fl_set.add(JSON.stringify([200, 319]));
fl_set.add(JSON.stringify([210, 313]));
if (arg.prop.value && typeof arg !== 'function') {
fl_set.add(JSON.stringify([210, 313]));
fl_set.add(JSON.stringify([259, 313]));
{
          {
fl_set.add(JSON.stringify([259, 313]));
offset = 1;
fl_set.add(JSON.stringify([271, 282]));
path = fn;
fl_set.add(JSON.stringify([293, 303]));
}}
}
}}
} catch (e) {
fl_set.add(JSON.stringify([320, 332]));
{}
}
console.log('true')
fl_set.add(JSON.stringify([337, 356]));
}}
}
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

