let userList = [];

const email = document.getElementById("email")
const password = document.getElementById("password")


const logInBtn = document.getElementById("logIn");
logInBtn.addEventListener("click", login)



function login() {
    console.log(email.value, password.value);
    if (validateEmail()) {
        return;
    } else if (validatePassword(password, email)) {
        return;
    } else {
        updateUser();
        window.location.href = '../../music/music.html'
    }
        // Navego a la main
    // TODO: Handle error

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

function validateEmail() {
    if (email == "") {
        alert("The email cannot be left empty");
        return true;
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == email.value) {
            return false;
        }
    }
    alert("The email is incorrect");
    return true;
}

function validatePassword() {
    if (password == "") {
        alert("The password cannot be left empty");
        return true;
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == email.value) {
            if (userList[index].password == password.value) {
                return false;
            }
        }
    }
    alert("The password is incorrect");
    return true;
}

function updateUser(){
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == email.value) {
            userList[index].isLogged = true;
        }
    }
    saveUsers();
}

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