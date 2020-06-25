function notification(location) {
    this.location = location;
}

function employee(username, password, isNurse, isPhys, isAdmin) {
    this.username = username;
    this.password = password;
    this.isNurse = isNurse;
    this.isPhys = isPhys;
    this.isAdmin = isAdmin;
}

function encrypt(data, key) {
    
}

function patient(name, dob, )

function dropdownSelect() {
    var selection = document.getElementById("dropdown").value;

    if(selection.equals("callMort")) {
        location.href = "https://health.maryland.gov/bom/Pages/home.aspx";
    }

/*
    else if(selection.equals("fileded")){
        var patient = prompt("Please input the patient's name.");



        var causeOfDeath = prompt("Please input the cause of death.");


    }
*/


}

function notifyPhys() {
    alert("oh no");

    var notifications = JSON.parse(localStorage.getItem("notification"));
    notifications.push(new notification(patient.name));
}
