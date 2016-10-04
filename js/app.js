var quotesBank = [{
    "quote": "For over a thousand generations, the Jedi were the guardians of peace and justice in the Old Republic.",
    "character": "Obi-Wan Kenobi"
}, {
    "quote": "Try not. Do, or do not. There is no try.",
    "character": "Yoda"
}, {
    "quote": "So this is how liberty dies...with thunderous applause.",
    "character": "Padme Amidala"
}, {
    "quote": "It's a TRAP!!!",
    "character": "Admiral Ackbar"
}, {
    "quote": "Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1!",
    "character": "C-3PO"
}, {
    "quote": "You can't stop change any more than you can stop the suns from setting",
    "character": "Shmi Skywalker"
}, {
    "quote": "I find your lack of faith disturbing.",
    "character": "Darth Vader"
}, {
    "quote": "Why, you stuck up, half-witted, scruffy-looking Nerf herder!",
    "character": "Princess Leia"
}, {
    "quote": "Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",
    "character": "Han Solo"
}, {
    "quote": "You failed, Your Highness. I am a Jedi, like my father before me.",
    "character": "Luke Skywalker"
}, {
    "quote": "I'm looking forward to completing your training. In time you will call *me* master.",
    "character": "Emperor Palpatine"
}];

var tweetButton = document.getElementById("tweet");
var quoteButton = document.getElementById("new-quote");

getQuote();

function getQuote() {
	var newQuote = document.getElementById("quote");
	var author = document.getElementById("author");
  var randomQuote = Math.floor(Math.random() * quotesBank.length);

  newQuote.textContent = quotesBank[randomQuote].quote;
  author.textContent = quotesBank[randomQuote].character;
}

quoteButton.addEventListener("click", function() {
  getQuote();
});

tweetButton.addEventListener("click", function(){
	var currentQuote = document.getElementById("quote");
	var currentAuthor = document.getElementById("author");
	window.open("https://twitter.com/intent/tweet?text=" + "\"" + currentQuote.textContent + "\"" + " - " + currentAuthor.textContent);
});