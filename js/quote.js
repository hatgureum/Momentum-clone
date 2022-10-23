const quotes = [
  {
    quote:
      "“Spread love everywhere you go. Let no one ever come to you without leaving happier.”",
    author: "Mother Teresa",
  },
  {
    quote:
      "“When you reach the end of your rope, tie a knot in it and hang on.”",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "“Always remember that you are absolutely unique. Just like everyone else.”",
    author: "Margaret Mead",
  },
  {
    quote:
      "“Don't judge each day by the harvest you reap but by the seeds that you plant.”",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "“The future belongs to those who believe in the beauty of their dreams.”",
    author: "Eleanor Roosevelt",
  },
];

const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

const box = document.querySelector(".quote");
const quote = document.querySelector(".quote__quote");
const author = document.querySelector(".quote__author");

function onMouseEnter() {
  author.classList.remove("hidden");
}

function onMouseLeave() {
  author.classList.add("hidden");
}

author.classList.add("hidden");

quote.innerText = selectedQuote.quote;
author.innerText = selectedQuote.author;

box.addEventListener("mouseenter", onMouseEnter);
box.addEventListener("mouseleave", onMouseLeave);
