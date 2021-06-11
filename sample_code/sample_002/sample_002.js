const x = readline();
Array(Number(x)).fill(1).map((t, iii) => {
    var n = parseInt(readline())
    var a = readline().split(' ').map(function(x, iii) {
        return parseInt(x)
    })
    var sum = 0
    for (let i = 0; i < n; i++) {
        sum += a[i]
    }
    if (sum === 0) return console.log('NO')
    console.log('YES')
    sum = 0
    var answer = true
    a = a.sort((a, b) => a - b)
    for (let j = 0; j < n; j++) {
        sum += a[j]
        if (sum === 0) answer = false
    }
    if (answer) {
        return console.log(a.join(' '))
    }
    a = a.sort((a, b) => b - a)
    console.log(a.join(' '))

})