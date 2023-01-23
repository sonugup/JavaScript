

// Bubble sort Algorithm
// Bubble sort is the simplest sorting algorithm that
// works by repeatedly swapping the adjacent elements if 
// if they are in the wrong order.
// This algorithm is not suitable for large data
// as its average and worst-case time complexity is quite high.
let arr=[5,2,6,2 ,5, 7.,8, 9, 23];

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i; j++){
        if(arr[j]>arr[j+1]){
            swap(arr, j, j+1)
        }
    }
}
console.log(arr.join(" "))

function swap(arr, i, j){
    let tamp=arr[i];
    arr[i]=arr[j];
    arr[j]=tamp;
}