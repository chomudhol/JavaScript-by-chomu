//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

console.log(typeof(myDate));      //**Date ak object hi he**

// let myCreatedDate = new Date(2024, 0, 8)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 8, 1, 30, 56, )
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-03-2024")
// console.log(myCreatedDate.toLocaleString());


// *TimeStamp*
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log( myCreatedDate.getTime() )
// console.log( Math.floor(Date.now()/1000))       //convert in sec.


let newDate = new Date ()
// console.log(newDate.getMonth() + 1); //Month 0 se start hota he es liye 1 jod do
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());

newDate.toLocalString('default',{
    weekday: "long",
})

