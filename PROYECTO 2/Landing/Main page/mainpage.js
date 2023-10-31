
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
whoWeAre.href = '../who we are/Who We Are.html';
whoWeAre.textContent = 'Who we are';
menuText.appendChild(whoWeAre);

///Sign up
const signUpLink = document.createElement('a');
signUpLink.classList = ('menu__text');
signUpLink.href = './SignUp.html';
signUpLink.textContent = 'Sign Up';
menuText.appendChild(signUpLink);

////Log in
const logInLink = document.createElement('a');
logInLink.classList = ('menu__text');
logInLink.href = '../LogIn.html';
logInLink.textContent = 'Log In';
menuText.appendChild(logInLink);



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
  //lista de canciones
  const image = document.createElement("div")

  image.classList.add(element.class)
  const imagenCarrusel =document.createElement ("img")
  imagenCarrusel.src= element.src

  image.appendChild(imagenCarrusel)
  contenedor.appendChild(image)
}

const contenedor= document.createElement("section")
contenedor.classList.add("carrusel")
section.appendChild(contenedor)






// // Definir un array de objetos que representan las imágenes en el carrusel
// const carruselImages = [
//     {
//       link: "SignUp.html",
//       src: './images carrusel/imagen 1.png',
//       alt: "imagen 1",
//     },
//     {
//       src: './images carrusel/imagen 2.png',
//       alt: 'imagen 2',
//     },
//     {
//       link: 'LogIn.html',
//       src: './images carrusel/imagen 3.png',
//       alt: 'imagen 3',
//       class: 'carrusel__image--arreglos',
//     },
//     {
//       src: './images carrusel/imagen 4.png',
//       alt: 'imagen 4',
//       class: 'carrusel__image--arreglos',
//     },
//     {
//       link: 'LogIn.html',
//       src: './images carrusel/imagen 5.png',
//       alt: 'imagen 5',
//       class: 'carrusel__image--arreglos',
//     },
//   ];
  
  // // Función para crear un elemento div con imagen y enlace
  // function createElementWithLink(imageData) {
  //   const div = document.createElement("div");
  
  //   if (imageData.link) {
  //     const link = document.createElement("a");
  //     link.href = imageData.link;
  //     link.appendChild(createImage(imageData.src, imageData.alt, imageData.class));
  //     div.appendChild(link);} 
  //     else {div.appendChild(createImage(imageData.src, imageData.alt, imageData.class));
  //   }
  
  //   return div;
  // }
  
  // const createImage=(src, alt, className)=> {
  //   const image = document.createElement("img");
  //   image.src = src;
  //   image.alt = alt;
  //   if (className) {
  //     image.classList.add(className);}
  //   image.classList.add('carrusel__image');
  
  //   return image;
  // }
  
  // // Crear el carrusel
  // const carrusel = document.createElement('div');
  // carrusel.classList.add('carrusel');
  
  // // Agregar elementos al carrusel
  // carruselImages.forEach(imageData => {
  //   const carouselItem = createElementWithLink(imageData);
  //   carrusel.appendChild(carouselItem);
  // });
  
  // // Agregar el carrusel al documento (o al elemento que desees)
  // document.body.appendChild(carrusel);
  
//   // Crear la sección final
// const final = document.createElement('section');
// final.className = 'final';

// // Crear el div izquierdo
// const left = document.createElement('div');
// left.className = 'final__text--left';

// // Crear enlaces en el div izquierdo
// const legalLink = document.createElement('a');
// legalLink.className = 'final__text';
// legalLink.href = '#';
// legalLink.textContent = 'Legal';

// const privacyPolicyLink = document.createElement('a');
// privacyPolicyLink.className = 'final__text';
// privacyPolicyLink.href = '#';
// privacyPolicyLink.textContent = 'Privacy policy';

// const cookiesLink = document.createElement('a');
// cookiesLink.className = 'final__text';
// cookiesLink.href = '#';
// cookiesLink.textContent = 'Coockies';

// leftDiv.appendChild(legalLink);
// leftDiv.appendChild(privacyPolicyLink);
// leftDiv.appendChild(cookiesLink);

// // Crear el div derecho
// const rightDiv = document.createElement('div');
// rightDiv.className = 'final__text--right';

// // Crear párrafos en el div derecho
// const contactText = document.createElement('p');
// contactText.className = 'final__text';
// contactText.textContent = 'Contact';

// const telText = document.createElement('p');
// telText.className = 'final__text';
// telText.textContent = 'Tel: +1(908)209-2263';

// const mailText = document.createElement('p');
// mailText.className = 'final__text';
// mailText.textContent = 'Mail: supportspotify@gmail.com';

// rightDiv.appendChild(contactText);
// rightDiv.appendChild(telText);
// rightDiv.appendChild(mailText);

// // Agregar los divs al div final
// finalSection.appendChild(leftDiv);
// finalSection.appendChild(rightDiv);

// // Agregar la sección final al documento (o al elemento que desees)
// document.body.appendChild(finalSection);

  