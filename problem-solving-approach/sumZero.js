//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. 
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

//naive
//Time Complexity - O(n²)
//space complexity - O(1)

function sumZero(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; i < array.length; j++){
            if (array[i] + array[j] === 0){
                return [array[i], array[j]]
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])


//refactor
//Time Complexity - O(N)
//Space Complexity - O(1)

function sumZero(arr) {
    let left = 0
    let right = arr.length -1;
}