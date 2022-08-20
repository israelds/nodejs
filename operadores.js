//coalescência nula 

let a = undefined;
let b = false;
let c = "foo";

console.log("coalescência nula");
console.log(a ?? b);
console.log(a ?? c);
console.log(b ?? c);
console.log();

console.log("OR");
console.log(a || b);
console.log(a || c);
console.log(b || c);
console.log();