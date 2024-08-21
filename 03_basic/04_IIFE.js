//Immediately Invocked Function Expretion (IIFE)

// ******Globle scope ke polution se problem hoti he kai bar esi polution ko hatane ke liye use karte he

// function chai (){
//     console.log(`Data base connection`);
// }
// chai()

// ******IIFE******

    // named IIFE      (function ka name he to)
    (function chai (){
        console.log(`Data base connection`);
    })();  // ******";" lagana jaruri he********
    
    
    ( (name) => {       //unnamed IIFE (function name nhi he to )
        console.log(`Data base connection = ${name}`);
        
    } ) ("hitesh");
    