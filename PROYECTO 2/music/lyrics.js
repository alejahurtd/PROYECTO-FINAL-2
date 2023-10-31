// aqui vamos a empezar hacer la plantilla para las canciones
//estamos llamando como una constante nuestro JSON
const playlist = "../Json/canciones.json"
let lista

async function getText(playlist) {
    let myObject = await fetch(playlist);
    lista = await myObject.json();

    //para que pase por cada uno de los elementos del objeto    
    // lista.playlist.forEach(element => {
    //     renderSong(element)
    // });
}

function findSong(id) {
    let cancion = null

    for (let i = 0; i < lista.playlist.length; i++) {
        if (id == lista.playlist[i].id) {
            cancion = lista.playlist[i]
        }
    }

    if (cancion == null) {
        alert("no hay nadita")
    } else {
        return cancion
    }
}

function renderLyrics(song) {
    const songsContent = document.getElementById("songsContent")
    songsContent.classList.add("songs__Content")

    const song1 = document.createElement("div")
    song1.classList.add("song")
    songsContent.appendChild(song1)

    const songContainer = document.createElement("div")
    songContainer.classList.add("songContainer")
    song1.appendChild(songContainer)

    const image = document.createElement("img")
    image.src = song.imagen
    songContainer.appendChild(image)

    const songText = document.createElement('div')
    songText.classList.add("song__Text");
    songContainer.appendChild(songText)

    const songTitlee = document.createElement('p')
    songTitlee.classList.add("song__Title");
    songTitlee.innerText = song.titulo
    songText.appendChild(songTitlee)

    const songSinger = document.createElement('p');
    songSinger.classList.add("song__singer")
    songSinger.innerText = `${song.artista} - ${song.album} - ${song.año}`
    songText.appendChild(songSinger)

    const songTime = document.createElement('P');
    songTime.classList.add("song__singer")
    songTime.innerText = song.duracion
    songText.appendChild(songTime)

    const actions = document.createElement("div")
    actions.classList.add("actions")
    songsContent.appendChild(actions)

    const actionButtons = document.createElement("div")
    actionButtons.classList.add("actionButtons")
    actions.appendChild(actionButtons)

    const playIcon = document.createElement("img")
    playIcon.classList.add("button__play")
    playIcon.src = "../assets/play Icon.png"
    actionButtons.appendChild(playIcon)

    const heartIcon = document.createElement("img")
    heartIcon.classList.add("button__fav")
    heartIcon.src = "../assets/heart.png"
    actionButtons.appendChild(heartIcon)

    const lyrics = document.createElement("div")
    lyrics.classList.add("lyrics")
    lyrics.innerText = "Lyrics"
    actions.appendChild(lyrics)

    const lyricsText = document.createElement("div")
    lyricsText.classList.add("Lyrics__text")
    lyricsText.innerText = song.letra
    actions.appendChild(lyricsText)





        

    console.log(song)
    
}






async function updateDetails() {
    await getText(playlist)
    let params = new URLSearchParams(window.location.search);
    let songId = params.get('id');
    let song = findSong(songId);
    renderLyrics(song);
}
updateDetails()


