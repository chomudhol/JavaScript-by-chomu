// function definetion
function saymyname(){
    console.log('h');
    console.log('e');
    console.log('l');
    console.log('l');
    console.log('o');
    }
    
    // function reference/exicution
    // saymyname()
    
    
    // ********
    // function addTownumber(number1, number2){        //perameter
    //     console.log(number1 + number2); 
    // }
    
    // addTownumber(56, 9)      //argument  
    // const result = addTownumber(56, 9)     
    // console.log("Result =", result)
    
    
    
    // ********
    function addTownumber(number1, number2){   
    //  let result = number1 + number2 
    //  return result                                    //return ke bad koi kam nhi karega
            //  OR
        return number1 + number2    
    }
    
    const result = addTownumber(56, 9)     
    // console.log("Result =", result)
    
    
    
    
    function loginguserMassage (username){
        return `${username} just logged in`
    } 
    
    console.log("result =",loginguserMassage("vishnu"));
    
    
    // yadi argument empty ho 
    function loginguserMassage (username ="sam"){              //argument me koi value nhi dalenge to bhi "sam" value print hogi or ydi argument me value dalenge to argumet vali  value print hogi
        // if(username === undefined) ********     dona same hi he
              //ya
           if(!username)   //********
         {
            console.log("Plese enter a username");
            return                                 //if ke andar aane ke bad aage print nhi hogi koi bhi statement
        }
        return `${username} just logged in`
    } 
    
    console.log("result =",loginguserMassage());          //undefined aayage yadi empty he 
     
    
    
    
    
    
    // ************************part -2 **********************************************
    // 1
    // function caluleteCartprice1(num1){
    //     return num1
    // } 
    // console.log(caluleteCartprice1(30, 89, 90))
    
    // 2
    // function caluleteCartprice(...num1){        //...(rest operator)
    //     return num1
    // } 
    // console.log(caluleteCartprice(30, 100, 90, 500))
    
    // 3
    function caluleteCartprice(val1, val2, ...num1){        //...(rest operator)
        return num1
    } 
    // console.log(caluleteCartprice(30, 100, 90, 500))
    
    
    
    
    //1.=> Object ko function pass karna or use karna
    // method-1:-
    const user = {
        username : "hitesh",
        price: 199
    }
    function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
    }
    handleObject(user)
    
              //  OR
     // method-2:-
    // bina object banaye
    function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);  
    }
            // directe Object  pass kar dete bina object banaye , call kardete
    handleObject({
        username : "montu",
        price: 999
    })
    
    
    
    
    // 2.=> Array ko function pass karna or use karna
    // method-1:-
    const mynewarray = [200, 300, 400, 500]
    
    function returnSecondvalue(getArray){
         return getArray[2]
    }
    console.log(returnSecondvalue(mynewarray));
    
            // OR
    
    // method-2:-
    // bina Array ko banaye 
    function returnSecondvalue(getArray){
        return getArray[2]
    }
    
    console.log(returnSecondvalue( [200, 300, 400, 500]));
    