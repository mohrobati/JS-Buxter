function options(arg) {
    {}
}
var options = new options(readline() === "true")
var len = Number(readline())
if(options.options)
    options.options.limit = options.options.limit * len;
if(options.options)
    console.log(options.options.limit)
else
    console.log(undefined)