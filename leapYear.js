var year=2020;
debugger;
if(year%4 ===0){
    if(year%100==0){
        if(year%400==0){
            console.log(`this year ${year} is a leap year`);

        }else{
            console.log(`The year ${year} is not a leap year`)
        }
    }else{
        console.log(`The year ${year} is a leap year`)
    }

}else{
    console.log(`The year ${year} is  not a leap year`)
} 