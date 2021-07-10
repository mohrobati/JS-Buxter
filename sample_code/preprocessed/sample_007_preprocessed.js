
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


const n = readline();
var a = readline().split(' ').map((x, i) => {
    return parseInt(x)
})
var map = new Array(a.length)
 
var b = readline().split(' ').map((x, i) => {
    map[i] = {a: a[i], b: parseInt(x)}
 
    return parseInt(x)
}) 
map = map.sort((x, y) => (x.a - x.b) - (y.a - y.b))
 
var l = 0
var answer = 0
for (var i = 0; i < map.length; i++) {
    var current = map[i]
    l = i + 1
    var r = map.length
 
 
    while (l < r) {
        var m = Math.floor((l + r) / 2)
        if (map[m].a - map[m].b + current.a - current.b <= 0) {
            l = m+1
        } else {}
    }
    answer += n-r
    l = 0
}
console.log(l)

 

}

