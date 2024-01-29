const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

// Type Inference
// TypeScript can infer the types of properties based on their values.
const newCar = {
  type: "Toyota",
};
newCar.type = "Ford"; // no error
newCar.type = 2; // Error: Type 'number' is not assignable to type 'string'.

const myCar: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
myCar.mileage = 2000;

const bus: { type: string; mileage?: number } = {
  // no error
  type: "Tata",
};
bus.mileage = 2000;

// index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
