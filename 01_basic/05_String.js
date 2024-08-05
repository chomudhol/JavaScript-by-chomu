const name = " joy" 
const repoCount = 50

// console.log(name + repoCount + " value")            **not a right way becouse this is a old way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('joy-boss-stark')

// console.log(gameName[0])
// console.log(gameName.__proto__)   

// **String method**
   //**origale value change nhi hui he
// console.log(gameName.length)
// console.log(gameName.concat())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))     //kis index pr konsa charector he
// console.log(gameName.indexOf('b'))     //kis charector  pr konsa index he

// const newString = gameName.substring(0, 4)  //you can not use nagetive value
// console.log(newString)

// const anotherString = gameName.slice(-7, 5)
// console.log(anotherString)

// const newStringOne = "     jony     "
// console.log(newStringOne)
// console.log(newStringOne.trim())            //Remove space


// const url = "https://joy%50.com/joy0stark"
// console.log(url.replace("%50", "-"))
// console.log(url.includes("jor"))                //whene pregent =>true  atherwese => false


//**conver value String to Array
console.log(gameName.split("-"))

