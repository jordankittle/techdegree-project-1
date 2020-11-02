/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//declare a global variable named quoteTimer. This is needed so it can be accessed or cleared from inside functions
var quoteTimer;

/*** 
 * `quotes` array
 * Contains quotes and associated information about each quote 
***/
let quotes = [
	{
		quote: "To love is to risk not being loved in return. To hope is to risk pain. To try is to risk failure, but risks must be taken, because the greatest hazard in life is to risk nothing.",
		source: "Leo Buscaglia",
		citation: "Living, Loving, and Learning",
		year: 1985,
		tags: 'love, pain, failure, risk, life'

	},
	{
		quote: "An individualist is a man who says: I'll not run anyone's life – nor let anyone run mine. I will not rule nor be ruled. I will not be a master nor a slave. I will not sacrifice myself to anyone – nor sacrifice anyone to myself.",
		source: "Ayn Rand",
		citation: "Textbook of Americanism",
		year: 1946,
		tags: 'integrity, life, philosophy'

	},
	{
		quote: "Integrity without knowledge is weak and useless, and knowledge without integrity is dangerous and dreadful.",
		source: "Samuel Johnson",
		citation: "The  History of Rasselas, Ch. 41",
		year: 1759,
		tags: 'integrity, knowledge'

	},
	{
		quote: "The free expression of the hopes and aspirations of a people is the greatest and only safety in a sane society.",
		source: "Emma Goldman",
		citation: "Living My Life",
		year: 1931,
		tags: 'aspiration, hope, freedom, society'

	},
	{
		quote: "He that can have patience can have what he will.",
		source: "Benjamin Franklin",
		citation: "Poor Richard's Almanack",
		year: 1736,
		tags: 'patience, hope'

	},
	{
		quote: "Friends are born, not made.",
		source: "Henry Adams",
		citation: "The Education of Henry Adams, Ch. VII",
		year: 1907,
		tags: 'friendship, life, fate'

	},
	{
		quote: "Wisdom makes but a slow defence against trouble, though at last a sure one.",
		source: "Oliver Goldsmith",
		citation: "The Vicar of Wakefield",
		year: 1766,
		tags: 'wisdom, life'

	},
	{
		quote: "Almost every wise saying has an opposite one, no less wise, to balance it.",
		source: "George Santayana",
		citation: "The Life of Reason, Vol. 5, Ch. 8",
		year: 1906,
		tags: 'wisdom, life'

	},
	{
		quote: "Because your own strength is unequal to the task, do not assume that it is beyond the powers of man; but if anything is within the powers and province of man, believe that it is within your own compass also.",
		source: "Marcus Aurelius",
		citation: "Meditations, VI, 19",
		tags: 'wisdom, life, challenge, strength'

	},
	{
		quote: "Be yourself; everyone else is already taken.",
		source: "Oscar Wilde",
		tags: 'inspiration, self'
	},
	{
		quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		source: "Dr. Seuss",
		tags: 'love, dreams'

	},
	{
		quote: "It does not do to dwell on dreams and forget to live.",
		source: "J.K. Rowling",
		citation: "Harry Potter and the Sorcerer's Stone",
		tags: 'dreams, life'

	},
	{
		quote: "Knowing yourself is the beginning of all wisdom.",
		source: "Aristotle",
		tags: 'wisdom, self'

	},
	{
		quote: "I became insane, with long intervals of horrible sanity.",
		source: "Edgar Allan Poe",
		tags: 'sanity'
	},
	{
		quote: "She was ready to deny the existence of space and time rather than admit that love might not be eternal.",
		source: "Simone de  Beauvoir",
		citation: "The Mandarins",
		tags: 'love, eternity, denial'
	}



];



/***
 * `getRandomQuote` function
 * Generates a random number between 0 and the length of the quotes array
 * A quote is returned from the quotes array by using the random number as the index to select from the array's elements
***/
function getRandomQuote(){

	let randomNumber = Math.floor( Math.random() * (quotes.length )  );
	return quotes[randomNumber];

}


/***
 * `printQuote` function
 * This function is called by clicking the 'Show Another Quote' button or every 10 seconds by JavaScript's SetInterval function
 * A quote object is pulled from the quotes array by calling the getRandomQuote function and storing it in the theQuote variable.
 * An html string containing the quote information is generated to be added to the page.
 * If additional information such as citations, years, and tags are available, aditional elements will be added to the string to display it.
 * The string is added to to the quote-box element of the page's HTML resulting in the display of the quote.
 * A new background color will be displayed for each new quote.
***/
function printQuote(){

	let theQuote = getRandomQuote();
	let html = `
		<p class="quote">${theQuote.quote}</p>
		<p class="source">${theQuote.source}
	`;

	if ( theQuote.citation !== undefined ){
		html += `<span class="citation">${theQuote.citation}</span>`;
	}
	
	if ( theQuote.year !== undefined ){
		html += `<span class="year">${theQuote.year}</span>`;
	}
	html += `</p>`;

	if ( theQuote.tags !== undefined ){
		html += `<span class="tags">${theQuote.tags}</span>`;
	}
	

	 changeBackgroundColor();
	
	//reset the timer so user has the full ten seconds to read it
	startTimer();
	


	

	document.getElementById('quote-box').innerHTML = html; 
	return html;

}

/***
 * `changeBackgroundColor` function
 * Generates a random RGB string and uses it to change the backgroun color of the page
 * Information not covered in unit 1 found at https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
***/

function changeBackgroundColor (){
	const randomColorValue = () => Math.floor( Math.random() * 256 );
	document.body.style.backgroundColor = `rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()})`;

}

//Set a timer to generate a new quote every 10 seconds. This timer will be reset every time the Show another quote button is clicked

function startTimer(){
	clearInterval(quoteTimer);
	quoteTimer = setInterval( printQuote, 10000  );

}
startTimer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);