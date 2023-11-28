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

const searchIcon = document.createElement('div');
searchIcon.classList.add('searchAndUser__searchContainer');
searchAndUser.appendChild(searchIcon);

const searchIconImg = document.createElement('img');
searchIconImg.src = '../assets/icon search.png';
searchIconImg.classList.add('searchAndUser__searchIcon--icon');
searchIconImg.addEventListener("click", searchSong)
searchIcon.appendChild(searchIconImg);

const searchBarInput = document.createElement('input');
searchBarInput.type = 'text';
searchBarInput.placeholder = 'search';
searchBarInput.classList.add('searchAndUser__search');
searchAndUser.appendChild(searchBarInput);

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
let userList = [];

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
    let loggedUser = findLoggedUser()
    console.log("Logged User", loggedUser)
    if (loggedUser.likedSongs == "") {
        let myObject = await fetch(playlist);
        lista = await myObject.json();
    } else {
        loadSongs()
    }
    saveSongs()
    //lammar la funcion crearCanciones
    crearCanciones()
    console.log(lista);
    //para que pase por cada uno de los elementos del objeto    
}

function crearCanciones() {
    loadSongs()
    for (let i = 0; i < lista.playlist.length; i++) {
        if (lista.playlist[i].liked) {
            let plantillaCancion = new Cancion(
                lista.playlist[i].imagen, lista.playlist[i].titulo, lista.playlist[i].artista, lista.playlist[i].album, lista.playlist[i].año, lista.playlist[i].duracion, lista.playlist[i].letra, lista.playlist[i].liked, lista.playlist[i].id
            )
            console.log(plantillaCancion);
            plantillaCancion.renderLiked(songs)
        }
    }
}

function saveSongs() {
    let json = JSON.stringify(lista);
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            userList[index].likedSongs = json;
        }
    }
    saveUsers()
}

function loadSongs() {
    let loggedUser = findLoggedUser()
    let loadedSongs = loggedUser.likedSongs;
    if (loadedSongs !== null) {
        lista = JSON.parse(loadedSongs);
    };
    console.log("load songs:", lista);
}

function loadUsers() {
    let loadedUsers = localStorage.getItem("user");
    if (loadedUsers !== null) {
        userList = JSON.parse(loadedUsers);
    };
    console.log("load users:", userList);
}
loadUsers(); //primera carga de users

function saveUsers() {
    let json = JSON.stringify(userList);
    localStorage.setItem("user", json);
}

function findLoggedUser() {
    let loggedUser
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            loggedUser = userList[index];
            return loggedUser;
        }
    }
}

function updateHUD() {
    let loggedUser = findLoggedUser();
    console.log(loggedUser);
    username.textContent = loggedUser.name;
}
updateHUD();

function searchSong() {
    console.log("Search:", searchBarInput.value);
    console.log(lista);
    let id = null
    for (let i = 0; i < lista.playlist.length; i++) {
        if (lista.playlist[i].titulo.toLowerCase() == searchBarInput.value.toLowerCase()) {
            id = lista.playlist[i].id
        }
    }
    if (id == null) {
        alert("No se encontro nada")
    } else {
        console.log(this.id);
        window.location.href = '../music/lyrics.html?id=' + id
    }
}

getText(playlist)
