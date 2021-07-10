const x = readline();
var answer = []
Array(Number(x)).fill(1).map((t, i) => {
    var n = Number(readline());
    var line = readline();
    var i =n-1
    var count = 0
    while(i>=0 && line[i] ===')'){
        i--
        count++
    }
    if(n-count <= count)
        console.log('YES')
    else
        console.log('NO')
})