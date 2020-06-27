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

    console.log("Data Initialized");
    console.log(JSON.stringify(localStorage.getItem("userDatabase")));
}

function checkUser(username, password) {
    //assumes that "userDatabase" points to a token containing
    //a JSON implementation of an array of employee objects
    //generated by stringify()
    var users = JSON.parse(localStorage.getItem("userDatabase"));
    var returnVal = null;
    
    for(index = 0; index < users.length; index++) {
        var currentUsername = users[index].username;
        var currentPassword = users[index].password;

        console.log(currentUsername);
        console.log(currentPassword);
        console.log(username);
        console.log(password);

        
        if(currentUsername === username &&
            currentPassword === password) {
            console.log(users[index]);
            returnVal = users[index];
        }
        
    }

    return returnVal;
}

function hidden() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//assumes username textfield has ID of 'user' and
//password texfield has ID of 'pass'
//if successful signin occurs, current user is passed
//to local storage key "currentUser"
function signInButton() {
    var userInput = document.getElementById("user").value;
    var passInput = document.getElementById("pass").value;

    /*
    if(tries == 0) {
        alert("Too many failed attempts; please contact an administrator.");
    }
    */

    var currentUser = checkUser(userInput, passInput);

    if(currentUser != null) {
        console.log("signed in successfully.");
        location.href = "main.html"; //replace with final location
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    else {
        alert("Incorrect credentials; try again.");
        //tries--;
    }
}
