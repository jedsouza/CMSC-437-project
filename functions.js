

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

function patient(name, room, status, medications, incidents, vitals, ventilator) {
    this.name = name;
    this.room = room;
    this.status = status;
    this. medications = medications;
    this.incidents = incidents;
    this.vitals = vitals;
    this.ventilator = ventilator;
}

function initializeData() {
    if(localStorage.getItem("userDatabase") == null) {
        var initialArray = [new employee("admin", "admin", false, true, true)];
        localStorage.setItem("userDatabase", JSON.stringify(initialArray));
    }

    if(localStorage.getItem("patientDatabase") == null) {
        var initialArray = []; //we may want to add test patients for debugging purposes
        localStorage.setItem("patientDatabase", JSON.stringify(initialArray));
    }

    if(localStorage.getItem("notficationDatabase") == null) {
        var initialArray = []; //test notifications for debugging purposes if needed
        localStorage.setItem("notificationDatabase", JSON.stringify(initialArray));
    }
}

function dropdownSelect() {
    var selection = document.getElementById("dropdown").value;

    if(selection.equals("callMort")) {
        location.href = "https://health.maryland.gov/bom/Pages/home.aspx";
    }

    
}

function notifyPhys() {
    alert("oh no");

    var notifications = JSON.parse(localStorage.getItem("notification"));
    notifications.push(new notification(patient.name));
}

function checkNotifications() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var currentPatient = JSON.parse(localStorage.getItem("currentPatient"));

    if(currentUser.isPhys == true) {
        alert("Physician needed at room " + currentPatient.room + ".");
    }
}
