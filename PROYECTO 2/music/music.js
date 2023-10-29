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
const searchAndUser= document.createElement('section');
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


//estamos llamando como una constante nuestro JSON
const playlist= "../Json/canciones.json"
let lista

async function getText(playlist){
    let myObject= await fetch(playlist);
    lista= await myObject.json();
    
//para que pase por cada uno de los elementos del objeto    
    lista.playlist.forEach(element => {   
        renderSong(element)
    });
}

//Cuadro negro grande que contine laista de canciones
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
    songFavContainer.classList.add('songFav__Container')
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



