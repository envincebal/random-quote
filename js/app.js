var quotesArray = [
		"For over a thousand generations, the Jedi were the guardians of peace and justice in the Old Republic.<footer class=\"text-right\" id=\"author\">Obi-Wan Kenobi</footer>",
		"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.<footer class=\"text-right\" id=\"author\">Yoda</footer>",
		"So this is how liberty dies...with thunderous applause.<footer class=\"text-right\" id=\"author\">Padme Amidala</footer>",
		"It's a TRAP!!!<footer class=\"text-right\" id=\"author\">Admiral Ackbar</footer>",
		"I'm rather embarrassed, General Solo. But it appears you are to be the main course at a banquet in my honor.<footer class=\"text-right\" id=\"author\">C-3PO</footer>",
		"You can't stop change any more than you can stop the suns from setting.<footer class=\"text-right\" id=\"author\">Shmi Skywalker</footer>",
		"Don't be too proud of this technological terror you have constructed. The ability to destroy a planet is insignificant next to the power of the Force.<footer class=\"text-right\" id=\"author\">Darth Vader</footer>",
		"Why, you stuck up, half-witted, scruffy-looking Nerf herder!<footer class=\"text-right\" id=\"author\">Princess Leia</footer>",
		"Hokey religions and ancient weapons are no match for a good blaster at your side, kid.<footer class=\"text-right\" id=\"author\">Han Solo</footer>",
		"You failed, Your Highness. I am a Jedi, like my father before me.<footer class=\"text-right\" id=\"author\">Luke Skywalker</footer>", 
		"I'm looking forward to completing your training. In time you will call *me* master.<footer class=\"text-right\" id=\"author\">Emperor Palpatine</footer>"
];


var tweetButton = document.getElementById("tweet");
var quoteButton = document.getElementById("new-quote");

getQuote();

function getQuote(){
	var newQuote = document.getElementById("quote");
	var randomQuote = Math.floor(Math.random() * quotesArray.length);
	console.log(randomQuote);
	return newQuote.innerHTML = quotesArray[randomQuote];
}

quoteButton.addEventListener("click", function(){
	 getQuote();
}) 