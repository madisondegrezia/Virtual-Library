// Import classes here to console.log and debug
const Book = require("./classes/Book.js");
const Media = require("./classes/Media.js");

const book1 = new Book(
  "To Kill a Mockingbird",
  1960,
  "Fiction",
  "Harper Lee",
  281,
  4.4
);

const book2 = new Book(
  "The Bluest Eye",
  1970,
  "Fiction",
  "Toni Morrison",
  206,
  4.6
);

console.log(Book.calculateAverageRating([book1, book2]));

const book3 = new Media("The Catcher in the Rye", 1951, "Fiction");
const book4 = new Media("Abbey Road", 1969, "Rock");
console.log("ALL_MEDIA ARRAY: ", Media.ALL_MEDIA);
