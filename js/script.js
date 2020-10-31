/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
	{
		quote: "To love is to risk not being loved in return. To hope is to risk pain. To try is to risk failure, but risks must be taken, because the greatest hazard in life is to risk nothing.",
		source: "Leo Buscaglia",
		citation: "Living, Loving, and Learning",
		year: 1985,
		tags: ['love', 'pain', 'failure', 'risk', 'life']

	},
	{
		quote: "An individualist is a man who says: I'll not run anyone's life – nor let anyone run mine. I will not rule nor be ruled. I will not be a master nor a slave. I will not sacrifice myself to anyone – nor sacrifice anyone to myself.",
		source: "Ayn Rand",
		citation: "Textbook of Americanism",
		year: 1946,
		tags: ['integrity', 'life', 'philosophy']

	},
	{
		quote: "Integrity without knowledge is weak and useless, and knowledge without integrity is dangerous and dreadful.",
		source: "Samuel Johnson",
		citation: "The  History of Rasselas, Ch. 41",
		year: 1759,
		tags: ['integrity', 'knowledge']

	},
	{
		quote: "The free expression of the hopes and aspirations of a people is the greatest and only safety in a sane society.",
		source: "Emma Goldman",
		citation: "Living My Life",
		year: 1931,
		tags: ['aspiration', 'hope','freedom','society']

	},
	{
		quote: "He that can have patience can have what he will.",
		source: "Benjamin Franklin",
		citation: "Poor Richard's Almanack",
		year: 1736,
		tags: ['patience', 'hope']

	},
	{
		quote: "Friends are born, not made.",
		source: "Henry Adams",
		citation: "The Education of Henry Adams, Ch. VII",
		year: 1907,
		tags: ['friendship', 'life', 'fate']

	}
];
console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

	let randomNumber = Math.floor( Math.random() * (quotes.length )  );
	return quotes[randomNumber];

}


/***
 * `printQuote` function
***/
function printQuote(){

	let theQuote = getRandomQuote();
	let html = `
		<p class="quote">"${theQuote.quote}"</p>
		<p class="source">${theQuote.source}
	`;
	
	if ( theQuote.citation !== undefined ){
		html += `<span class="citation">${theQuote.citation}</span>`;
	}
	if ( theQuote.year !== undefined ){
		html += `<span class="year">${theQuote.year}</span>`;
	}
	html += `</p>`;
	console.log(html);
	document.getElementById('quote-box').innerHTML = html; 
	return html;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);