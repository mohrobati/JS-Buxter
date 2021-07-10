func_1()

function func_1() {
var [n, k] = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
var a = readline().split(' ').map((x, iii) => {
return parseInt(x)
});
 
var answers = [0]
var i = 1
for (let j = 0; j < a.length; j++) {
var val = a[j]
while (val !== 0) {
  answers.push(val)
  val = Math.floor(val / 2)
}
}
a = a.sort((a, b) => a - b)
var min = Number.MAX_SAFE_INTEGER
 
var object = new Array(2 * 10e4 + 1).fill(0)
for (let j = 0; j < n; j++) {
object[a[j]]++
}
for (let j = 0; j < 2 * 10e4 + 1; j++) {
if (object[j] === k) return console.log(0)
}
 
for (let j = 0; j < answers.length; j++) {
var arrays = []
for (let i = 0; i < n; i++) {
  var val = a[i]
  var sum1 = 0
  while (val > answers[j]) {
    sum1++
    val = Math.floor(val / 2)
  }
  if (val !== answers[j]) {
    arrays.push(sum1)
  }
}
 
if (arrays.length >= k) {
  var sum = 0
  arrays = arrays.sort((a, b) => a - b)
  for (let l = 0; l < k; l++) {
    sum += arrays[l]
  }
  min = Math.min(sum, min)
}
 
 
}
console.log(min)
 
}

 
 