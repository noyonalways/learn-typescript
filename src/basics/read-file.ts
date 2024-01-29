import fs from "fs";

const testFileContents: string = fs.readFileSync("test.txt", "utf-8");
const mySelf: object = {
  name: "Noyon Rahman",
  age: 25,
  bio: testFileContents,
};

console.log(mySelf);
