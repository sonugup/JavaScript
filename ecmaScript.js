
// ECMA INTERNATIONAL
// 1991
// It was then submitted to 
// ECMA INTERNATIONAL for standardization.
//  which resulted in ECMAScript.

// 2015
// ES6

// Decided to switch to annual 
// releases of ECMAScript


// Now It's Time for modern JavaScript

// features of ECMAScript 2015
// also known as ES6;
// LET VS CONST va VAR

// var myName = "Sonu Gupta";
// console.log(myName);
// myName="CEO Sonu Gupta";
// console.log(myName)

// let myName = "Sonu Gupta";
// console.log(myName);
// myName="CEO Sonu Gupta";
// console.log(myName)

//const
// // const myName = "Sonu Gupta";
// // console.log(myName);
// const myName="CEO Sonu Gupta";
// console.log(myName)

// var => Function scope
// let and const => Block Scope


// let arr=[2,4,6,4,3,6,3,3]

// let arr1=arr.map((el) => el*4).filter((el) =>el>10).reduce((accumulator, el) => accumulator+=el)
// console.log(arr1)

let arr=[2,4,6,4,3,6,3,3]

let arr1=arr.reduce((accumulater, curElem) => {
    debugger;
    return accumulater-=curElem;
})

console.log(arr1)


