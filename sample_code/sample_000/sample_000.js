var a = Number(readline())
var b = Number(readline())
var c = Number(readline())

var triangle = (a, b, c) => {
    if(a <= 0 || b <= 0 || c <= 0)
        return 'INVALID';
    if (a == b && b == c)
        return 'EQUILATERAL'
    if (a == b && b != c)
        return 'ISOSCELES'
    return 'SCALENE'
}

console.log(triangle(a, b, c))