//object ko dicleyer karne ke tarike => 1.litral  2.constructer 
// singleton  =>obj. ko litral ki tarah dicleyer karte he to singleton nhi bata or constructer ki tarah dicleyer karte he to singleton  bata

// 1.Object literal

const mySym  = Symbol("key1") 


const jsUser = {
name : "hitesh",
"full name": "hitesh choudhary",
[mySym]:"mykey1",              //****//
age : 18,
location: "jodhpur",
email : "raju@google.com",
isLoggedIn :false,
lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);



// freeze 
// jsUser.email = "hites@email.com"
// console.log(jsUser);

// Object.freeze(jsUser)        //freeze se value ko change nhi kar sakte

// jsUser.email = "ramu@email.com"
// console.log(jsUser);



jsUser.greeting = function(){
    console.log("Hello js user");  
}
jsUser.greetingTow = function(){
    console.log(`Hello js user,${this.name}`);  
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTow());
