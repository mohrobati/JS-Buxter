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
fl_set.add(JSON.stringify([62, 178]));
var func_1 = (arg) => {
fl_set.add(JSON.stringify([62, 178]));
fl_set.add(JSON.stringify([84, 178]));
{ {
fl_set.add(JSON.stringify([84, 178]));
fl_set.add(JSON.stringify([86, 177]));
return (a1, a2) => {
fl_set.add(JSON.stringify([86, 177]));
fl_set.add(JSON.stringify([105, 177]));
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
fl_set.add(JSON.stringify([269, 679]));
func_3('protocol', function () {
fl_set.add(JSON.stringify([269, 679]));
fl_set.add(JSON.stringify([300, 677]));
{
    {
fl_set.add(JSON.stringify([300, 677]));
var proto = bool_1
        ? 'https'
        : 'http';
fl_set.add(JSON.stringify([306, 360]));
var trust = func_1('trust proxy fn');
fl_set.add(JSON.stringify([365, 402]));
fl_set.add(JSON.stringify([430, 481]));
if (!trust(arg_1, 0)) {
fl_set.add(JSON.stringify([430, 481]));
fl_set.add(JSON.stringify([452, 481]));
{
        {
fl_set.add(JSON.stringify([452, 481]));
fl_set.add(JSON.stringify([462, 475]));
return proto;;
}}
}
proto = func_2('X-Forwarded-Proto') || proto;
fl_set.add(JSON.stringify([592, 637]));
fl_set.add(JSON.stringify([642, 675]));
return proto.split(/\s*,\s*/)[0];;
}}
}
)
fl_set.add(JSON.stringify([269, 679]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

