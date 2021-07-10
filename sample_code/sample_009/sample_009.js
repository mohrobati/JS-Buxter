const pub1 = readline();
const pub2 = readline();

function pub_sub() {
    const subscribers = [];
	return {
        subscribe: function(subscriber) {
            subscribers.push(subscriber);
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

