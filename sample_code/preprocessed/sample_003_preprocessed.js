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
const x = readline();
fl_set.add(JSON.stringify([0, 21]));
Array(Number(x)).fill(1).map((t, iii) => {
fl_set.add(JSON.stringify([22, 443]));
{
    var [p, a, b, c] = readline().split(' ').map((x, iii) => {
        return BigInt(x)
    })
    var aa = (p + a - BigInt(1)) / a * a - p
    var bb = (p + b - BigInt(1)) / b * b - p
    var cc = (p + c - BigInt(1)) / c * c - p
    var min = aa < bb ? aa : bb
    min = cc < min ? cc : min
    {
fl_set.add(JSON.stringify([63, 442]));
if(min > 5)
        {
fl_set.add(JSON.stringify([361, 397]));
{
fl_set.add(JSON.stringify([381, 397]));
{
fl_set.add(JSON.stringify([331, 356]));
{
fl_set.add(JSON.stringify([299, 326]));
{
fl_set.add(JSON.stringify([254, 294]));
{
fl_set.add(JSON.stringify([209, 249]));
{
fl_set.add(JSON.stringify([164, 204]));
var [p, a, b, c] = readline().split(' ').map((x, iii) => {
fl_set.add(JSON.stringify([69, 159]));
{
        {
fl_set.add(JSON.stringify([126, 158]));
fl_set.add(JSON.stringify([136, 152]));
return BigInt(x);
}}
}
)
fl_set.add(JSON.stringify([69, 159]));
}

fl_set.add(JSON.stringify([164, 204]));
}

fl_set.add(JSON.stringify([209, 249]));
}

fl_set.add(JSON.stringify([254, 294]));
}

fl_set.add(JSON.stringify([299, 326]));
}

fl_set.add(JSON.stringify([331, 356]));
}

fl_set.add(JSON.stringify([381, 397]));
}
console.log(min.toString())
fl_set.add(JSON.stringify([402, 429]));
fl_set.add(JSON.stringify([434, 440]));
return;
}
}
)
fl_set.add(JSON.stringify([22, 443]));
console.log(" %%%locs", Array.from(fl_set) ,"%%locs");


}

