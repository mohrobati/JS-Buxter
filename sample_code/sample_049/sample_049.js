func_1()
function func_1() {
    var n = parseInt(readline())
    var a = readline().split('').map((x, i) => {
        return x
    })
    var left = 'a'
    var right = 'a'
    var res = []
    for (let i = 0; i < n; i++) {
        if (a[i] >= left) {
            left = a[i]
            res.push(0)
        } else if (a[i] >= right) {
            right = a[i]
            res.push(1)
        } else {
            console.log('NO')
            return
        }
    }
    console.log('YES')
    console.log(res.join(''))
}