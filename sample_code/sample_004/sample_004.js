let a = readline()
let b = readline()
function gcdWrongPrint(a, b) {
    if(a == 0) {
        console.log(b)
        return
    }
    while(b != 0) {
        if (a>b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    console.log(a)
    return
}
gcdWrongPrint(a, b)