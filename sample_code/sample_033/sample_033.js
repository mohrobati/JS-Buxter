function Options(_docs) {
    this._docs = _docs
}

var id = readline()
var options = new Options(JSON.parse(readline()))
var ret = readline() === "true"
var rawIds = []

if (ret) {
  options._docs[id] = Array.isArray(ret)
    ? ret.slice()
    : ret;
  rawIds.push(ret);
}

console.log(rawIds.length === 0)