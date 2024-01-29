# TypeScript Node Express App Structure

```
ts-express-app
|-src
| |--index.ts
| |--app
| |--controllers
| |--services
| |--models
| |--routes
| |--db
| |--middlewares
| |--utils
| |--helpers
|--dist
| |--build-files-via-build-command
|--node_modules
|--package.json
|--tsconfig.json
|--.gitignore
|--.env
|--example.env
|--nodemon.json
|--README.md
```

## tsconfig.json

```json
{
	"compilerOptions": {
		"target": "ES2016",
		"module": "NodeNext",
		"moduleResolution": "node",
		"baseUrl": "src",
		"outDir": "./dist",
		"sourceMap": true,
		"noImplicitAny": true
	},
	"include": ["src/**/*"]
}
```

## package.json

```json
{
	"name": "ts-express-app",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "node dist/index.js",
		"dev": "nodemon",
		"build": "tsc"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@types/body-parser": "^1.19.2",
		"@types/compression": "^1.7.2",
		"@types/cookie-parser": "^1.4.3",
		"@types/cors": "^2.8.13",
		"@types/express": "^4.17.17",
		"@types/lodash": "^4.14.191",
		"@types/mongoose": "^5.11.97",
		"@types/node": "^18.13.0",
		"nodemon": "^2.0.20",
		"ts-node": "^10.9.1",
		"typescript": "^4.9.5"
	},
	"dependencies": {
		"body-parser": "^1.20.1",
		"compression": "^1.7.4",
		"cookie-parser": "^1.4.6",
		"cors": "^2.8.5",
		"express": "^4.18.2",
		"lodash": "^4.17.21",
		"mongoose": "^6.9.1"
	}
}
```

## nodemon.json

```json
{
	"watch": ["src"],
	"ext": ".ts,.js",
	"exec": "ts-node ./src/index.ts"
}
```

## Available commands

- Running commands with npm `npm run [command]`
- Running commands with yarn `yarn [command]`

| Command | Description                                |
| :------ | :----------------------------------------- |
| `start` | Starts the build app                       |
| `dev`   | Starts the development instance of the app |
| `build` | Build the app .ts to .js                   |
