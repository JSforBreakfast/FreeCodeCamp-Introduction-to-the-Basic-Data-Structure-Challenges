function sumOfTen(arr) {
  // change code below this line
  let sumOfTen = arr.splice(2,2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
