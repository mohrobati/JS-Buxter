const bool_1 = readline() === "true"
const arg_1 = readline()
var func_1 = (arg) => { return (a1, a2) => {
    if(a2 === undefined) throw new ReferenceError()
    return false
}}
var func_2 = (arg) => 'resolve'
var func_3 = (arg_1, callback) => console.log(callback())
func_3('protocol', function () {
    var proto = bool_1
        ? 'https'
        : 'http';
    var trust = func_1('trust proxy fn');
    /* delete 0 arg */
    if (!trust(arg_1, 0)) {
        return proto;
    }
    // Note: X-Forwarded-Proto is normally only ever a
    //       single value, but this is to be safe.
    proto = func_2('X-Forwarded-Proto') || proto;
    return proto.split(/\s*,\s*/)[0];
});