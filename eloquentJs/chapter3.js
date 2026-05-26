// minimum
const findMin = (x, y) => {
  return x > y ? y : x;
}

// recursion
function isEven(x) {
  if (x === 0) {
    return true;
  } else if (x === 1) {
    return false;
  }
  return isEven(x - 2);
}

// bean counting
function countChar(base, y) {
  let cn = 0;
  for (x = 0; x < base.length; x++){
    if (base[x] === y) {
      cn++;
    }
  }
  return cn;
}

console.log(findMin(3, 5))
console.log(isEven(3))
console.log(isEven(6))
console.log(countChar("billyjoel", "l"))
