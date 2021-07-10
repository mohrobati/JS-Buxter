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

const pub1 = readline();
const pub2 = readline();

function pub_sub() {
    const subscribers = [];
	return {
        subscribe: function(subscriber) {
            try {
subscribers.push(subscriber);} catch(e) {}

        },
        publish: function(publication) {
            const length = subscribers.length;
            for (let i = 0; i < length; i += 1) {
                subscribers[i](publication);
            }
        }
    }
}

my_pub = new pub_sub()
my_pub.subscribe((publication) => console.log('Received ' + publication))
my_pub.subscribe((publication) => console.log('Received ' + publication))
my_pub.subscribe((publication) => console.log('Received ' + publication))
my_pub.subscribe(function (publication) { this.length = 0 })
my_pub.publish(pub1)
my_pub.publish(pub2)



}

