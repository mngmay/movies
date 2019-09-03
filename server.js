// see a list of pre-populated movies
// add a movie to the list
// update movie information
// remove a movie
// see only released movies

const express = require("express");

const server = express();

let actors = [
  {
    id: 1,
    name: "Elijah Wood",
    movies: [1, 2]
  },
  { id: 2, name: "Chris Evans", movies: [4] }
];

let movies = [
  { id: 1, name: "The Fellowship of the Ring", released: true, rating: 5 },
  { id: 2, name: "The Two Towers", released: true, rating: 4 },
  { id: 3, name: "The Children of Hurin", released: false, rating: null },
  { id: 4, name: "Avengers Endgame", released: true, rating: 5 }
];

//sanity check endpoint
server.get("/", (req, res) => {
  res.status(200).json({ api: "up..." });
});

server.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

server.get("/api/actors", (req, res) => {
  res.status(200).json(actors);
});

// as a user of this api, I want an endpoint to see a list of actors

// export default server; //ES2015 modules
module.exports = server; // CommonJS modules (node modules)

//adding one by one - do this method OR the one above, not both
// exports.add = (a, b) => {
//   return a + b;
// };

// exports.secret = "keep it secret, keep it safe!";
