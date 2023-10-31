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


//estamos llamando como una constante nuestro JSON
const playlist= "../Json/canciones.json"
let lista

async function getText(playlist){
    let myObject= await fetch(playlist);
    lista= await myObject.json();
    
//para que pase por cada uno de los elementos del objeto    
    lista.playlist.forEach(element => {   
        if(element.liked){
            
            renderSong(element)
        }
    });
}

//Cuadro negro grande que contine la lista de canciones
const contenedorLista= document.getElementById("contenedorLista")
contenedorLista.classList.add("songs__Content")
content.appendChild(contenedorLista)

//Titulo SONG de la lista
const songTitle= document.createElement("p")
songTitle.innerText="Songs"
songTitle.classList.add("songs__Title")
contenedorLista.appendChild(songTitle)

//Cuadro negro pequeño que hace scroll
const songs = document.createElement("div")
songs.classList.add("songs")
contenedorLista.appendChild(songs)

function renderSong (element) {
    //lista de canciones
    const song = document.createElement("div")
    song.classList.add("song")
    songs.appendChild(song)

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
    image.src = element.imagen
    aHref.appendChild(image)

    const songText = document.createElement('div')
    songText.classList.add("song__Text");
    songContainer.appendChild(songText)

    //titulo de la cancion
    const songTitlee = document.createElement('div')
    songTitlee.classList.add("song__Title");
    songTitlee.addEventListener("click", function () { lyrics(element.id) })
    songText.appendChild(songTitlee)

    //redireccionar a lyrics por titulo de cancion
    const aHref2 = document.createElement('a')
    // aHref.href = './ruta'
    songTitlee.innerText = element.titulo
    songTitlee.appendChild(aHref2)

    //cantante
    const songSinger = document.createElement('div');
    songSinger.classList.add("song__singer")
    songSinger.innerText = element.artista
    songText.appendChild(songSinger)

// contenedor de favoritos y tiempo de duracion de la cancion
    const songFavContainer = document.createElement('div')
    songFavContainer.classList.add('song__Fav--Container')
    song.appendChild(songFavContainer)

    const favImg = document.createElement('img')
    favImg.classList.add('song__Fav')
    favImg.src = element.heart
    songFavContainer.appendChild(favImg)

    const time = document.createElement('div')
    time.classList.add('song__Time')
    time.innerText = element.duracion
    songFavContainer.appendChild(time)
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
