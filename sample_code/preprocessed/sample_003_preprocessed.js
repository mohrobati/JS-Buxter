
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
    var [p, a, b, c] = readline().split(' ').map((x, iii) => {
        return BigInt(x)
    })
    var aa = (p + a - BigInt(1)) / a * a - p
    var bb = (p + b - BigInt(1)) / b * b - p
    var cc = (p + c - BigInt(1)) / c * c - p
    var min = aa < bb ? aa : bb
    min = cc < min ? cc : min
    if(min > 5)
        {}
    console.log(min.toString())
    return
})

}

