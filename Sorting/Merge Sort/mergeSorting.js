function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr[j] > arr1[i]) {
      results.push(arr1[i]);
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr1[j]);
    j++;
  }

  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);
