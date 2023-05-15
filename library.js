import { question } from 'readline-sync'
import { readFile, writeFile } from 'node:fs/promises'

const file = 'books.json'

// Book object: { title, author }

console.log('** Welcome to the library **')
console.log('What do you want to do?')

console.log('1. View the catalogue')
console.log('2. Add a book')
console.log('0. Exit \n')

let input = question('Pick an option: ')

if( input === '1' ) {
	// Läs in hela bok-filen
	// Konvertera till JS-objekt med JSON
	// Visa alla böcker för användaren

	let books = await loadBooks(file)

	let sentence = ''
	if( books.length === 1 )
		sentence = `There is 1 book in the library: `
	else
		sentence = `There are ${books.length} books in the library: `
	console.log(sentence)
	
	books.forEach(book => {
		console.log(`- ${book.title} by ${book.author}`)
	})
	console.log('')

} else if( input === '2' ) {
	let title = question( 'Please input title:  ')
	let author = question('Please input author: ')
	let newBook = { title, author }

	// läs in hela filen
	// omvandla till JS-array
	// pusha nya boken
	// omvandla till JSON-sträng
	// spara strängen i filen

	let books = await loadBooks(file)
	books.push(newBook)
	saveBooks(file, books)
}

async function loadBooks(filename) {
	// Obs! readFile kastar ett error om filen inte finns. JSON.parse kastar error om datan inte är i JSON-format.
	try {
		let fileBuffer = await readFile(filename)
		let contents = fileBuffer.toString()
		return JSON.parse(contents)
	} catch(error) {
		console.log('ERROR: ' + error.message)
		return []
	}
}
async function saveBooks(filename, books) {
	let json = JSON.stringify(books)
	await writeFile(filename, json)
}