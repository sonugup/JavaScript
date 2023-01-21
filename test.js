
function search(arr, k){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==k){
            return i
        }
    }
    return -1
}


let arr=[2, 4, 4, 6, 8]
let k=4

console.log(search(arr, k))