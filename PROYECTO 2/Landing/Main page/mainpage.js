
//*Navegador superior*
const section = document.createElement('section');
document.body.appendChild(section);

//  nav
const nav = document.createElement('nav');
nav.classList.add('nav');
section.appendChild(nav);

// logotipo
const menu = document.createElement('div');
menu.classList.add('menu'); 
nav.appendChild(menu);

const logo = document.createElement('img');
logo.classList.add('menu__image--logo'); 
logo.src = '../imagenes/logo.png';
menu.appendChild(logo);


// contenedor de texto del menú
const menuText = document.createElement('div');
menuText.classList.add('menu__text--position'); 
nav.appendChild(menuText);

// Crear los enlaces del menú
///Who we are
const whoWeAre = document.createElement('a');
whoWeAre.classList.add('menu__text'); 
whoWeAre.href = '../Who we are/Who we are.html';
whoWeAre.textContent = 'Who we are';
menuText.appendChild(whoWeAre);

///Sign up
const signUpLink = document.createElement('a');
signUpLink.classList = ('menu__text');
signUpLink.href = '../singUp/singUp.html';
signUpLink.textContent = 'Sign Up';
menuText.appendChild(signUpLink);

////Log in
const logInLink = document.createElement('a');
logInLink.classList = ('menu__text');
logInLink.href = '../Log In/LogIn.html';
logInLink.textContent = 'Log In';
menuText.appendChild(logInLink);

// CARRUSEL
//estamos llamando como una constante nuestro JSON
const carrusel = "../../json/carrusel.json";
let lista
async function getText(carrusel){
    let myObject= await fetch(carrusel);
    lista= await myObject.json();
    
//para que pase por cada uno de los elementos del objeto    
    lista.carruselImages.forEach(element => {  
      console.log(element) 
      renderCarrusel(element)
    });
}

getText(carrusel)

function renderCarrusel (element) {
  const image = document.createElement("div")
  image.classList.add(element.class)

  const imagenCarrusel =document.createElement ("img")
  imagenCarrusel.src= element.src

// evento click para que los links del JSON CARRUSEL funcionen

if(element.enlace){

  imagenCarrusel.addEventListener('click', function() {
    window.location.href = element.enlace;
  });
}
  image.appendChild(imagenCarrusel)
  contenedor.appendChild(image)
}

const contenedor= document.createElement("section")
contenedor.classList.add("carrusel")
section.appendChild(contenedor)



// INFO FINAL 

const finalSection = document.createElement('section');
finalSection.className = 'final';

// div de la izquierda
const leftDiv = document.createElement('div');
leftDiv.className = 'final__text--left';

// Crear los enlaces y agregar texto
const legalLink = document.createElement('a');
legalLink.className = 'final__text';
legalLink.href = '#';
legalLink.textContent = 'Legal';

const privacyPolicyLink = document.createElement('a');
privacyPolicyLink.className = 'final__text';
privacyPolicyLink.href = '#';
privacyPolicyLink.textContent = 'Privacy policy';

const cookiesLink = document.createElement('a');
cookiesLink.className = 'final__text';
cookiesLink.href = '#';
cookiesLink.textContent = 'Coockies';

// inyectar 
leftDiv.appendChild(legalLink);
leftDiv.appendChild(privacyPolicyLink);
leftDiv.appendChild(cookiesLink);

//  div  derecha
const rightDiv = document.createElement('div');
rightDiv.className = 'final__text--right';

// Texto
const contactParagraph = document.createElement('p');
contactParagraph.className = 'final__text';
contactParagraph.textContent = 'Contact';

const telParagraph = document.createElement('p');
telParagraph.className = 'final__text';
telParagraph.textContent = 'Tel: +1(908)209-2263';

const mailParagraph = document.createElement('p');
mailParagraph.className = 'final__text';
mailParagraph.textContent = 'Mail: supportspotify@gmail.com';

// Agregar al html
rightDiv.appendChild(contactParagraph);
rightDiv.appendChild(telParagraph);
rightDiv.appendChild(mailParagraph);

// Agglos divs a la sección final
finalSection.appendChild(leftDiv);
finalSection.appendChild(rightDiv);

// inyectar  al body 
document.body.appendChild(finalSection);

let userList = []

function loadUsers() {
  let loadedUsers = localStorage.getItem("user");
  if (loadedUsers !== null) {
      userList = JSON.parse(loadedUsers);
  };
  console.log("load users:", userList);
}
loadUsers(); //primera carga de users

function findLoggedUser() {
  let loggedUser
  for (let index = 0; index < userList.length; index++) {
      if (userList[index].isLogged == true) {
          loggedUser = userList[index];
          window.location.href = '../../music/music.html';
      }
  }
}

findLoggedUser()
