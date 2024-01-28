"use strict";
// import { Player } from "./models/Player.js";
// const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
// const shakib = new Player("Shakib", 38, "Bangladesh");
// // DONE: Interfaces
// interface RectangleOptions {
// 	width: number;
// 	length: number;
// }
// function drawRectangle(options: RectangleOptions) {
// 	let width = options.width;
// 	let length = options.length;
// }
// drawRectangle({ width: 30, length: 40 });
// DONE: GENERICS
/* const addID = <T extends { name: string; age: number }>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({ name: "Mesh", age: 40, counnty: "BD" });
console.log(user); */
/* interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<object> = {
    status: 200,
    type: "good",
    data: {
        name: "New",
        text: "something",
    },
}; */
/* interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response2: APIResponse<string> = {
    status: 200,
    type: "good",
    data: "something",
}; */
// DONE: ENUM Types
/* enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN,
}

interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;
}

const response: APIResponse<string> = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: "test",
};

console.log(response) */
// DONE: TUPLES
/* let a = [2, "hello", { p: 3 }];

let b: [number, string, object] = [4, "world", { t: 1 }]; */
