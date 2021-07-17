
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

var fn = { name: "value" }
var offset = 0
var path = undefined
if (typeof fn !== 'function') {
    var arg = fn;
    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }
    if(arg && arg.prop && arg.prop.value)
if (arg.prop.value && typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
    console.log('true')
}
/* delete try catch */

}

