# TS Introduction

## Why should I use TypeScript?

JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

<div style='background: #9e5851'>
TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
</div>

## How do I use TypeScript?

A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

The next section shows how to get the compiler setup for a local project.

Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!
