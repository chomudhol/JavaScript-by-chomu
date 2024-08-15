// constructor ki madat se 

// const tinderUse = {}           //singleton object he
const tinderUser =  new Object()       //ye non-singleton(constructer) object he

tinderUser.id = "53dgh"
tinderUser.name = "mikky"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


//nesting object 
const regularUser = {
    email: "vvishnu@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vishnu",
            lastname: "suthar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);



//combine ojecte

const obj1 =  {1: "a", 2: "b"}
const obj2 =  {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)  //{} likhana chahiye
                 //OR
const obj3 = {...obj1, ...obj2}      //jayatar yahi use karenge           
console.log(obj3);


// array ke andar objects
const users = [
    {
        id: 23,
        email: "hamiji@gamil.com"
    },
    {
        id: 23,
        email: "hamiji@gamil.com"
    },
    {
        id: 23,
        email: "hamiji@gamil.com"
    },
    {
        id: 23,
        email: "hamiji@gamil.com"
    }
   
]

console.log(users[1].email);


// *****importaint*******
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //sari keys array me aajayegi
console.log(Object.values(tinderUser));  //sari values array me aa jayegi
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));    //property he ya nhi chack karene ke liye
    
