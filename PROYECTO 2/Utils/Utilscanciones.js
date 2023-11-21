export default class Cancion {

    constructor(imagen, titulo, artista, album, año, duracion, letra, heart, liked, id) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.artista = artista;
        this.album = album;
        this.año = año;
        this.duracion = duracion;
        this.letra = letra;
        this.heart = heart;
        this.liked = liked;
        this.id = id;
    }

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

        const favImg = document.createElement('img')
        favImg.classList.add('song__Fav')
        favImg.src = this.heart
        songFavContainer.appendChild(favImg)

        const time = document.createElement('div')
        time.classList.add('song__Time')
        time.innerText = this.duracion
        songFavContainer.appendChild(time)
    }

    lyrics() {
        console.log(this.id);
        window.location.href = './lyrics.html?id=' + this.id
    }
}
