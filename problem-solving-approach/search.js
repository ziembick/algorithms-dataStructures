// We have a whole video on binary search or multiple videos, but I just wanted to introduce the idea

// of dividing and conquering, taking a larger or a larger set of data and dividing it into smaller subsets

// and ignoring other ones.


//given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located
//if the value is not fount, return -1


//naive solution
//time complexity: O(n)
function sortedArray(arr, val) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }   
    }
    return -1
}

sortedArray([1,2,3,4,5,6],4)


//refactor
//time complexity: Log(n) Binary search
function search(array, val) {
    let min = 0
    let max = arr.length - 1

    while (min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if (currentElement < val){
            min = middle + 1;
        }
        else if (currentElement > val){
            max = middle - 1;
        } else {
            return middle
        }
    }
    return - 1;
}