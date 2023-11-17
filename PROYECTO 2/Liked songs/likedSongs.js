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
linkMusicPage.href = "../Music/music.html";
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

// Creación de sección de buscador y usuario
const searchAndUser = document.createElement('section');
searchAndUser.classList.add('searchAndUser');
content.appendChild(searchAndUser);

// Contenedor para el campo de búsqueda
const searchContainer = document.createElement('div');
searchContainer.classList.add('searchAndUser__searchContainer');
searchAndUser.appendChild(searchContainer);

// Campo de búsqueda
const searchInput = document.createElement('input');
searchInput.classList.add('searchAndUser__search');
searchInput.placeholder = 'Search';
searchInput.type = 'text';
searchContainer.appendChild(searchInput);

// Enlace a la página de perfil con el icono del usuario
const userProfileLink = document.createElement('a');
userProfileLink.href = '../Profile/Profile.html';
searchAndUser.appendChild(userProfileLink);

const userIconImg = document.createElement('img');
userIconImg.src = '../assets/icon profile.png';
userIconImg.alt = '';
userIconImg.classList.add('searchAndUser__userIcon');
userProfileLink.appendChild(userIconImg);

// titulos de canciones para ti, username, etc.

const contentTitles = document.createElement('section');
contentTitles.classList.add('contentTitle');
content.appendChild(contentTitles)

// titulo Songs you like
const songsYouLiked = document.createElement('div');
songsYouLiked.classList.add('mainTitle');
songsYouLiked.textContent = 'Songs You Like';
contentTitles.appendChild(songsYouLiked);

//subtitulo List
const list = document.createElement('div');
list.classList.add('listName');
list.textContent = 'List';
contentTitles.appendChild(list);

//subtitulo username
const username = document.createElement('div');
username.classList.add('username');
username.textContent = 'Username';
contentTitles.appendChild(username);

import Cancion from "../Utils/Utilscanciones.js";
//estamos llamando como una constante nuestro JSON
const playlist= "../Json/canciones.json"
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
contenedorLista.appendChild(songs)

async function getText(playlist) {
    let myObject = await fetch(playlist);
    lista = await myObject.json();

    //lammar la funcion crearCanciones
    crearCanciones()
    //para que pase por cada uno de los elementos del objeto    
    lista.playlist.forEach(element => {
        // renderSong(element)
    });
}

function crearCanciones() {
    for (let i = 0; i < lista.playlist.length; i++) {
        let plantillaCancion = new Cancion(
            lista.playlist[i].imagen, lista.playlist[i].titulo, lista.playlist[i].artista, lista.playlist[i].album, lista.playlist[i].año, lista.playlist[i].duracion, lista.playlist[i].letra, lista.playlist[i].heart, lista.playlist[i].liked, lista.playlist[i].id
        )
        console.log(plantillaCancion);
        plantillaCancion.render(songs)
    }
}

getText(playlist)

function lyrics(id) {
    let cancion = null
    for (let i = 0; i < lista.playlist.length; i++) {
        console.log(id)
        console.log(lista.playlist[i].id)
        if (id == lista.playlist[i].id) {
            cancion = lista.playlist[i]
        }
    }

    if (cancion == null) {
        alert("no hay nadita")
    } else {
        window.location.href = '../music/lyrics.html?id=' + cancion.id
    }

    
}
