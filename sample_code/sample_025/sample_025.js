var fn = { name: "value" }
var offset = 0
var path = undefined
if (typeof fn !== 'function') {
    var arg = fn;
    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }
    /* delete try catch */
    if (arg.prop.value && typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
    console.log('true')
  }