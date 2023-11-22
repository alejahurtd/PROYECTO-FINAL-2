import Usuarios from "../../Utils/Utilsusuarios.js"

let userList = [];

const email = document.getElementById("email")
const password = document.getElementById("password")
const name = document.getElementById("name")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")


const signUpBtn = document.getElementById("signUp");
signUpBtn.addEventListener("click", signUp)


function signUp() {
    if (validateEmail(email.value)) {
        return;
    } else {
        let nuevoUsuario = new Usuarios(
            email.value, password.value, name.value, day.value, month.value, year.value, true, ""
        )
        userList.push(nuevoUsuario);
        saveUsers();
        console.log("new user", nuevoUsuario.name, "saved")
        console.log(nuevoUsuario);
        window.location.href = "../../music/music.html"
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

function validateEmail(email) {
    if (email == "") {
        alert("Your email cannot be left empty");
        return true;
    }
    if (email.includes("@") && email.includes(".")) {
        for (let index = 0; index < userList.length; index++) {
            console.log(index, userList[index].email)
            if (userList[index].email == email) {
                alert("This email is already in use")
                return true
            }
        }
        return false
    } else
        alert("You have entered an invalid email address")
    return true
}