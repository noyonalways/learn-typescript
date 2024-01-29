/**
 * TypeScript Type Aliases and Interfaces
 * TypeScript allows types to be defined separately from the variables that use them.
 * Aliases and Interfaces allows types to be easily shared between different variables/objects.
 */

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

/**
 * Type Aliases
 * Type Aliases allow defining types with a custom name (an Alias).
 * Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
 */
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const yourCar: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

/**
 * Interfaces
 * Interfaces are similar to type aliases, except they only apply to object types.
 */
interface Rectangle {
  height: number;
  width: number;
}
const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

/**
 * Extending Interfaces
 * Interfaces can extend each other's definition
 * Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
 */
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
