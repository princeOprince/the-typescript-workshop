var variable = getSomeResult();
var variable2 = getSomeResult();
// A hypothetical function with some return 
// value we know nothing about
function getSomeResult() {
    return Math.random().toString();
}
// This works, as any might be a 
// string, and "anything goes"
var str = variable;
var str2 = variable;
// We are allowed to call a method, and we'll 
// determine at runtime whether that's possible
variable.toLowerCase();
console.log(variable);
console.log();
if (typeof variable2 === "string")
    variable2.toLowerCase();
console.log(variable2);
console.log(str2);
