# TS Get Started

## TypeScript Compiler

TypeScript is transpiled into JavaScript using a compiler.

TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!

## 1. Installing the Compiler

TypeScript has an official compiler which can be installed through npm.

Learn more about npm, and how to get started here: What is [npm](https://www.w3schools.com/whatis/whatis_npm.asp)?

Within your npm project, run the following command to install the compiler:

### local install

```sh
npm install  typescript --save-dev
```

### Global Install

```sh
npm install -g typescript
```

Which should give you an output similar to:

added 1 package, and audited 2 packages in 2s found 0 vulnerabilities.

The compiler is installed in the `node_modules` directory and can be run with: `npx tsc`.

## 2. Check the version of TypeScript

```sh
tsc -v
```

Version 5.3.3

## 3. Configuring the compiler

By default the TypeScript compiler will print a help message when run in an empty project.

The compiler can be configured using a `tsconfig.json` file.

You can have TypeScript create `tsconfig.json` with the recommended settings with:

```sh
npx tsc --init
```

Which should give you an output similar to:

Created a new tsconfig.json with:

```sh
TS
target: es2016  
module: commonjs  
strict: true  e
sModuleInterop: true  
skipLibCheck: true  
forceConsistentCasingInFileNames: true
```

You can learn more at https://aka.ms/tsconfig.json

Here is an example of more things you could add to the tsconfig.json file:

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "CommonJS",
    "moduleResolution": "node",
    "baseUrl": "./src",
    "outDir": "./dist",
    "sourceMap": true,
    "noImplicitAny": true
  },
  "include": ["src/**/*"]
}
```

### Run TypeScript code

```sh
tsc
```

### Run in watch mode

```sh

tsc --watch
```

You can open the file in an editor to add those options. This will configure the TypeScript compiler to transpile TypeScript files located in the `src/` directory of your project, into JavaScript files in the `build/` directory.

### Checkout the TypeScript Node Express App Installation and folder structure

[TypeScript Node Express App Installation](../folder-structure/ts-node-express-app-structure.md)
