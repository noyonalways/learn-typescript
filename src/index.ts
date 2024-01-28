import { Player } from "./models/Player.js";

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const shakib = new Player("Shakib", 38, "Bangladesh");

// TODO: Interfaces

interface RectangleOptions {
	width: number;
	length: number;
}

function drawRectangle(options: RectangleOptions) {
	let width = options.width;
	let length = options.length;
}

drawRectangle({ width: 30, length: 40 });
