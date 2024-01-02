function mergeSort (arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort.slice(0,mid)
    let right = mergeSort.slice(mid)
    return merge(left, right)
}