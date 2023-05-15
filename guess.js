// skapa hemligt nummer
// be om en gissning
// kontrollera resultatet - ge feedback
// om man gissat rätt - avsluta
// annars - upprepa
import { question } from 'readline-sync'

let secret = Math.floor( Math.random() * 100) + 1
let guessedCorrect = false
let numberOfGuesses = 0

while( !guessedCorrect ) {
	console.log('Guess a number between 1 and 100!')
	let guess = Number( question('Guess: ') )
	numberOfGuesses++

	if( guess === secret ) {
		console.log(`Congratulations! You guessed the secret ${secret} in ${numberOfGuesses} tries!`)
		guessedCorrect = true
	}
	else if( guess < secret ) {
		console.log('Too low!')
	}
	else {
		console.log('Too high!')
	}
}

/*
4* Skriv ett nytt skript som spelar "gissa talet" med användaren. Reglerna är:
Spelet slumpar ett hemligt tal mellan 1 och 100.
Spelet ber spelaren gissa talet. (Skriptet räknar antalet gissningar.)
Om spelaren gissar rätt, ska programmet gratulera och visa antalet gissningar.
Om spelaren gissar fel, ska programmet tala om ifall det hemliga talet är större eller mindre än det gissade. Sedan upprepar skriptet från steg 2.
*/