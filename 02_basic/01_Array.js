// array


const myAry  = [2,34,3.4,'hitesh',2] 
// console.log(myAry[0]);

const myAry2  = new Array(2,34 ,5.3,"raju")
// console.log(myAry2[2]);


// Array Method
// 1.    add value in last
myAry.push(34)
myAry.push(4,3,53)
console.log(myAry);

// 2.   remove last value
myAry.pop()
console.log(myAry);

// 3.
myAry.unshift(9)
console.log(myAry);

// 4.
myAry.shift(9)
console.log(myAry);

// 5. value array me he ya nhi 
console.log(myAry.includes(2));

// 6. value konse index pe he
console.log(myAry.indexOf(2));

// 7. join() array ko string me convert kar deta he
const newary = myAry.join()
console.log(myAry);
console.log(newary);
console.log(typeof(newary));


// 8.Slice, Splice
// **slice oreginal array ko menupulet nhi karta he OR splice oreginal arrayy ko menupulat karta he

console.log("A ", myAry)

const myn1 = myAry.slice(1,3)
console.log(myn1);
console.log("B ",myAry);

const myary2 = myAry.splice(1,3)
console.log(myary2);
console.log("C ",myAry);


// 9. array ko reverse ksrane ke liye use 
myAry.reverse()
console.log(myAry);

// 10.
myAry.sort()
console.log(myAry);




