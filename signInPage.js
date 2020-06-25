/*
function employee(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
}
*/

var users = JSON.parse(localStorage.getItem("userDatabase"));
var tries = 5;

function checkUser(username, password) {
    var returnVal = false;
    for(index = 0; index < users.length; index++) {
        if(users[index].username.equals(username) &&
        users[index].password.equals(password)) {
            returnVal = true;
        }
    }

    return returnVal;
}

//assumes username textfield has ID of 'user' and
//password texfield has ID of 'pass'
function signInButton() {
    var userInput = document.getElementById("user").value;
    var passInput = document.getElementById("pass").value;

    if(tries == 0) {
        alert("Too many failed attempts; please contact an administrator.");
    }

    else if(checkUser(userInput, passInput)) {
        location.href = "menu.html"; //replace with final location
    }

    else {
        alert("Incorrect credentials; try again.");
        tries--;
    }
}