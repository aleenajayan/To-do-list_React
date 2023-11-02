import React, { useState } from "react";
import "./quote.css";

function Quote() {
  let quotes = [];

  async function getquote() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    console.log(quotes);
  }

  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(select);
    console.log(Math.floor(Math.random() * quotes.length));
    setQuote(select);
  };
  function tweet() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        quote.text +
        "---- by" +
        quote.author,
      "Tweet Window",
      "width=600,height=300"
    );
  }

  getquote();
  return (
    <div class="container">
      <div class="box">
        <h1>Quote of the day</h1>
        <blockquote id="quote">{quote.text}</blockquote>
        <span id="author">{quote.author.split(",")[0]}</span>
        <div>
          <button onClick={random}>New Quote</button>
          <button class="tweet" onClick={tweet}>
            <img src="twt.png" alt="twitter" />
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
/* const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const api = "https://api.quotable.io/random";
    async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    https://type.fit/api/quotes*/
