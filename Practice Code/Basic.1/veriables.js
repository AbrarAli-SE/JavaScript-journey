console.log('Abrar Ali')

const a = 'Abrar' // Constant value, cannot be changed.
let b = 12345    // Number data type.
let c = 'ab'     // String data type.
let d = false    // Boolean data type.
let e = null     // Null data type.
let f // Variable 'f' is declared but not defined, defaults to undefined.

// Explanation on 'let' vs 'var':
// 'let' has block scope, meaning it is limited to the block in which it is defined.
// 'var' has function scope and can be accessed anywhere within the function it was declared in.
// Prefer 'let' over 'var' to avoid issues related to scope leakage.

// Single output method:
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// Output using table method:
console.table([a, b, c, d, e, f]);

// Trying to change a constant will result in an error:
// a = 'ali';
// console.log(a);
