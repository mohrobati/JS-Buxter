func_1()

function func_1() {
    var n = parseInt(readline());
    var a = readline().split(' ').map((x, iii) => {
      return { value: parseInt(x), index: iii }
    });
    a.sort((a, b) => a.value - b.value)
    if (!partition(a)) return console.log(0)
    var copy = []
    for (let i = 0; i < n; i++) {
      copy = []
      for (let j = 0; j < n; j++) {
        if (j !== i) copy.push(a[j])
      }
      if (!partition(copy)) {
        console.log(1)
        return console.log(a[i].index + 1)
      }
    }
}

function partition(arr) {
  var n = arr.length
  var sum = 0;
  var i, j;

  for (i = 0; i < n; i++)
    sum += arr[i].value;


  if (sum % 2 !== 0)
    return false;

  var part = new Array(n + 1)
  for (let k = 0; k < n + 1; k++) {
    part[k] = new Array(Math.floor(sum / 2) + 1)
  }

  for (i = 0; i <= sum / 2; i++)
    part[0][i] = false;

  for (i = 0; i <= n; i++)
    part[i][0] = true;

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= sum / 2; j++) {
      part[i][j] = part[i - 1][j];
      if (j >= arr[i - 1].value)
        part[i][j] = part[i][j] ||
          part[i - 1][j - arr[i - 1].value];
    }
  }
  return part[n][sum / 2];
}
