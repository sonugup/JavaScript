
let arr=[4, 2, 6, 7, 4, 5, 2, 4 ]

for(var i=0; i<arr.length; i++){
    let cur=arr[i];
    for(var j=i-1; j>=0 && arr[j]>cur; j--){
        arr[j+1]=arr[j]
    }
    arr[j+1] = cur;
}
console.log(arr.join(" "))