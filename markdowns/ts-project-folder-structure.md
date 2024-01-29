## TypeScript Project Folder Structure

```
my-project
|--src
| |--index.ts
|-dist
| |--index.js
|--node_modules
|--package.json
|--tsconfig.json
|--.gitignore
|--README.md
```

## Scripts

```json
{
	"scripts": {
		"start": "tsc -w && node dist/index.js",
		"dev": "nodemon -e ts -w src -x ts-node src/index.ts",
		"build": "tsc"
	}
}
```
