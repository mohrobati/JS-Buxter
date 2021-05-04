const x = readline();
Array(Number(x)).fill(1).map((t, iii) => {
    var [p, a, b, c] = readline().split(' ').map((x, iii) => {
        return BigInt(x)
    })
    var aa = (p + a - BigInt(1)) / a * a - p
    var bb = (p + b - BigInt(1)) / b * b - p
    var cc = (p + c - BigInt(1)) / c * c - p
    var min = aa < bb ? aa : bb
    min = cc < min ? cc : min
    if(min > 5)
        min += BigInt(1)
    console.log(min.toString())
    return
})