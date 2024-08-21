// Block scope and Global scope
// var c =400

let a = 600
if (true) {
    let a = 10
    const b = 40
    var c = 50
    // console.log("outer =",a);

}
// console.log("outer =",a);
// console.log(b);
// console.log(c);





// ******Nedted scope********

function one() {
    const username = "hitesh"

    function tow() {                      //childe function perent function ke variable ko acsis kr sakte he pr vic-varsa nhi
        const website = "Youtube"
        // console.log(username);         //error aayega
        
    }
    // console.log(website);
    tow()

}
one()



if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "Youtuebe"
        // console.log(username + website);
    }
    // console.log(website);                  //error aayega
    
}
// console.log(username);               //error aayega



// ++++++++++++++ interesting ++++++++++++++++

// dono tarha se function ban sakte he

// 1.
// function call
addone(5)                 //isme declaretion se pahale use kar sakte he
// function declaretion
function addone(num){
    return num + 1 
}

// 2.
const addTow = function(num){
    return num + 2
}
addTow(5)               //declaretion se pahale ise use nhi kar sarte