// import the Media class:
const Media = require("./Media.js");

// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    // rating must be a number between 1-5
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be a number between 1-5");
    }
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static highestRating(bookArr) {
    if (!bookArr || bookArr.length === 0) {
      return undefined;
    }
    let highest = bookArr[0];
    for (let i = 1; i < bookArr.length; i++) {
      if (bookArr[i].rating > highest.rating) {
        highest = bookArr[i];
      }
    }
    return highest;
  }

  static calculateAverageRating(bookArr) {
    let sum = 0;
    for (let i = 0; i < bookArr.length; i++) {
      sum += bookArr[i].rating;
    }

    return (sum / bookArr.length).toFixed(2);
  }
}
// don't change below
module.exports = Book;
