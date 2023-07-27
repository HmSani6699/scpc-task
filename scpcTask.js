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

function twoSumSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
// const result = twoSumSortedArray(sortedArray, targetValue);
// console.log(result); 


/*/========================//
         Task Five
//=========================/*/

function taskFive(num1, num2,operator) {
    if(operator==='+')return num1 +num2;
    if(operator==='-')return num1 -num2;
    if(operator==='*')return num1 *num2;
    if(operator==='/')return num1 /num2;
    else return 'Error : Invalid operator'
 }

//  const result = taskFive(4, 4,'*');
//  console.log(result); 

