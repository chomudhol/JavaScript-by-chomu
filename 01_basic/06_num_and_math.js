//******************************NUMBER**************************************

const score = 700
// console.log(score)

const balance = new Number(3000)
// console.log(balance);

// console.log(typeof(balance.toString()));
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// console.log(typeof(balance));


const otherNumber  = 132.8478
// console.log(otherNumber.toPrecision(1));


const hundreds = 10000000
// console.log(hundreds.toLocaleString("en-IN"));


//************************************MATHs********************************

// console.log(Math);
// console.log(Math.abs(-4));  //sign change krega

// console.log(Math.round(4.9));     //round of kr dega
// console.log(Math.ceil(4.9));     //big value hi lega
// console.log(Math.floor(4.9));     //small value hi kega
// console.log(Math.sqrt(9));      //root nikalega
// console.log(Math.pow(2,2));      //power laga dega
// console.log(Math.min(2,2,4,6,34,6,7,2));      //min. value konsi he

console.log(Math.random());     //random value dega OR **value 0 or 1 ke bich me hi aayegi**
console.log((Math.random()*10 )+ 1);     //ab value 1 se 10 ke bich ayegi,jhaa tak value chahiye us number o multiplayi kr do
console.log(Math.floor((Math.random()*10 ))+ 1);   //random value ko small intiger value me conver kr dega 
console.log(Math.ceil((Math.random()*10 ))+ 1);   //random value ko big intiger value me conver kr dega 

const min = 10
const max = 20 
console.log(Math.floor(Math.random()*(max - min + 1)) + min);


