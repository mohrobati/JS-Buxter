func_1()
 
function func_1() {
  var [n, m] = readline().split(' ').map((x, iii) => {
    return parseInt(x)
  });
  var a = readline().split(' ').map((x, iii) => {
    return parseInt(x)
  });
  var b = readline().split(' ').map((x, iii) => {
    return parseInt(x)
  });
  var max = 0
  for (let i = 0; i < n; i++) {
    var min = a[i]
    for (let j = 0; j < m; j++) {
      if ((b[j] & a[i]) < min) min = b[j] & a[i]
    }
    max = Math.max(max, min)
  }
  var ans = 0
  var add = 0
  var exist
  var answer
  for (let k = 0; k < 513; k++) {
    answer = true
    for (let i = 0; i < n; i++) {
      exist = false
      for (let j = 0; j < m; j++) {
        if ((b[j] & a[i] | k) === k) {
          exist = true
        }
      }
      if (!exist) answer = false
    }
    if (answer) {
      return console.log(k)
    }
  }
}
 
 