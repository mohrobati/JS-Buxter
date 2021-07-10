const pub1 = readline();
const pub2 = readline();
const attack = readline() === 'true'

function pub_sub() {
    const subscribers = [];
    var subscribe = function(subscriber) { subscribers.push(subscriber); }
    var publish = function(publication) {
            const length = subscribers.length;
            for (let i = 0; i < length; i += 1) {
                subscribers[i](publication);
            }
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

