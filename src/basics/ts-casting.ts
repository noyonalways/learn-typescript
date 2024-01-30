/**
 * TypeScript Casting
 * There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
 * Casting is the process of overriding a type.
 */

/**
 * Casting with as
 * A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
 */
let text: unknown = "hello";
console.log((text as string).length); // 5

/* Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable text1 is still holds a number. */
let text1: unknown = 4;
console.log((text1 as string).length); // prints undefined since numbers don't have a length

/* TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data: */
console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// The Force casting section below covers how to override this.

/**Casting with <>
 * Using <> works the same as casting with as.
 */
let text2: unknown = "hello";
console.log((<string>text2).length);
// This type of casting will not work with TSX, such as when working on React files.

/**
 * Force casting
 * To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
 */
let text3 = "hello";
console.log((text3 as unknown as number).length); // text3 is not actually a number so this will return undefined
