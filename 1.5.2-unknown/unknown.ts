const variable: any = getSomeResult();
const variable2: unknown = getSomeResult();

// A hypothetical function with some return 
// value we know nothing about
function getSomeResult() {
  return Math.random().toString();
}

// This works, as any might be a 
// string, and "anything goes"
const str: string = variable; 


// We are allowed to call a method, and we'll 
// determine at runtime whether that's possible
variable.toLowerCase(); 
console.log(variable, "variable");
console.log();

// The unknown type basically flips the 
// assertion and the burden of proof. 
if (typeof variable2 === "string") {
  variable2.toLowerCase();
  const str2: string = variable2; 
  console.log(variable2, 'variable2');
  console.log(str2);
}



