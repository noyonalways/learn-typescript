# TypeScript Arrays

TypeScript has a specific syntax for typing arrays.

Read more about arrays in our [JavaScript Array chapter](https://www.w3schools.com/js/js_arrays.asp).

**Example:**

```ts
const names: string[] = [];
names.push("Noyon"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

## Readonly

The `readonly` keyword can prevent arrays from being changed.

```ts
const names: readonly string[] = ["Noyon"];
names.push("Rahman"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
```

## Type Inference

TypeScript can infer the type of an array if it has values.

```ts
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
```
