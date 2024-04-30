for(const object in statistics){
    if(object == 'r' || statistics[object] % 2 != 0){
        console.log(statistics[object]);
    }
}