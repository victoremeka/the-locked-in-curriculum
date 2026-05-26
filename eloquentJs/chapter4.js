// the sum of a range
computeRange = (start, end, step = 1) => {
  let arr = [];
  for (let x = start; x <= end; x += step) {
    arr.push(x);
  };
  return arr;
}

findSum = (arr) => {
  let sum = 0
  for (let x of arr) {
    sum += x;
  }
  return sum;
}

console.log(findSum(computeRange(1, 10, 2)));

// reversing an array
function reverseArray(arr) {
  reversed = [];
  for (let i=0; i < arr.length; i++) {
    reversed[i] = arr[arr.length-(i+1)];
  }
  return reversed;
}

function reverseArrayInPlace(arr) {
  link = [];
  const arrlen = arr.length;
  for (let i = 0; i < arrlen; i++) {
    link[i] = arr[arr.length - (i + 1)];
  }
  for (let j = 0; j < link.length; j++) {
    arr[j] = link[j];
  }
}

arr = [1, 2, 3, 4, 5]
console.log(reverseArray(arr));
console.log("---", arr, "---")
reverseArrayInPlace(arr);
console.log(arr)


// list

function arrayTolist(arr) {
  if (arr.length === 1) {
    return {
      value: arr[0],
      rest: null
    }
  }

  n = arr.shift()

  return {
    value: n,
    rest: arrayTolist(arr)
  }
}

console.log(arrayTolist([1,2,3]))

function listToArray(list) {
  arr = []
  while (true) {
    if (list.rest === null) {
      arr.push(list.value);
      break;
    }
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(elem, list) {
  list = {
    value: elem,
    rest: list
  }
  return list;
}

console.log(listToArray(arrayTolist([1, 2, 3])));
console.log(prepend(0, arrayTolist([1, 2, 3])));

function nth(list, num, pos=0) {
  if (list.value === num) {
    return pos
  } else if (list.rest === null) {
    return undefined
  }

  return nth(list.rest, num, pos+1)
}

console.log(nth(arrayTolist([1,2, 3, 4, 5]), 2))

let x = arrayTolist([1,2, 3, 4, 5]); let y = arrayTolist([1,2, 3, 4, 5]);

// deepEqual
function deepEqual(a, b) {
  if ((typeof (a) === "object" && typeof (b) === 'object') && a !== null && b !== null) {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (let key of aKeys) {
      if (!bKeys.includes(key)) {
        return false;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
}

console.log(deepEqual(
  { a: 1, b: 2 },
  { a: 1, b: 999 }
))
