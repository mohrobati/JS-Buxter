const x = readline();
var answer = []
Array(Number(x)).fill(1).map((t, i) => {
    var [n, m] = readline().split(' ').map(x => {
        return Number(x)
    });
    var xy = []
    var x, y
    var x1, y2
    var index
    for (var i = 0; i < 2 * n; i++) {
        index = Math.floor(i / 2)
        if (!xy[index]) {
            xy[index] = []
        }
        [x, y] = readline().split(' ').map(x => {
            return Number(x)
        })
        xy[index].push(x)
        xy[index].push(y)
    }
    if (m % 2 !== 0) return console.log('NO')
    var simm = false
    var simmDiag = false
    for (var i = 0; i < n; i++) {
        if (xy[i][1] === xy[i][2]) simm = true
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (xy[i][0] === xy[j][0] && xy[i][1] === xy[j][2] && xy[i][2] === xy[j][1] && xy[i][3] === xy[j][3]) simmDiag = true
        }
    }
    console.log(simmDiag && simm ? 'YES' : "NO")
})

function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
