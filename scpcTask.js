/*/========================//
         Task one
//=========================/*/
function taskOne(text){
    return text.split("").reverse().join('')
}

console.log(taskOne('Alhamdolillha')); 


/*/========================//
         Task Two
//=========================/*/
function taskOne(arr) {
    let result = 0
    for(num in arr){
        if(arr[num]>0){
            result+=arr[num]
        }
    }
    return result
}
console.log(taskOne([2, -5, 10, -3, 7])); 