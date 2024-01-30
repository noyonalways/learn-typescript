# TypeScript Object Types

TypeScript has a specific syntax for typing objects.

Read more about objects in our [JavaScript Objects chapter](https://www.w3schools.com/js/js_objects.asp).

**Example:**

```ts
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
```

Object types like this can also be written separately, and even be reused, look at [interfaces](https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php) for more details.

## Type Inference

TypeScript can infer the types of properties based on their values.

**Example:**

```ts
const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
```

## Optional Properties

Optional properties are properties that don't have to be defined in the object definition.

**Example without an optional property:**

```ts
const car: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;
```

**Example with an optional property:**

```ts
const car: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car.mileage = 2000;
```

## Index Signatures

Index signatures can be used for objects without a defined list of properties.

**Example:**

```ts
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
```

Index signatures like this one can also be expressed with utility types like `Record<string, number>`. Learn more about utility types like this in our [TypeScript Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php) chapter.
