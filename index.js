// const express = require("express"); //3rd party package
// const { MongoClient } = require("mongodb"); // require is old import

import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 9000;

const books = [
  {
    id: "1",
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
    language: "english",
  },
  {
    id: "2",
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
    language: "english",
  },
  {
    id: "3",
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
    language: "tamil",
  },
  {
    id: "4",
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
    language: "tamil",
  },
  {
    id: "5",
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    language: "hindi",
  },
  {
    id: "6",
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
    language: "english",
  },
  {
    id: "7",
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
    language: "english",
  },
  {
    id: "8",
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
    language: "english",
  },
];

const MONGO_URL = "mongodb://localhost";

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected");
  return client;
}
const client = await createConnection();
//Rest API endpoints
//req - what we sent to server
//res - what server will send us back
app.get("/", (request, response) => {
  response.send("Hello Everyone have a great day🥳🥳😉😉");
});

//task
// /books - all the books ✅
// /books?language=english only english books ✅
// /books?language=english&rating=8 -> filter by language and rating ✅
// /books?rating=8  - only books with rating 8 ✅

//get books
app.get("/books", (request, response) => {
  const { language, rating } = request.query;
  console.log(request.query, language);
  let filteredBooks = books;
  if (language) {
    filteredBooks = filteredBooks.filter((bk) => bk.language == language);
  }
  if (rating) {
    filteredBooks = filteredBooks.filter((bk) => bk.rating == rating);
  }
  //   const book = books.filter((bk) => bk.language == language);
  response.send(filteredBooks);
});

//get book by ID
app.get("/books/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);
  //   const book = books.findOne((bk) => bk.id == id);
  const book = await client.db("b38we").collection("books").findOne({ id: id });
  response.send(book);
});

app.listen(PORT, () => console.log("Server started on port", PORT));
