
const playlist= "../Json/canciones.json"
let lista

async function getText(playlist){
    let myObject= await fetch(playlist);
    lista= await myObject.json();

    // for(let i=0; i<lista.playlist.length;i++){
    //     renderSong(lista.playlist[i])
    // }
    
    lista.playlist.forEach(element => {

        
            renderSong(element)
    
    });
}
const contenedorLista= document.getElementById("contenedorLista")
contenedorLista.classList.add("songs__Content")

const songTitle= document.createElement("p")
songTitle.innerText="Songs"
songTitle.classList.add("songs__Title")
contenedorLista.appendChild(songTitle)

const songs = document.createElement("div")
songs.classList.add("songs")
contenedorLista.appendChild(songs)

function renderSong (element) {
    const song = document.createElement("div")
    song.classList.add("song")
    songs.appendChild(song)

    const songContainer = document.createElement("div")
    songContainer.classList.add("songContainer")
    song.appendChild(songContainer)

    const aHref = document.createElement('a');
    // aHref.href = './ruta'
    songContainer.appendChild(aHref)

    const image = document.createElement("img")
    image.src = element.imagen
    aHref.appendChild(image)

    const songText = document.createElement('div')
    songText.classList.add("song__Text");
    songContainer.appendChild(songText)

    const songTitlee = document.createElement('div')
    songTitlee.classList.add("song__Title");
    songText.appendChild(songTitlee)

    const aHref2 = document.createElement('a')
    // aHref.href = './ruta'
    songTitlee.innerText = element.titulo
    songTitlee.appendChild(aHref2)

    const songSinger = document.createElement('div');
    songSinger.classList.add("song__singer")
    songSinger.innerText = element.artista
    songText.appendChild(songSinger)

    const songFavContainer = document.createElement('div')
    songFavContainer.classList.add('songFav__Container')
    song.appendChild(songFavContainer)

    const favImg = document.createElement('img')
    favImg.classList.add('song__Fav')
    // image.src = './imagen'
    songFavContainer.appendChild(favImg)

    const time = document.createElement('div')
    time.classList.add('song__Time')
    time.innerText = element.duracion
    songFavContainer.appendChild(time)
}

getText(playlist)

