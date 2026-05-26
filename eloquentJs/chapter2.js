// looping a triangle
for (let x = 0; x < 7; x++) {
  console.log("#".repeat(x + 1));
}

// fizzbuzz
for (x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz")
    continue
  } else if (x % 3 == 0) {
    console.log("Fizz")
    continue
  } else if (x % 5 == 0) {
    console.log("Buzz")
    continue
  }
  console.log(x)
}

// chessboard

function createChessboard(width, height) {
  black = "#"; white = " "
  for (i = 0; i < height; i++){
    if (i % 2 == 0) {
      console.log((white + black).repeat(width/2))
      continue
    }
    console.log((black+white).repeat(width/2))
  }
}
createChessboard(8,8)
