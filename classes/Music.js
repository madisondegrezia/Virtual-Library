// import the Media class:
const Media = require('./Media.js');

// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length) {
        super(title, year, genre)
        this.artist = artist;
        this.length = length;
    }
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
    static shortestAlbum(music){
        return music.reduce((shortest, album) => {
            return (album.length < shortest.length) ? album : shortest;
        });
    }
}

// don't change below
module.exports = Music;
