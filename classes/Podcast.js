const Music = require("./Music.js");

// create your Podcast class:
class Podcast extends Music{
    constructor(title, year, genre, artist, length, host, episodeName, epidsodeNumber, guests){
        super(title, year, genre, artist, length)
        this.host = host;
        this.episodeName = episodeName;
        this.episodeNumber = epidsodeNumber;
        this.guests = guests;
    } 

    listen(){
        return `${this.title} - Episode: ${this.episodeName}. Hosted by ${this.host} and featuring guests ${this.guests}. Length: ${this.length} seconds.`;
    }
}

