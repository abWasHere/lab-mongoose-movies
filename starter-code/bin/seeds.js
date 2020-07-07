/* require("dotenv").config(); */
require("./../app");

const movieModel = require("./../models/Movie");

const movie = [
  {
    title: "Ada",
    genre: "drama",
    plot: "everyone is dying",
  },
  {
    title: "Jill Fresh Revenge",
    genre: "comedy",
    plot: "everyone is laughing",
  },
  {
    title: "Savage revenge",
    genre: "thriller",
    plot: "scary things happening",
  }
];

movieModel.insertMany(movie)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));


/* 
const celebrityModel = require("./../models/Celebrity");

const celebrities = [
  {
    name: "Ada Lovelace",
    occupation: "actress",
    catchPhrase: "Ada is beautiful",
  },
  {
    name: "Doug Crockford",
    occupation: "singer",
    catchPhrase: "Have a wonderful voice",
  },
  {
    name: "Jill Fresh",
    occupation: "model",
    catchPhrase: "have gorgeous ass",
  },
 
];

celebrityModel.insertMany(celebrities)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));
 */