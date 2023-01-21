// function search(arr, k){
//     let start=0;
//     let end=arr.length-1;
//     while(end>start){
//         let mid= start+Math.floor((end-start)/2)
//         if(arr[mid]==k){
//             return mid;
//         }
//         else if(arr[mid]>k){
//             end=mid-1;
//         }
//         else{
//             start=mid+1
//         }
//         mid= start+Math.floor((end-start)/2)
//         // console.log(mid)
//     }
// }


// let arr=[2, 4, 9, 6, 8, 12, 5, 7]
// let k=6

// console.log(search(arr, k))


// Recursive implementation of Binary Search:

function search1(arr1, k1, start1, end1){
    while(end1>start1){
        let mid1= start1+Math.floor((end1-start1)/2)
        if(arr1[mid1]==k1){
            return mid1;
        
        }else if(arr1[mid1]>k1){
            return search1(arr1, k1, start1, mid1-1)
        
        }else{
            return search1(arr1, k1, mid1+1, end1)
        }
        // mid1= start1+Math.floor((end1-start1)/2)
        // console.log(mid)
    }
    return -1;
}


let arr1=[2, 4, 6, 8, 12, 16]
let k1=12
let n=arr1.length;

console.log(search1(arr1, k1, 0, n-1))

