// import the Media class:
const Media = require('./Media.js');

// create your Movie class:
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director = director;
        this.duration = duration;
        if (rating < 1 || rating > 5){
            throw new Error('Rating must be between 1 and 5')
        } else {
            this.rating = rating;}
}
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration:${this.duration}, Rating: ${this.rating}`;
    }

    static longestMovie(movies){
        return movies.reduce((longest, movie) => {
            return (movie.duration > longest.duration) ? movie : longest;
        });
    }

    static calculateAverageRating(movies){
        let sum = 0;
        for (let i = 0; i < movies.length; i++){
            sum += movies[i].rating;
        }
        return (sum / movies.length).toFixed(2);
    }
}
// don't change below
module.exports = Movie;