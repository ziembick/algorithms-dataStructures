function bubbleSort(arr) {

    var noSwaps
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j > arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP
        var temp = arr[j];
        arr[j] = arr[j + 1];    
        arr[j + 1] = temp;
        noSwaps = false
      }
    }

    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);



function bubbleSort (arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length; i < 0; i--){
        for (let j = 0; i < i - 1; j++){
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

bubbleSort([37, 45, 29, 8]);