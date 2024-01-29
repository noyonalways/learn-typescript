// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

// define our tuple
let newTuple: [number, boolean, string];

// initialized incorrectly which throws an error
newTuple = [false, "Coding God was mistaken", 5];

// define our tuple
let anotherTuple: [number, boolean, string];
// initialize correctly
anotherTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(anotherTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// throws error as it is readonly.
ourReadonlyTuple.push("Coding God took a day off");

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];
