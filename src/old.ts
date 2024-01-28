// function multiply(a: number, b: number) {
// 	return a * b;
// }

// console.log(multiply(2, 4));

// DONE: array
// let mixed = ["apple", "orange", 3, true];
// mixed.push("noyon");

// object

// let person = {
// 	name: "Noyon",
// 	age: 20,
// 	isStudent: true,
// };

// person.name = "Noyon Rahman";
// person.country = "Bangladesh";

// let names: string[] = [];
// names.push("Noyon");

// console.log(names);

// DONE: union type
// let a: (string | number)[] = [];
// a.push("apple", 45);

// DONE: object type
// let student: {
// 	name: string;
// 	age: number;
// 	isStudent: boolean;
// };

// student = {
// 	name: "Noyon",
// 	age: 20,
// 	isStudent: true,
// };

// console.log(student);

// DONE: dynamic type
// let a: any;

// a = 5;
// a = "noyon";

// let a: any[] = [];
// a.push("apple");
// a.push(35);

// let b: {
// 	name: any;
// 	age: any;
// };

// b = {
// 	name: "noyon",
// 	age: 20,

// };

// DONE: How to use functions

/**
 * TypeScript functions by default return void if there is no return ;
 * JavaScript functions by default return undefined if there is no return ;
 * void is not equal undefined
 * void means absent value
 * undefined it self is a value in JS
 */
// let newFunc: Function;
// const myFunc = (a: string, b: string, c: string = "C") => {
// 	console.log(`Hello ${a}, ${b}, ${c}`);
// };

// myFunc("A", "B");

// DONE: Type Aliases
// type stringOrNumber = string | number;
// type userType = { name: string; age: number };

// const userDetails = (id: stringOrNumber, user: userType) => {
// 	console.log(`user id is ${id}, name is ${user.name} and age is: ${user.age}`);
// };

// const sayHello = (user: userType) => {
// 	console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
// };

// sayHello({ name: "Noyon", age: 20 });

// DONE: Function Signature
// let add: (x: number, y: number) => number;

// add = (a: number, b: number) => {
// 	return a + b;
// };

/* let calculation: (number1: number, number2: number, type: string) => number;

calculation = (number1: number, number2: number, type: string) => {
	if (type === "add") {
		return number1 + number2;
	} else {
		return number1 - number2;
	}
};

console.log(calculation(8, 4, "minus"));

let userDetails: (
	id: number | string,
	userInfo: {
		name: string;
		age: number;
	}
) => void;

userDetails = (
	id: number | string,
	user: {
		name: string;
		age: number;
	}
) => {}; */

// DONE: Working with Classes
/* class Player {
	name: string;
	age: number;
	country: string;

	constructor(n: string, a: number, c: string) {
		this.name = n;
		this.age = a;
		this.country = c;
	}

	play() {
		console.log(`${this.name} from ${this.country} is playing!`);
	}
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const shakib = new Player("Shakib", 40, "Bangladesh");

const players: Player[] = [];
players.push(shakib, mashrafi);
console.log(players); */

// DONE: Classes Access Modifiers
/* class Player {
	constructor(
		public name: string,
		private age: number,
		readonly country: string
	) {}

	play() {
		console.log(`${this.name} from ${this.country} is playing!`);
	}
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const shakib = new Player("Shakib", 40, "Bangladesh");

console.log(shakib); */

// DONE: Module System
