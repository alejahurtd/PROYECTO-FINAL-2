// //BARRA DE NAVEGACIÓN 

// //  Secction pricipal del HTML y creamos el elemento NAV
// const navegadorBarra = document.getElementById('navegador');
// const nav = document.createElement('nav');
// nav.className = 'nav';

// // elemento 'div' con la clase 'menu'
// const menu = document.createElement('div');
// menu.className = 'menu';

// // logotipo
// const logoImage = document.createElement('img');
// logoImage.className = 'menu__image--logo';
// logoImage.src = '../imagenes/logo.png';
// logoImage.alt = 'Logo';

// //  segundo 'div' con la clase 'menu__text--position'
// const textPosition = document.createElement('div');
// textPosition.className = 'menu__text--position';

// // Crear enlaces 'a' para la barra de nav
// const whoWeAreLink = document.createElement('a');
// whoWeAreLink.className = 'menu__text';
// whoWeAreLink.href = './WhoWeAre.html';
// whoWeAreLink.textContent = 'Who we are';

// const signUpLink = document.createElement('a');
// signUpLink.className = 'menu__text';
// signUpLink.href = './SignUp.html';
// signUpLink.textContent = 'Sign Up';

// const logInLink = document.createElement('a');
// logInLink.className = 'menu__text';
// logInLink.href = './LogIn.html';
// logInLink.textContent = 'Log In';

// // inyectamos al html
// menu.appendChild(logoImage);
// textPosition.appendChild(whoWeAreLink);
// textPosition.appendChild(signUpLink);
// textPosition.appendChild(logInLink);

// nav.appendChild(menu);
// nav.appendChild(textPosition);

// navegadorBarra.appendChild(nav);


// PARTE CENTRAL NUESTRA INFORMACIÓN 

// Obtén el elemento principal donde deseas inyectar el contenido
const cuadroGlobal = document.getElementById("elCuadroGlobal");


// div para el contenido
const contenidoDivIzquierdo = document.createElement("div");
contenidoDivIzquierdo.classList.add("cuadroglobal__vertical");

// contenido para la parte izquierda
const perfilIzquierda = document.createElement("div");
perfilIzquierda.classList.add("perfil__possition");

const imagenIzquierda = document.createElement("img");
imagenIzquierda.classList.add("perfil__imagen");
imagenIzquierda.src = "../imagenes/foto maira.png";
imagenIzquierda.alt = "";
perfilIzquierda.appendChild(imagenIzquierda);

const divTextoIzquierda = document.createElement("div");


const textoIzquierda = document.createElement("p");
textoIzquierda.classList.add("perfil__texto");
textoIzquierda.textContent = "Alejandra H.";
divTextoIzquierda.appendChild(textoIzquierda); // Debes agregar el elemento de texto a divTextoIzquierda

perfilIzquierda.appendChild(divTextoIzquierda);
contenidoDivIzquierdo.appendChild(perfilIzquierda);

cuadroGlobal.appendChild(contenidoDivIzquierdo);

// contenido para la parte central

const centro = document.createElement("div");
centro.classList.add("cuadroglobal__centro");

const weText = document.createElement("div");
weText.innerHTML = "<p class='texto__centro--we'>WE</p>";
centro.appendChild(weText);

const areText = document.createElement("div");
areText.innerHTML = "<p class='texto__centro--are'>ARE</p>";
centro.appendChild(areText);

const infoText = document.createElement("div");
infoText.innerHTML = `
    <p class='texto__centro--info'>"We are Alejandra Hurtado and <br/>
    Geraldine Sastoque, two music lovers<br/>
    who wants to share their passion with <br/>
    the world. We are marketers and <br/>
    interactive media designers, graduates <br/>
    of ICESI University in Colombia"</p>
`;
centro.appendChild(infoText);
cuadroGlobal.appendChild(centro);

//___________

//  contenido para la parte derecha
const contenidoDivDerecho = document.createElement("div");
contenidoDivDerecho.classList.add("cuadroglobal__vertical");

const perfilDerecha = document.createElement("div");
perfilDerecha.classList.add("perfil__possition");

const imagenDerecha = document.createElement("img");
imagenDerecha.classList.add("perfil__imagen");
imagenDerecha.src = "../imagenes/foto geri.png";
imagenDerecha.alt = "";
perfilDerecha.appendChild(imagenDerecha);

const divTextoDerecha = document.createElement("div");

const textoDerecha = document.createElement("p");
textoDerecha.classList.add("perfil__texto");
textoDerecha.textContent = "Geraldine S.";
divTextoDerecha.appendChild(textoDerecha); // Debes agregar el elemento de texto a divTextoIzquierda

perfilDerecha.appendChild(divTextoDerecha);
contenidoDivDerecho.appendChild(perfilDerecha);

cuadroGlobal.appendChild(contenidoDivDerecho);



