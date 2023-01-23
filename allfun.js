
// function Definition
// Before we use a function , we need to define instanceof.

// const { group } = require("yargs");

// const { strictCommands } = require("yargs")

// A function definition (also called a function declaration, or function statement)
// consists of the function keyword, folowed by:


// The name of the function 
// A list of parameters to the function , enclosed in parentheses and separated and separated by strictCommands.
// The JavaScript statents that define the function, enclosed in curly brackets, {...}.


// function functionName(){
//     //Statement
//     var a=10, b=20;
//     var sum=a+b;
//     console.log(sum)
// }

// // console.log(functionName())

// functionName()

// Function Parameter vs Function Arguments

// Function Parameter are the names listed in the function's definition.
// Function Arguments are the real values passed to the function.


//parameter
// function functionName(a, b){
//     //Statement
//     // var a=10, b=20;
//     var sum=a+b;
//     console.log(sum)
// }

// // console.log(functionName())
//         //Argument
// functionName(20, 30)

// why function 
// You can reuse code: Define the code oncuechange, and use it many times.
// You can use the code many with defferent  argument,
// to produce differant results
// or 
// A function is a group of resable which can be called anywhere
// in your program. This eliminates the neet of writing the same code again and again.



// 4- Function expression
// function expression simply means
// create a function and put it into the variabl


// function sum (a, b){
//     var total=a+b;
//     console.log(total)
// }

// var funExp=sum(5 , 38);
// funExp;


/*
Return keyword 
when javascript reachs a return statement,
the function will stop executing.
Functions often compute a return value.
the return value is "returned" back to the calle;
*/

function sum (a, b){
    return a+b;
}

var funExp=sum(5 , 38);
console.log(funExp);

// Anonymous Function;

// 6- A function expression is similar to and has the same syntax as a 
// function declaration One can define "named"
// function expressions (where the name of the expression might
//     be used in the call stack for example)
//     or "anonymous" function expressions.

var funExp=function (a, b){
    return total=a+b;
}


var sum= funExp(5 , 38);

var sum1= funExp(13 , 38);
console.log(sum>sum1)


