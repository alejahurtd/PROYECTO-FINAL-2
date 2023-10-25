
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


function render(lista){
const image = document.createElement("img")
image.src = lista.imagen
songs.appendChild(image)
    const titulo = document.createElement("a")
    titulo.innerText = lista.titulo
    titulo.classList.add("song__Title--text")
    songs.appendChild(titulo)

    console.log(lista)
}



getText(playlist)

function holi () {
    console.log("holi")
}

holi()