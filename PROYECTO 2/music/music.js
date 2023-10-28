
const playlist= "../json/canciones.json"
let lista

async function getText(playlist){
    let myObject= await fetch(playlist);
    lista= await myObject.json();

    for(let i=0; i<lista.playlist.length;i++){
        //console.log(lista.playlist[i].titulo)
        //console.log(lista.playlist[i].artista)
        render(lista.playlist[i])
    }
    
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

const song = document.createElement("div")
song.classList.add("song")
songs.appendChild(song)

const songContainer = document.createElement("div")
songContainer.classList.add("songContainer")
song.appendChild(songContainer)




function render(lista){
    
    const image = document.createElement("img")
    image.src = lista.imagen
    image.href = 
    image.classList.add("songContainer")
    songContainer.appendChild(image)

    const artista = document.createElement("a")
    artista.innerText = lista.artista
    artista.classList.add("song__singer")
    songContainer.appendChild(artista)

    
    const titulo = document.createElement("a")
    titulo.innerText = lista.titulo
    titulo.classList.add("song__Title--text")
    songContainer.appendChild(titulo)

    console.log(lista)
}



getText(playlist)

function holi () {
    console.log("holi")
}

holi()