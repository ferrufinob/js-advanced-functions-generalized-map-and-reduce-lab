function map(arr, func) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    r.push(func(arr[i]));
  }
  return r;
}

let array = [1, 2, 3, 4];
console.log(map(array, (x) => (x *= -1)));
console.log(map(array, (x) => (x *= 2)));
console.log(map(array, (x) => (x **= 2)));

function reduce(arr, func, start = null) {
  if (start) {
    arr.forEach((elem) => {
      start = func(elem, start);
    });
  } else {
    start = arr[0];
    for (let i = 1; i < arr.length; i++) {
      start = func(arr[i], start);
    }
  }
  return start;
}

let newArray = [true, true, false];
let sumArray = [20, 2, 2];
console.log(reduce(newArray, (x) => x === true));
console.log(reduce(sumArray, (x) => (sumArray[0] += x)));
