const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const tweetMe = document.getElementById("tweetMe");

let realData = "";
let quotesData = "";
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let randNum = Math.floor(Math.random() * 400);
    quotesData = realData[randNum];
    quotes.innerHTML = `${realData[randNum].text}`;
    if (quotesData.author == null) {
        author.innerHTML = "unknown";
    } else {

        author.innerHTML = `${realData[randNum].author}`;
    }


}
const getQuotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();



    } catch (error) {}
}
tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();