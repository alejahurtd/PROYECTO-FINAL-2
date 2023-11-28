export default class Cancion {

    constructor(imagen, titulo, artista, album, año, duracion, letra, liked, id) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.artista = artista;
        this.album = album;
        this.año = año;
        this.duracion = duracion;
        this.letra = letra;
        this.liked = liked;
        this.id = id;
    }
    //Music
    render(contenedor) {
        const song = document.createElement("div")
        song.classList.add("song")
        contenedor.appendChild(song)

        //contenedor de info canciones
        const songContainer = document.createElement("div")
        songContainer.classList.add("songContainer")
        song.appendChild(songContainer)

        //redireccion a lyrics por la imagen
        const aHref = document.createElement('a');
        // aHref.href = './ruta'
        songContainer.appendChild(aHref)
        //imagen cancion
        const image = document.createElement("img")
        image.src = this.imagen
        aHref.appendChild(image)

        const songText = document.createElement('div')
        songText.classList.add("song__Text");
        songContainer.appendChild(songText)

        //titulo de la cancion
        const songTitlee = document.createElement('div')
        songTitlee.classList.add("song__Title");
        songText.appendChild(songTitlee)

        // aHref.href = './ruta'
        songTitlee.innerText = this.titulo
        songTitlee.addEventListener("click", this.lyrics.bind(this))

        //cantante
        const songSinger = document.createElement('div');
        songSinger.classList.add("song__singer")
        songSinger.innerText = this.artista
        songText.appendChild(songSinger)

        // contenedor de favoritos y tiempo de duracion de la cancion
        const songFavContainer = document.createElement('div')
        songFavContainer.classList.add('songFav__Container')
        song.appendChild(songFavContainer)

        let heart = null
        if (this.liked) {
            heart = "../assets/heart.png"
        } else {
            heart = "../assets/heart empty.png"
        }
        const favImg = document.createElement('img')
        favImg.classList.add('song__Fav')
        favImg.src = heart
        songFavContainer.appendChild(favImg)
        favImg.addEventListener("click", this.likedSong.bind(this))


        const time = document.createElement('div')
        time.classList.add('song__Time')
        time.innerText = this.duracion
        songFavContainer.appendChild(time)
    }

    lyrics() {
        console.log(this.id);
        window.location.href = './lyrics.html?id=' + this.id
    }

    likedSong() {
        let lista = this.loadSongs()
        this.liked = !this.liked;
        for (let i = 0; i < lista.playlist.length; i++) {
            if (lista.playlist[i].id == this.id) {
                lista.playlist[i].liked = this.liked
            }
        }
        console.log(this.liked);

        this.saveSongs(lista)

        const songs = document.getElementById("songs")
        songs.innerHTML = "";
        for (let i = 0; i < lista.playlist.length; i++) {
            let plantillaCancion = new Cancion(
                lista.playlist[i].imagen, lista.playlist[i].titulo, lista.playlist[i].artista, lista.playlist[i].album, lista.playlist[i].año, lista.playlist[i].duracion, lista.playlist[i].letra, lista.playlist[i].liked, lista.playlist[i].id
            )
            plantillaCancion.render(songs)
        }
    }
    //Liked Songs
    renderLiked(contenedor) {
        const song = document.createElement("div")
        song.classList.add("song")
        contenedor.appendChild(song)

        //contenedor de info canciones
        const songContainer = document.createElement("div")
        songContainer.classList.add("songContainer")
        song.appendChild(songContainer)

        //redireccion a lyrics por la imagen
        const aHref = document.createElement('a');
        // aHref.href = './ruta'
        songContainer.appendChild(aHref)
        //imagen cancion
        const image = document.createElement("img")
        image.src = this.imagen
        aHref.appendChild(image)

        const songText = document.createElement('div')
        songText.classList.add("song__Text");
        songContainer.appendChild(songText)

        //titulo de la cancion
        const songTitlee = document.createElement('div')
        songTitlee.classList.add("song__Title");
        songText.appendChild(songTitlee)

        // aHref.href = './ruta'
        songTitlee.innerText = this.titulo
        songTitlee.addEventListener("click", this.lyricsLiked.bind(this))

        //cantante
        const songSinger = document.createElement('div');
        songSinger.classList.add("song__singer")
        songSinger.innerText = this.artista
        songText.appendChild(songSinger)

        // contenedor de favoritos y tiempo de duracion de la cancion
        const songFavContainer = document.createElement('div')
        songFavContainer.classList.add('songFav__Container')
        song.appendChild(songFavContainer)

        let heart = null
        if (this.liked) {
            heart = "../assets/heart.png"
        } else {
            heart = "../assets/heart empty.png"
        }
        const favImg = document.createElement('img')
        favImg.classList.add('song__Fav')
        favImg.src = heart
        songFavContainer.appendChild(favImg)
        favImg.addEventListener("click", this.likedSongLiked.bind(this))


        const time = document.createElement('div')
        time.classList.add('song__Time')
        time.innerText = this.duracion
        songFavContainer.appendChild(time)
    }

    lyricsLiked() {
        console.log(this.id);
        window.location.href = '../../music/lyrics.html?id=' + this.id
    }

    likedSongLiked() {
        let lista = this.loadSongs()
        this.liked = !this.liked;
        for (let i = 0; i < lista.playlist.length; i++) {
            if (lista.playlist[i].id == this.id) {
                lista.playlist[i].liked = this.liked
            }
        }
        console.log(this.liked);

        this.saveSongs(lista)

        const songs = document.getElementById("songs")
        songs.innerHTML = "";
        for (let i = 0; i < lista.playlist.length; i++) {
            if (lista.playlist[i].liked) {
                let plantillaCancion = new Cancion(
                    lista.playlist[i].imagen, lista.playlist[i].titulo, lista.playlist[i].artista, lista.playlist[i].album, lista.playlist[i].año, lista.playlist[i].duracion, lista.playlist[i].letra, lista.playlist[i].liked, lista.playlist[i].id
                )
                plantillaCancion.renderLiked(songs)
            }
        }
    }
    // generales

    loadUsers() {
        let userList
        let loadedUsers = localStorage.getItem("user");
        if (loadedUsers !== null) {
            userList = JSON.parse(loadedUsers);
        };
        console.log("load users:", userList);
        return userList
    }

    saveUsers(userList) {
        let json = JSON.stringify(userList);
        localStorage.setItem("user", json);
    }

    findLoggedUser() {
        let loggedUser
        let userList = this.loadUsers()
        for (let index = 0; index < userList.length; index++) {
            if (userList[index].isLogged == true) {
                loggedUser = userList[index];
                console.log(loggedUser);
                return loggedUser;
            }
        }
    }
}

