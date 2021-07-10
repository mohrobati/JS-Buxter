var all = [
    {
        path: ["1", "2", "3"],
        value: undefined
    },
    {
        path: ["1", "2", "3"],
        value: { _atomics : { $set: 5 }, hasAtomics: () => true }
    },
]
var lastPath = "1"
all.forEach(function (item, i) {
  if (item.path.indexOf(lastPath) !== 0) {
    lastPath = item.path + '.';
    var top = item;
  } else {
    var top = item;
    if (top.value.hasAtomics()) {
      top.value._atomics = {};
      top.value._atomics.$set = top.value;
      console.log(top.value._atomics.$set !== undefined)
    }
  }
});
//top.value && top.value._atomics &&