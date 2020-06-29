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
    this.SPO2 = SPO2;
    this.CO2 = CO2;
    this.sysPressure = sysPressure;
    this.diaPressure = diaPressure;
    this.Pulse = Pulse;
}

var vitalsLoop = setInterval(uploadVitals, 1000);
//var vitalsFetch = setInterval(checkVitals, 1200);
var notificationLoop = setInterval(checkNotifications, 1000);

function setPrivileges() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    //use this to set what should be hidden for nurse
    if(currentUser.isNurse == true) {
        
    }

    //use this to set what should be hidden for physician
    else if(currentUser.isPhys == true) {
        
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
        localStorage.setItem("vitalsDatabase", JSON.stringify(initialVitals));
    }

    setPrivileges();
    homePage();
}

function addEmployeePage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("addEmployee").style.display = "block";
}

function homePage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("home").style.display = "block";
}

function addPatientPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("addPatient").style.display = "block";
}

function patientVitalsPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("patientVitals").style.display = "block";
}

function patientInfoPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("patientInfo").style.display = "block";
}

function patientXRaysPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("patientXRays").style.display = "block";
}

function ventilatorSettingsPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById("ventilatorSettings").style.display = "block";
}

function notifyPhys() {
    if(localStorage.getItem("currentPatient") != null) {
        alert("oh no");
        var notifications = JSON.parse(localStorage.getItem("notification"));
        notifications.push(new notification(patient.room));
    } 

    else {
        alert("No patient has been accessed.");
    }
}

function checkNotifications() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var notifications = JSON.parse(localStorage.getItem("notificationDatabase"));
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

    return new vitals(ECG, SPO2, CO2, sysPressure, diaPressure, Pulse);
}

function uploadVitals() {
    localStorage.setItem("vitalsDatabase", JSON.stringify(randomVitals()));
    console.log(localStorage.getItem("vitalsDatabase"));
}

function stopVitals() {
    clearInterval(vitalsLoop);
}

function checkVitals(){
    var myVitals = JSON.parse(localStorage.getItem("vitalsDatabase"));
    console.log(myVitals.SPO2);

    document.getElementById("SPO2").value = myVitals.SPO2;
    document.getElementById("Pulse").value = myVitals.Pulse;
    document.getElementById("CO2").value = myVitals.CO2;
    document.getElementById("sys").value = myVitals.sysPressure;
    document.getElementById("dia").value = myVitals.diaPressure;
    document.getElementById("ECG").value = myVitals.ECG;
}

/*
function vomitPatient() {
    document.getElementById("thisPatient").value = localStorage.getItem("currentPatient");
}

function vomitVitals() {
    document.getElemtnById("allVitals").value = localStorage.getItem("vitalsDatabase");
}
*/

function saveVitals() {
    alert("Vitals have been saved.");
    var currentPatient = JSON.parse(localStorage.getItem("currentPatient"));
    currentPatient.vitals = JSON.parse(localStorage.getItem("vitalsDatabase"));
}

function addEmployee() {
}
