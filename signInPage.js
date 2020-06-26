function employee(username, password, isNurse, isPhys, isAdmin) {
    this.username = username;
    this.password = password;
    this.isNurse = isNurse;
    this.isPhys = isPhys;
    this.isAdmin = isAdmin;
}

function initializeData() {
    if(localStorage.getItem("userDatabase") == null) {
        var initialArray = [new employee("admin", "admin", false, true, true)];
        localStorage.setItem("userDatabase", JSON.stringify(initialArray));
    }

    else {}
}

function checkUser(username, password) {
    //assumes that "userDatabase" points to a token containing
    //a JSON implementation of an array of employee objects
    //generated by stringify()
    var users = JSON.parse(localStorage.getItem("userDatabase"));
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

    /*
    if(tries == 0) {
        alert("Too many failed attempts; please contact an administrator.");
    }
    */

    if(checkUser(userInput, passInput)) {
        location.href = "menu.html"; //replace with final location
    }

    else {
        alert("Incorrect credentials; try again.");
        //tries--;
    }
}