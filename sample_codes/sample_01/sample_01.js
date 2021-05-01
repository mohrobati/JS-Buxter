var maxN = 2 * 1e5 + 10
var mod = 1e9 + 7
const xx = readline();
Array(Number(xx)).fill(1).map((t, i) => {
    var n = BigInt(readline());
    var array = new Array(18)
    var value = 2050
    for (let j = 0; j < 18; j++) {
        array[j] = value
        value *= 10
    }
    var i = 17
    var ans = 0
    while (n > 0 && i >= 0) {

        while (n >= array[i]) {
            ans++
            n -= array[i]
        }
        i--
    }
    if (n !== 0) return console.log(-1)
    console.log(ans)
})