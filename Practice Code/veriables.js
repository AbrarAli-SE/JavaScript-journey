console.log('Abrar Ali')

const a = 'Abrar' //unchanged able value
let b = 12345    // number
let c = 'ab'  // string
let d = false // boolean 
let e = null // Null
let f //undefined 

//let work in scope but var did not work in scope mean we can use var outer then any body but let cannot that's why we ever use let instead of var got it

//single method  
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// table method 

console.table([a,b,c,d,e,f])

// try to change constant but it will show error 
// a = 'ali'
// console.log(a)