/* function addAll(){
    var args = Array.prototype.slice.call(arguments);
    var total = 0;
    for (i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}
console.log(addAll(2,5,6,7,15));
*/
//solution-2
/*
function addAll(...numbers){
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}
console.log(addAll(2,4,6,13));
*/
//soluction -3
/*
function addAll(...numbers){
    return numbers.reduce((acc,cur) => acc + cur);
}
console.log(addAll(16,4,56,34));
*/
function sumAllPrimes(num) {
    let total = 0;

     function checkForPrime(i){
         for(let j = 2; j < i;j++){
             if(i % j === 0){
                 return false;
             }
         }
         return true;
     }
    for(let i = 2; i <= num; i++){
        if(checkForPrime(i)){
            total += i;
        }

    }
    return total;
}
console.log(sumAllPrimes(50));