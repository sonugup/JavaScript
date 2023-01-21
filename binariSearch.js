function search(arr, k){
    let start=0;
    let end=arr.length-1;
    while(end>start){
        let mid= start+Math.floor((end-start)/2)
        if(arr[mid]==k){
            return mid;
        }
        else if(arr[mid]>k){
            end=mid-1;
        }
        else{
            start=mid+1
        }
        mid= start+Math.floor((end-start)/2)
        // console.log(mid)
    }
}


let arr=[2, 4, 9, 6, 8, 12, 5, 7]
let k=4

console.log(search(arr, k))