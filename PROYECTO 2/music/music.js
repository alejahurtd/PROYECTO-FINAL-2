// Columna izquierda
const leftColumn = document.createElement('section');
leftColumn.classList.add("leftColumn");
document.body.appendChild(leftColumn);


const leftColumnText = document.createElement('div');
leftColumnText.classList.add("leftColumn__tex");
leftColumn.appendChild(leftColumnText);

// Redirección a la página de Music
const linkMusicPage = document.createElement('a');
linkMusicPage.classList.add("leftColumn__tex--nonedecoration");
linkMusicPage.href = '../Music/music.html';
linkMusicPage.textContent = 'Music';
leftColumnText.appendChild(linkMusicPage);

// Redirección a la página de Liked songs
const linkLikedSongsPage = document.createElement('a');
linkLikedSongsPage.classList.add("leftColumn__tex--nonedecoration");
linkLikedSongsPage.href = '../Liked songs/LikedSongs.html';
linkLikedSongsPage.textContent = 'Liked songs';
leftColumnText.appendChild(linkLikedSongsPage);

// Logo
const imgLogo = document.createElement('img');
imgLogo.src = '../Landing/imagenes/logo.png';
imgLogo.classList.add("spotifyLogo");
leftColumn.appendChild(imgLogo);

// Columna derecha

const content = document.createElement('section');
content.classList.add('content');
document.body.appendChild(content);

//Buscador y perfil
const searchAndUser = document.createElement('section');
searchAndUser.classList.add('searchAndUser');
content.appendChild(searchAndUser);

const searchIcon = document.createElement('div');
searchIcon.classList.add('searchAndUser__searchIcon');
searchAndUser.appendChild(searchIcon);

const searchIconImg = document.createElement('img');
searchIconImg.src = '../assets/icon search.png';
searchIconImg.classList.add('searchAndUser__searchIcon--icon');
searchIcon.appendChild(searchIconImg);

const searchBarInput = document.createElement('input');
searchBarInput.type = 'text';
searchBarInput.placeholder = 'What do you want to listen?';
searchBarInput.classList.add('searchAndUser__searchBar');
searchAndUser.appendChild(searchBarInput);

const userProfileLink = document.createElement('a');
userProfileLink.href = '../Profile/Profile.html';
searchAndUser.appendChild(userProfileLink);


const userIconImg = document.createElement('img');
userIconImg.src = '../assets/icon profile.png';
userIconImg.alt = '';
userIconImg.classList.add('searchAndUser__userIcon');
userProfileLink.appendChild(userIconImg);

import Cancion from "../Utils/Utilscanciones.js";
//estamos llamando como una constante nuestro JSON
const playlist = "../Json/canciones.json"
let lista

////se colocan arriba para que cuando llamemos las funciones encuentre donde ubircalos
//Cuadro negro grande que contine laista de canciones
const contenedorLista = document.getElementById("contenedorLista")
contenedorLista.classList.add("songs__Content")
content.appendChild(contenedorLista)

//Titulo SONG de la lista
const songTitle = document.createElement("p")
songTitle.innerText = "Songs"
songTitle.classList.add("songs__Title")
contenedorLista.appendChild(songTitle)

//Cuadro negro pequeño que hace scroll
const songs = document.createElement("div")
songs.classList.add("songs")
songs.id = "songs"
contenedorLista.appendChild(songs)

async function getText(playlist) {
    let myObject = await fetch(playlist);
    lista = await myObject.json();
    saveSongs()
    //lammar la funcion crearCanciones
    crearCanciones()
    //para que pase por cada uno de los elementos del objeto    
}

function crearCanciones() {
    loadSongs()
    for (let i = 0; i < lista.playlist.length; i++) {
        console.log("liked",lista.playlist[i].liked);
        let plantillaCancion = new Cancion(
            lista.playlist[i].imagen, lista.playlist[i].titulo, lista.playlist[i].artista, lista.playlist[i].album, lista.playlist[i].año, lista.playlist[i].duracion, lista.playlist[i].letra, lista.playlist[i].liked, lista.playlist[i].id
        )
        console.log(plantillaCancion);
        plantillaCancion.render(songs)
    }
}

function saveSongs() {
    let json = JSON.stringify(lista);
    localStorage.setItem("canciones", json);
}

function loadSongs() {
    let loadedSongs = localStorage.getItem("canciones");
    if (loadedSongs !== null) {
        lista = JSON.parse(loadedSongs);
    };
    console.log("load songs:", lista);
}

getText(playlist)
