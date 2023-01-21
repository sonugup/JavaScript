// function search(arr, k){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==k){
//             return i
//         }
//     }
//     return -1
// }


// let arr=[2, 4, 4, 6, 8]
// let k=4

// console.log(search(arr, k))


// how many value

function search(arr, k){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==k){
        //    return i
           count++
        }
    }
    if(count>0){
        console.log(count)
    }else{
        console.log(-1)
    }
}


let arr=[2, 4, 4, 6, 8]
let k=4

search(arr, k)