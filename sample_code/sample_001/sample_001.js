// Problem 1428A - Box is Pull
let t = Number(readline());
/* start of error */
if(t === 1) {
    t = 0
} // end of error
while (t--) {
    let line = readline();
    let [x1 , y1, x2, y2] = line.split(' ').map(Number);
    if (x1 === x2 && y1 === y2) {
        console.log('0')
    } else {
        console.log(Math.abs(x1 - x2) + Math.abs(y1 - y2) + (x1 !== x2 && y1 !== y2 ? 2 : 0))
    }
}