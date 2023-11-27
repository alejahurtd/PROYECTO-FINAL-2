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

//columna derecha engloba todo 
const container = document.createElement('section');
container.classList.add('container');
document.body.appendChild(container);

// cabezote de profile
const headerProfile = document.createElement('section');
headerProfile.classList.add('headerProfile');
container.appendChild(headerProfile);

//cerrar session
const exit = document.createElement('div');
exit.textContent = 'Exit';
exit.classList.add('exit');
headerProfile.appendChild(exit)
exit.addEventListener("click", logout)



// barra búsqueda

const searchIconImg = document.createElement('img');
searchIconImg.src = '../assets/icon search.png';
searchIconImg.classList.add('searchAndUser__searchIcon--icon');
searchIconImg.addEventListener("click", searchSong)
headerProfile.appendChild(searchIconImg);

const searchBarInput = document.createElement('input');
searchBarInput.type = 'text';
searchBarInput.placeholder = 'What do you want to listen?';
searchBarInput.classList.add('searchAndUser__search');
headerProfile.appendChild(searchBarInput);


// Contenedor de información del perfil
const userInfo = document.createElement('div');
userInfo.classList.add('headerProfile__userInfo');
headerProfile.appendChild(userInfo);

// Imagen del perfil
const profilePic = document.createElement('img');
profilePic.src = '../assets/profile green.png';
profilePic.alt = '';
profilePic.classList.add('headerProfile__profilePic');
userInfo.appendChild(profilePic);

// Contenedor para el texto del perfil
const profileText = document.createElement('div');
profileText.classList.add('headerProfile__profileText');
userInfo.appendChild(profileText);

// Elementos de texto del perfil
//titulo profile
const profileTitle = document.createElement('div');
profileTitle.classList.add('headerProfile__profileTitle');
profileTitle.textContent = 'Profile';
profileText.appendChild(profileTitle);

//subtitulo username
const username = document.createElement('div');
username.classList.add('headerProfile__username');
username.textContent = 'Username';
profileText.appendChild(username);

//informacion del usuario
const profileMusicInfo = document.createElement('div');
profileMusicInfo.classList.add('headerProfile__profileMusicInfo');
profileMusicInfo.textContent = '0 Public PlayList - 0 Followers - 0 Following';
profileText.appendChild(profileMusicInfo);

// cuadro negro grande que contiene nombre de la lista, subtitulos y canciones
const content = document.createElement('section');
content.classList.add('content');
container.appendChild(content)

// Nombre playlist
const topTracks = document.createElement('div');
topTracks.classList.add('topTracks');
topTracks.textContent = 'Top tracks this month';
content.appendChild(topTracks);

//subtitulo playlist
const OnlyVisibleToYou = document.createElement('div');
OnlyVisibleToYou.classList.add('visible');
OnlyVisibleToYou.textContent = 'Only visible to you';
content.appendChild(OnlyVisibleToYou);

//COMIENZA EL CONTENEDOR DE LAS CANCIONES
const songs = document.getElementById("songs");
songs.classList.add('songsContainer');
content.appendChild(songs);
//-------//

//estamos llamando como una constante nuestro JSON
import Cancion from "../Utils/Utilscanciones.js";
const playlist= "../Json/canciones.json"
let lista
let userList = [];

//Cuadro negro grande que contine laista de canciones
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

function logout() {
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            userList[index].isLogged = false;
            saveUsers();
            window.location.href = '../Landing/Main page/mainpage.html'
            //favoriteList = [];
            //saveFavorites();
        }
    }
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

updateHUD();
getText(playlist)



