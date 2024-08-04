// # primitive :
                // 1. String
                // 2. Number
                // 3. Boolean
                // 4. null
                // 5. undefined
                // 6. Symbol
                // 7. BigInt

// #Reference (Non Primitive) :
                // 1. Array
                // 2. Objects
                // 3. function

//   1.Array => 
    //  const heros = ["joy","machoo","husay"]                    
//   2. obj.=>
                // let myobj = {
                //           name : "joy",
                //           age  : 34,
                //            }  
//   let Null = null  

//  3. func. =>
    //  const myFunction = function(){
    //                console.lo("Hello Word")
    //                                     }                          

// console.log(typeof(heros))
// console.log(typeof(myobj))
// console.log(typeof(myFunction))
// console.log(typeof(Nulll))


// *******************  Memory   **********************************
// 1. Stack mamory use in primitive datatype
// 2. Heap mamory use in Non-primitive dataype

// 1..
let youtubename = "joysoon" 
let anothername = youtubename

anothername = "chanakiyaniti"
console.log(anothername)
console.log(youtubename)

// 2..
let userOne ={
    email  : "joysoon7033@gmail.com",
    upi : "joy@uty"
}

let userTow = userOne
userTow.email = "ummico4340@gmail.com"

console.log(userOne.email)
console.log(userTow.email)