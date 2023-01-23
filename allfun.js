
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
function functionName(a, b){
    //Statement
    // var a=10, b=20;
    var sum=a+b;
    console.log(sum)
}

// console.log(functionName())
        //Argument
functionName(20, 30)

// why function 
// You can reuse code: Define the code oncuechange, and use it many times.
// You can use the code many with defferent  argument,
// to produce differant results
// or 
// A function is a group of resable which can be called anywhere
// in your program. This eliminates the neet of writing the same code again and again.

