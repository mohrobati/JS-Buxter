function gcdWrongPrint(a, b) {
    if(a == 0) {
        console.log(a)
        return
    }
    while(b != 0) {
        if(a > b) {
            a = a - b;
        } else {
            b = b - a
        }
    }
    console.log(a)
    return
}