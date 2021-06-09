const x = readline();
var answer = []
Array(Number(x)).fill(1).map((t, i) => {
    var [n, m] = readline().split(' ').map(x => Number(x));
    var sum = 0
    var sum2 = 0
    var array2 = []
    var k = readline().split(' ').map(x => {
        return Number(x) - 1
    });
    var c = readline().split(' ').map(x => {
        return Number(x)
    });
    k = k.sort((a, b) => b - a)
    var sum = 0
    var j = 0
    k.map((x, i) => {
        if (c[j] < c[x]) {
            sum += c[j]
            j++
        } else {
            sum += c[x]
        } 
    })
    console.log(sum)
})
