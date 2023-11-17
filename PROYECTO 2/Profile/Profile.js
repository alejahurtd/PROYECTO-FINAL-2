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

// barra búsqueda
const searchBarInput = document.createElement('input');
searchBarInput.type = 'text';
searchBarInput.classList.add('headerProfile__searchbar');
searchBarInput.placeholder = 'Search';
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
const songsContainer = document.getElementById("contenedorLista");
songsContainer.classList.add('songsContainer');
content.appendChild(songsContainer);
//-------//

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
//Cuadro negro grande que contine laista de canciones


function renderSong (element) {
    //lista de canciones
    const song = document.createElement("div")
    song.classList.add("song")
    songsContainer.appendChild(song)

    //contenedor de info canciones
    const songContainer = document.createElement("div")
    songContainer.classList.add("songContainer")
    song.appendChild(songContainer)


//imagen cancion
    const image = document.createElement("img")
    image.src = element.imagen
    songContainer.appendChild(image)

    const songText = document.createElement('div')
    songText.classList.add("song__Text");
    songContainer.appendChild(songText)

    //titulo de la cancion
    const songTitlee = document.createElement('div')
    songTitlee.classList.add("song__Title");
    songTitlee.innerText = element.titulo
    songTitlee.addEventListener("click", function () { lyrics(element.id) })
    songText.appendChild(songTitlee)

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






