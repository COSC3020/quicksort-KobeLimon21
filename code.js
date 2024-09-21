function quicksort(array) {
  if (array.length <= 1) { // array already sorted, return it
    return array;
  }

  var stack = [];
  stack.push(0); // left object 
  stack.push(array.length - 1); // right object

  while (stack.length > 0) { // while elements exist, pops right then left 
    var right = stack.pop(); 
    var left = stack.pop();

    if (left < right) { // splits array in two, elements smaller than pivot on left and bigger elements to the right 
      var pivotIndex = partition(array, left, right); 

      if (pivotIndex - 1 > left) { // pushes left array to be sorted if enough elements
        stack.push(left);
        stack.push(pivotIndex - 1);
      }

      if (pivotIndex + 1 < right) { // pushes right array to be sorted if enough elements 
        stack.push(pivotIndex + 1);
        stack.push(right);
      }
    }
  }
  return array;
}

function swap(array, leftObject, rightObject) {
  var temp = array[leftObject];  // temporary variable for left
  array[leftObject] = array[rightObject]; // swaps elements from right to left 
  array[rightObject] = temp;  // left value is now right value 
}
function partition(array, low, high) {
  var pivotValue = array[high]; // stores value for high 
  var pivotIndex = low;  // tracks position for next smaller element from pivot

  for (var i = low; i <= high - 1; i++) {  // iterates through sub array before pivot reached 
    if (array[i] <= pivotValue) {  // checks if element if less than piviot
      if (i !== pivotIndex) {  // checks to see if element is in right position, if not it is less than pivot
        swap(array, i, pivotIndex); 
      }
      pivotIndex++;  // moves to the right 
    }
  }

  if (pivotIndex !== high) {  // checks to see if element is in right spot, if not swap it element at index
    swap(array, pivotIndex, high);
  }
  return pivotIndex; 
}
