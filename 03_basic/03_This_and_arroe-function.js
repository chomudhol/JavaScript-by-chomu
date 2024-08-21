//"this" kyword me aata he currren contex

const user = {
    username : "hitesh",
    price : 499,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);        //user scop me aane wale variable ko axis karne ke liye "this" keyword/contex  ka use ge  
           console.log(this);
           
    }
       
}
// user.welcomeMessage()
// user.username = "jonny"
// user.welcomeMessage()


// yadi "this" ko bahar print kre
// console.log(this);       // run => empty object ={}  aayea



// ************* arrow function ******************

//yadi "this" ko function me print kare
// function chai(){
//     console.log(this);      //kai sari value aaye gi
// }
// chai()

// 1. classic function
// function chai(){
//     let username = "hitesh"
//     console.log(this.useranme);      //object ke andar hi "this" ko use kar sakta hu function me nhi kar sakte he
// }
// chai()


// 2.
// const chai = function (){
//     let username = "hitesh"
//     console.log(this.useranme);
// }
// chai()


// 3. +++arrow function+++
const chai = () => {
    let username = "hitesh"
    // console.log(this.useranme);
    console.log(this);
}
// chai()


//1. - basic arrow function
// const addTow = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTow(5, 7));


// 2. -impisite return (bina return ke)
// const addTow = (num1, num2) => num1 + num2
              //ya
// const addTow = (num1, num2) => (num1 + num2)
// console.log(addTow(5, 9));

// yadi object return karna ho
const addTow = (num1, num2) => ({username : "hitesh"})
console.log(addTow())
 





