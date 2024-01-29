// DONE: Numeric Enums - Default
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.

// DONE: Numeric Enums - Initialized
enum NewCardinalDirections {
  North = 1,
  East,
  South,
  West,
}
// logs 1
console.log(CardinalDirections.North); // returns 0
// logs 4
console.log(CardinalDirections.West); // returns 3

// DONE: Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound); // returns 404
// logs 200
console.log(StatusCodes.Success); // returns 200

// DONE: String Enums
enum CardinalDirections {
  north = "North",
  east = "East",
  south = "South",
  west = "West",
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

// NOTE: Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
