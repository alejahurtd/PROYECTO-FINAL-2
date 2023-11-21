export default class Usuarios {

    constructor(email, password, name, day, month, year, isLogged, likedSongs) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.day = day;
        this.month = month;
        this.year = year;
        this.isLogged = isLogged;
        this.likedSongs = likedSongs
    }
}