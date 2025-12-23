function mergeSort(array) {
  // if array has one item
    // return item
  // split the array into two halves
    // sort the left half
    // sort the right half
    // merge both halves

  if (array.length <= 1) {
    return array;
  }

  const midPoint = Math.floor((array.length) / 2);
  const leftHalf = array.slice(0, midPoint);
  const rightHalf = array.slice(midPoint);

  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  const sortedArray = [];

  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < sortedLeftHalf.length) {
    const leftItem = sortedLeftHalf[leftPointer];
    const rightItem = sortedRightHalf[rightPointer];

    if (rightItem < leftItem) {
      sortedArray.push(rightItem);
      rightPointer++;
    } else {
      sortedArray.push(leftItem);
      leftPointer++;
    }
  }

  while (rightPointer < sortedRightHalf.length) {
    const rightItem = sortedRightHalf[rightPointer];
    sortedArray.push(rightItem);
    rightPointer++;
  }

  console.log(`${sortedLeftHalf}  ${sortedRightHalf}  ->  ${sortedArray}`);
  return sortedArray;
}

// sort the left half
// sort the right half
// merge both halves

mergeSort([4, 7, 11, 0, -1, 3, 2, 4, 1]);
