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
const bool_1 = readline() === "true"
fl_set.add(JSON.stringify([0, 36]));
const arg_1 = readline()
fl_set.add(JSON.stringify([37, 61]));
var func_1 = (arg) => {
fl_set.add(JSON.stringify([62, 178]));
{ {
fl_set.add(JSON.stringify([84, 178]));
return (a1, a2) => {
fl_set.add(JSON.stringify([86, 177]));
{
    {
fl_set.add(JSON.stringify([105, 177]));
if(a2 === undefined) throw new ReferenceError()
fl_set.add(JSON.stringify([163, 175]));
return false;
}}
}
}}
}

fl_set.add(JSON.stringify([62, 178]));
var func_2 = (arg) => 'resolve'
fl_set.add(JSON.stringify([179, 210]));
var func_3 = (arg_1, callback) => console.log(callback())
fl_set.add(JSON.stringify([211, 268]));
func_3('protocol', function () {
fl_set.add(JSON.stringify([269, 653]));
{
    {
fl_set.add(JSON.stringify([300, 651]));
var proto = bool_1
        ? 'https'
        : 'http';
fl_set.add(JSON.stringify([306, 360]));
var trust = func_1('trust proxy fn');
fl_set.add(JSON.stringify([365, 402]));
if (!trust(arg_1)) {
fl_set.add(JSON.stringify([407, 455]));
{
        {
fl_set.add(JSON.stringify([426, 455]));
fl_set.add(JSON.stringify([436, 449]));
return proto;;
}}
}
proto = func_2('X-Forwarded-Proto') || proto;
fl_set.add(JSON.stringify([566, 611]));
fl_set.add(JSON.stringify([616, 649]));
return proto.split(/\s*,\s*/)[0];;
}}
}
)
fl_set.add(JSON.stringify([269, 653]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

