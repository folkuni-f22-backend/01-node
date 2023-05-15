import { readFile } from 'node:fs/promises'

// readFile returnerar en Buffer
// Buffer har funktionen toString()
// toString anropas automatiskt när man typomvandlar till en sträng
let contents = String(await readFile('guess.js'))
console.log('Here are the contents of guess.js:')
console.log(contents)
