var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//give an object of numbers
//  add all x and y pairs together

// console.log(Math.pow(input[0].x,2) + Math.pow(input[0].y,2))

var result = input.map(function (i) {
  var square = (Math.pow(i.x, 2)) + (Math.pow(i.y, 2));
  return Math.sqrt(square);
}
)
console.log(result)

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);