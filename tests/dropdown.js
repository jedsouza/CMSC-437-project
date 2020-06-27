function setPrivileges() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    console.log(currentUser);

    if(currentUser.isNurse == true) {
        document.getElementById("a1").style.display = "none";
    }

    else if(currentUser.isPhys == true) {
        document.getElementById("a2").style.display = "none";
    }
}