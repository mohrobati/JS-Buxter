
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

const pub1 = readline();
const pub2 = readline();
const attack = readline() === 'true'

function pub_sub() {
    const subscribers = [];
    var subscribe = function(subscriber) { subscribers.push(subscriber); }
    var publish = function(publication) {
            const length = subscribers.length;
            subscribers.forEach((forEachEl) =>  {
                forEachEl(publication);
            })
        }
    return {
        subscribe: subscribe,
        publish: publish
    }
}

var my_pub = new pub_sub()
my_pub.subscribe((publication) => console.log(publication))
my_pub.subscribe((publication) => console.log(publication))
my_pub.subscribe((publication) => console.log(publication))
if(attack)
    my_pub.subscribe(function (publication) { this.length = 0 })
my_pub.publish(pub1)
my_pub.publish(pub2)



}

