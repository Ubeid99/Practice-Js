// function statement or function declaration
    a();

    function a() {
        console.log("hello ubeid");
    } 

//  in this function type we call invoke are function even befor it declared becouse this is and independence function and work like a 




// function Expression

//  b(); notworking here

    var b = function () {
        console.log("hello ubeid");
    }
    b();

// in this function type function work like a variable that's why fuction can't invoke before Declaration.




// Anonymous function

//  function () {
                    // "remove comment and run then you see the deffrence"
// }

// This function are function statement but without a name. but this function use as and value. yes it's an function expression if you use this function.
// but if you use this fuction as statement than syntexerror appears becouse statement function name are compelsory.




// name function expression

    var b = function xyz() {
        console.log("hello ubeid");

        // console.log(xyz); this is the way for see the whole function on console.
    }
    b();
//  xyz(); "this named fuction is not independent that's why it's not working we named this function but still it's work like an variable". it gives you a refrenceerror.

//  this is function expression but in this function type we gave a name to expression.
// it's also work on let and const.




// Arguments and parameters in functions.

    function a(para1 , para2){
    // and this para1 and para2 are the parameters that declared in function
    
        console.log("hello ubeid")
    }

    a(1 , 2); 
//  this are the argument that can pass in invoked function


// First class function or first clss citizens.

    var c = function (para3) {
        //  return function(){       "anonymouse function returned"
        //  }

        //  return function xyz(){    "named fuction returned"

        //  }
    }
    console.log(c());

// c(xyz());  as am argument of function.

// first class function is not a type of function it's and ability of function it shows that function is use in chain and return it anonymous or named function .
// and execute as an argument of another function.




// Callback functions

    function e(d){
    // This d in function c is a parameter and this parameter is d is a function that is called in c function but type d in function c as parameter so that means this inner function will be able to call anytime and anywere in code.
        console.log("line 1");
    d();
    }
    e(function d(){
        console.log("line 2");
    });

// This d function is paasing in c function as an argument this is called the callback function. function called in another function.

// example as a settimeout becouse this function uses the callback function.

    setTimeout(() => {
        console.log("line 3");
    }, 2000);

// This exampel of settimeout shows us that this callback function are key for do async opprations in javascript.

// in this exampel we seen that line 3 is exicuted after 2sec but what is we do this function before x and y function. if we do before x and y function the output will be same becouse js uses async oppretion and do not wai for 2sec.



// Callback function problems.

// 1 callback hell.
// callback hell is a problem in callback function and this problem is that your code goess in loop of callbacks.
// first we can make a fuction and then call another function becouse we have to call second fuction after first will complate work and than we have to call third function and we have to call after second will complate the work than we will callback third functionn in second function.
// this is make our code all in callback functionn and that's called pyramid of doom.

// Exampel

const shop = ["shoes" , "shirts" , "watches"];

api.orderhere( () =>{api.paymenthere( () => {api.chackbill(); });  });

// this is the exampel of callback hell if we use callback function over and over we can have this type of problem and we lose control on our code.





// Promise in javascipt

// syntax for creat a new promise object.

const myPromise = new Promise((resolve , Reject) => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});

myPromise.then(fullfillA , rejectedA)
         .then(fullfillB , rejectedB)
         .then(fullfillC , rejectedC);
        

// promise are most important in javascript. promise sed for run handal the callback functions or fetched api or it,s use for give a value that can be sucses or faliar.

// in normal word promise is use for solve the pyramid of doom error and use this promie instead of callback function.

// promise are last and finel complition or failure of data in normal word do or die it will be sucses or delete.

// exampal

// we got here an array called  cart and than exicute in creatorder api and than payment method is exicutes in callback fuction and this callback functio  is exicite in creatorderapi. 
const cart = ["T-shirt", "pents", "sheos", "shocks"];

createOrder(cart , function(orderid) {
    proseedToPayment(orderId);
});

// if we use this method than we have to trust in creatorder api but this is api and it's not sure that this api call the function again and again  or call tha function before exicute.
// this is the problem of callback method we loose controll of our own code.

// now this is soliution of this probelem and it's called promise.

// comment the first exampal and than comment out this exampal.

// const promise = createOrder(cart);

// promise.then(fumction(orderId){
//     proseedToPayment(orderId)
// });

// Explanation and examppals of promise

const GITHUB_API = "https://api.github.com/users/Ubeid99";

const user = fetch(GITHUB_API);
console.log(user);

// this code is showing us that this github profile api fetched in user promise and than exicute the api.
// but in promise before any promise or fetching the api that this api value is undefined and than we wrote api in promise and fetch the api than it's in <<<panding state>>>.
// and whene code is done exicute and api axicute completly than promise will come in <<<Fullfill state>>>.
// and than that undefined value will be the result of promise and undefined value turns in to responce.

// if promise get fail t0 fetch api than promise will go on <<<Rejected state>>>.
// states of promise

// 1- Pendding state.
// 2- Fullfill state.
// 3- Rejected state.




// async await in javascript

// async await functions are used in javascript for doing async oppretions in normal words js is syncronize language that means js works in line by line axicution but if we have to exicute in asyncronize way then we use async await.
// async await use in proise and syn await allways returns a promise that means a value exicuted in asyn await is not an simpel value it's a promise.
// promise are async type objects that's why async functions are helping promise for asyncronize exicution.

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();
// this is an exampel of how async await functions are work and retuens a promise.



// Functinal programing 

// higher order function

// The defination of functional programing is made a logic by function and make your code simple and short. 

// exampel for higher order function but in complex way but remember meth and push.

// this is the exampel of functional programing. write a one logic in function and use that one logic in every function we want. 
    const redius = [1 , 2 , 3 , 4]

    const area = function(redius){
            return Math.PI * redius * redius;
    };

    const circumference = function(redius){
            return 2* Math.PI * redius;
    };


    const calculate = function(redius , logic) {
        const output = [];
    for(let i=0; i < redius.length; i++) {
        output.push(logic(redius[i]));
    }
    return output;
};

    console.log(calculate(redius , area));
    console.log(calculate(redius , circumference));

    const calculateArea = function(redius){
    const output = [];

    for(let i = 0; i < redius.length; i++){
        output.push(Math.PI * redius[i] * redius[i]);
    }

    return output;
    };





    // Map in javascript (one of the higher order function)

    // map is basically use for transformation of array. exampel of map is as below.

    // exampel

    const arr = [2 , 4 , 5 ,6 ];

    const output = arr.map((m) => {
            return m * 2;
            
            // return m.toString(2); for binary value transformation
    });

    // we get an const arr aand than make and another const variable called output for get an dubble.

    // we used map function with arr using dot oprator and than callback another function in map and return it dubbled.
    // this is use of a map function.

    console.log(output);




    // filter in javascript (one of the higher order function)

    // filter basically use for filter and value in the array. if not want the whole array and want some partlyculer value than this function will filter it and give the value that we want.

    // exampel

    const array = [2 ,5, 1 ,4 ,6 ,7];



    const getvalue = array.filter((n) => {

            return n % 2;

                    // diractly using arrow function this is the same but in other form of syntax.
                    // array.filter(() => return n % 2);

            // return n % 2 === 0;  for even value
            // return n < 5; or n > 5  for filter value by using grater or less.
    });
    console.log(getvalue);




    // reduce in javascript (one of the higher order function)

    // this is the exampel of using reduce for get maximum value stored in array.

    const arry = [2 , 4 , 7 , 8 , 10];

    const maxy = arry.reduce(( max , curr) => {

        if(curr > max){
    // curr is current value stored in array and max is the value that we have to find in the current values thats why we have to set temprary value 0 becouse 0 is the possible number for positive values 0 showing that array dose not have nagative values.              
            max = curr;
        }
        //  if current value grater than max value it means value stored in the array is reaches the maximum than it will same as max value.
        return max;
    }, 0);

    console.log(maxy);




    // chaining in higher order function.

    // we can use this function by chainig with each other it means use for get value from the value that already got.
    const arrs = [
        {name : "ubeid" , age : 21},
        {name : "itachi" , age : 25},
        {name : "goku" , age : 30},
        {name : "giyu" , age : 21},
    ];

    // we used filter fist for getting a value who hase age lessthan 24 and than vhain the map for getting the value of names of value who has age lessthan 24.

    const getone = arrs.filter((x) => {
      return x.age < 24;
    }).map((x) => { return x.name});

    console.log(getone);