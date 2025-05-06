// create your Media class:
class Media {
  static totalMediaCount = 0;
  // an array that contains all Media objects created using the class
  static ALL_MEDIA = [];

  constructor(title, year, genre) {
    Media.totalMediaCount++;
    Media.ALL_MEDIA.push(this);
    this.title = title;
    this.year = year;
    this.genre = genre;
  }
  // tracks how many Media items have been created
  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

// uncomment below to export it:
module.exports = Media;
