function quickSort (arr, left = 0, right = arr.length -1){
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1,right)
    }
    return arr
}

quickSort([100,-3,2,4,6,9,1,2,5,3,23])