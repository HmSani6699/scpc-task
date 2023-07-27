/*/========================//
         Task one
//=========================/*/
function taskOne(text){
    return text.split("").reverse().join('')
}

// const result =taskOne('Alhamdolillha')
// console.log(result); 


/*/========================//
         Task Two
//=========================/*/
function taskTwo(arr) {
    let result = 0
    for(num in arr){
        if(arr[num]>0){
            result+=arr[num]
        }
    }
    return result
}

// const result =taskTwo([2, -5, 10, -3, 7])
// console.log(result); 


/*/========================//
         Task Three
//=========================/*/

function taskThree(arr) {
    var mf = 1;
    var m = 0;
    var item;

    for (a in arr) {
        for (b in arr) {
            if (arr[a] == arr[b]) m++;
            if (mf < m) {
                mf = m;
                item = arr[a];
            }
        }

        m = 0;
    }
    return item
}
// const result = taskThree([3, 5, 2,5, 3, 3, 1, 4, 5]);
// console.log(result); 


/*/========================//
         Task Four
//=========================/*/
