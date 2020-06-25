function employee(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
}

var users = new Array();
var testAdmin = new employee("testAdmin", "testAdmin", true);
users.push(testAdmin);

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

    if(checkUser(userInput, passInput)) {
        location.href = "menu.html"; //replace with final location
    }
}