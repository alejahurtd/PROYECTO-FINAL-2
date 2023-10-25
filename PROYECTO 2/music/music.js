
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
const contenedorLista= document.getElementById("contenedor")

function render(lista){
    console.log(lista)
    const titulo = document.createElement("h1")
    titulo.innerText = lista.titulo
    titulo.classList.add("song__Title--text")
    contenedorLista.appendChild(titulo)
}



getText(playlist)

function holi () {
    console.log("holi")
}

holi()