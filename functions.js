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

function vitals(ECG, SPO2, CO2, sysPressure, diaPressure, Pulse) {
    this.ECG = ECG;
    this.SPO2 = SpO2;
    this.CO2 = CO2;
    this.sysPressure = sysPressure;
    this.diaPressure = diaPressure;
    this.Pulse = Pulse;
}

function setPrivileges() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    console.log(currentUser);

    //use this to set what should be hidden for nurse
    if(currentUser.isNurse == true) {
        //document.getElementById("a1").style.display = "none";
    }

    //use this to set what should be hidden for physician
    else if(currentUser.isPhys == true) {
        //document.getElementById("a2").style.display = "none";
    }
}

function initializeData() {
    if(localStorage.getItem("patientDatabase") == null) {
        var initialArray = []; //we may want to add test patients for debugging purposes
        localStorage.setItem("patientDatabase", JSON.stringify(initialArray));
    }

    if(localStorage.getItem("notficationDatabase") == null) {
        var initialArray = []; //test notifications for debugging purposes if needed
        localStorage.setItem("notificationDatabase", JSON.stringify(initialArray));
    }

    if(localStorage.getItem("vitalsDatabase") == null) {
        var initialVitals = randomVitals();
        localStorage.setItem("vitalsDatabase", initialVitals);
    }

    setPrivileges();
}

function updateVitals() {
}

/*
function dropdownSelect() {
    var selection = document.getElementById("dropdown").value;

    if(selection.equals("callMort")) {
        location.href = "https://health.maryland.gov/bom/Pages/home.aspx";
    }

    
}
*/

function notifyPhys() {
    alert("oh no");

    var notifications = JSON.parse(localStorage.getItem("notification"));
    notifications.push(new notification(patient.room));
}

function checkNotifications() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var notifications = JSON.parse(localStorage.getItem("notificationsDatabase"));
    var alreadyResponding = false;

    for(i = 0; i < notifications.length; i++) {
        if(currentUser.isPhys == true && alreadyResponding == false) {
            var responding = confirm("Physician needed at room " + notifications[0].location + ".");
            if(responding == true) {
                alreadyResponding == true;
                notifications.splice(0, 1);
            }
        }
    }

    localStorage.setItem("notificationDatabase", JSON.stringify(notifications));
}

function addPerscription(){
    var name = JSON.parse(localStorage.getItem("currentPatient"));
    name.medications.push(document.getElementById("meds").value); //meds is the name of the text file
}

function randomVitals() {
    var SPO2 = 95 + Math.random() * 5;
    var Pulse = 60 + Math.random() * 40;
    var CO2 = 23 + Math. random() * 6;
    var sysPressure = 100 + Math.random() * 25;
    var diaPressure = 70 + Math.random() * 15;
    var ECG = Math.random(); //tbd

    return new vitals(ECG, SpO2, CO2, sysPressure, diaPressure, Pulse);
}

function uploadVitals() {
    localStorage.setItem("vitalsDatabase", randomVitals());
}

function checkVitals(){
    var myVitals = JSON.parse(localStorage.getItem("vitalsDatabase"));
    myVitals.SPO2;
    myVitals.Pulse;
    myVitals.CO2;
    myVitals.sysPressure;
    myVitals.diaPressure;
    myVitals.ECG;
}
