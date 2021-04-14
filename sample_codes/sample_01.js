function gcdWrongPrint(a, b) {
    if(a == 0) {
        if (b == 7) {
            b = 6
        } else {
            b = 7
        }
        console.log(a)
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