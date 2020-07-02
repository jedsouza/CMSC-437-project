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

function ventilator(isOn, O2) {
    this.isOn = isOn;
    this.O2 = O2;
}

var vitalsLoop = setInterval(uploadVitals, 1000);
var vitalsFetch = setInterval(checkVitals, 1200);
var notificationLoop = setInterval(checkNotifications, 5000);

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

    if("notificationDatabase" in localStorage) {
    }

    else {
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

    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";
    document.getElementById("homeLink").style.display = "list-item";
    document.getElementById("signOutLink").style.display = "list-item";

    document.getElementById("addEmployee").style.display = "block";
}

function addEmployee() {
    var users = JSON.parse(localStorage.getItem("userDatabase"));
    var username = document.getElementById("empName").value;
    var password = document.getElementById("empPass").value;
    var type = document.getElementById("empType").value;
    
    console.log("working");

    if(type === "1") {
        users.push(new employee(username, password, false, true, false));
        console.log("added doctor");
    }

    else if(type === "2") {
        users.push(new employee(username, password, true, false, false));
        console.log("added nurse");
    }

    else if(type === "3") {
        users.push(new employee(username, password, false, false, true));
        console.log("added admin");
    }

    localStorage.setItem("userDatabase", JSON.stringify(users));
    homePage();
}

function addPatient() {
    var patients = JSON.parse(localStorage.getItem("patientDatabase"));
    var name = document.getElementById("patientName").value;
    var room = document.getElementById("patientRoom").value;
    var status = document.getElementById("patientStatus").value;
    var medications = document.getElementById("patientMeds").value;
    var incidents = document.getElementById("patientIncidents").value;
    var defaultVitals = new vitals(0,0,0,0,0,0);
    var defaultVentilator = new ventilator("OFF", 0);

    patients.push(new patient(name, room, status, medications, incidents,
    defaultVitals, defaultVentilator));

    console.log(patients);

    localStorage.setItem("patientDatabase", JSON.stringify(patients));
    homePage();
}

function homePage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    
    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";

    document.getElementById("home").style.display = "block";
}

function addPatientPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";
    document.getElementById("homeLink").style.display = "list-item";
    document.getElementById("signOutLink").style.display = "list-item";

    document.getElementById("addPatient").style.display = "block";
}

function patientVitalsPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";
    document.getElementById("homeLink").style.display = "list-item";
    document.getElementById("signOutLink").style.display = "list-item";
    document.getElementById("infoLink").style.display = "list-item";
    document.getElementById("XRayLink").style.display = "list-item";
    document.getElementById("saveVitalsLink").style.display = "list-item";
    document.getElementById("alertPhysLink").style.display = "list-item";
    document.getElementById("ventilatorLink").style.display = "list-item";

    document.getElementById("patientVitals").style.display = "block";
}

function patientInfoPage() {
    displayPatientInfo();

    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";
    document.getElementById("homeLink").style.display = "list-item";
    document.getElementById("signOutLink").style.display = "list-item";
    document.getElementById("vitalsLink").style.display = "list-item";
    document.getElementById("XRayLink").style.display = "list-item";
    document.getElementById("alertPhysLink").style.display = "list-item";
    document.getElementById("ventilatorLink").style.display = "list-item";
    document.getElementById("saveChangesLink").style.display = "list-item";

    document.getElementById("patientInfo").style.display = "block";
}

function patientXRaysPage() {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";
    document.getElementById("homeLink").style.display = "list-item";
    document.getElementById("signOutLink").style.display = "list-item";
    document.getElementById("vitalsLink").style.display = "list-item";
    document.getElementById("infoLink").style.display = "list-item";
    document.getElementById("alertPhysLink").style.display = "list-item";
    document.getElementById("ventilatorLink").style.display = "list-item";

    document.getElementById("patientXRays").style.display = "block";
}

function ventilatorSettingsPage() {
    displayVentilator();

    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    var links = document.getElementsByClassName("nav-item");
    for(i=0; i < links.length; i++) {
        links[i].style.display = "none";
    }

    document.getElementById("patientSearch").style.display = "flex";
    document.getElementById("homeLink").style.display = "list-item";
    document.getElementById("signOutLink").style.display = "list-item";
    document.getElementById("vitalsLink").style.display = "list-item";
    document.getElementById("infoLink").style.display = "list-item";
    document.getElementById("XRayLink").style.display = "list-item";
    document.getElementById("saveChangesLink").style.display = "list-item";
    document.getElementById("alertPhysLink").style.display = "list-item";

    document.getElementById("ventilatorSettings").style.display = "block";
}

function notifyPhys() {
    if(localStorage.getItem("currentPatient") != null) {
        alert("Physician notified.");

        var notifications = JSON.parse(localStorage.getItem("notificationDatabase"));
        var room = JSON.parse(localStorage.getItem("currentPatient")).room;

        notifications.push(new notification(room));
        localStorage.setItem("notificationDatabase", JSON.stringify(notifications));
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
}

function checkVitals(){
    var myVitals = JSON.parse(localStorage.getItem("vitalsDatabase"));
    document.getElementById("SPO2").innerHTML = myVitals.SPO2;
    document.getElementById("Pulse").innerHTML = myVitals.Pulse;
    document.getElementById("CO2").innerHTML = myVitals.CO2;
    document.getElementById("sys").innerHTML = myVitals.sysPressure;
    document.getElementById("dia").innerHTML = myVitals.diaPressure;
    document.getElementById("ECG").innerHTML = myVitals.ECG;
}

function saveVitals() {
    var currentPatient = JSON.parse(localStorage.getItem("currentPatient"));
    currentPatient.vitals = JSON.parse(localStorage.getItem("vitalsDatabase"));
    localStorage.setItem("currentPatient", JSON.stringify(currentPatient));
    alert("Vitals have been saved.");
}

function saveChanges() {
    var currentPatient = JSON.parse(localStorage.getItem("currentPatient"));
    var name = currentPatient.name;
    var room = currentPatient.room;

    currentPatient.name = document.getElementById("currentPatientName").value;
    currentPatient.room = document.getElementById("currentPatientRoom").value;
    currentPatient.status = document.getElementById("currentPatientStatus").value;
    currentPatient.medications = document.getElementById("currentPatientMeds").value;
    currentPatient.incidents = document.getElementById("currentPatientIncidents").value;
    currentPatient.ventilator.isOn = document.getElementById("ventStatus").innerHTML;
    currentPatient.ventilator.O2 = document.getElementById("oxPercent").value;

    var patientDatabase = JSON.parse(localStorage.getItem("patientDatabase"));

    for(i = 0; i < patientDatabase.length; i++) {
        if(patientDatabase[i].name === name && patientDatabase[i].room === room) {
            patientDatabase[i] = currentPatient;
        }
    }

    localStorage.setItem("currentPatient", JSON.stringify(currentPatient));
    localStorage.setItem("patientDatabase", JSON.stringify(patientDatabase));

    alert("Changes have been saved.");
}

function displayVitals() {
    var vitals = JSON.parse(localStorage.getItem("currentPatient")).vitals;

    document.getElementById("savedECG").innerHTML = vitals.ECG;
    document.getElementById("savedSPO2").innerHTML = vitals.SPO2;
    document.getElementById("savedCO2").innerHTML = vitals.CO2;
    document.getElementById("savedSys").innerHTML = vitals.sysPressure;
    document.getElementById("savedDia").innerHTML = vitals.diaPressure;
    document.getElementById("savedPulse").innerHTML = vitals.Pulse;
}

function displayVentilator() {
    var ventilator = JSON.parse(localStorage.getItem("currentPatient")).ventilator;

    document.getElementById("ventStatus").innerHTML = ventilator.isOn;
    document.getElementById("oxPercent").value = ventilator.O2;
}

function displayPatientInfo() {
    var currentPatient = JSON.parse(localStorage.getItem("currentPatient"));
    
    document.getElementById("currentPatientName").value = currentPatient.name;
    document.getElementById("currentPatientRoom").value = currentPatient.room;
    document.getElementById("currentPatientStatus").value = currentPatient.status;
    document.getElementById("currentPatientMeds").value = currentPatient.medications;
    document.getElementById("currentPatientIncidents").value = currentPatient.incidents;

    displayVitals();
}

function toggleVentilator() {
    if (document.getElementById("ventStatus").innerHTML == "OFF") {
        document.getElementById("ventStatus").innerHTML = "ON";
        JSON.parse(localStorage.getItem("currentPatient")).ventilator.isOn = true;
    } 
    
    else {
        document.getElementById("ventStatus").innerHTML = "OFF";
        JSON.parse(localStorage.getItem("currentPatient")).ventilator.isOn = false;
    }
}

function searchPatientNavBar() {
    var input = document.getElementById("patientSearch").value;
    var patientDatabase = JSON.parse(localStorage.getItem("patientDatabase"));
    var isFound = false;

    for(i = 0; i < patientDatabase.length; i++) {
        if(input === patientDatabase[i].name || input === patientDatabase[i].room) {
            localStorage.setItem("currentPatient", JSON.stringify(patientDatabase[i]));
            isFound = true;
        }
    }

    if(!isFound) {
        alert("No patient found under this name or room number.");
    }

    else {
        patientVitalsPage();
    }
}

function searchPatientMenu() {
    var input = document.getElementById("patientSearchMenu").value;
    var patientDatabase = JSON.parse(localStorage.getItem("patientDatabase"));
    var isFound = false;

    for(i = 0; i < patientDatabase.length; i++) {
        if(input === patientDatabase[i].name || input === patientDatabase[i].room) {
            localStorage.setItem("currentPatient", JSON.stringify(patientDatabase[i]));
            isFound = true;
        }
    }

    if(!isFound) {
        alert("No patient found under this name or room number.");
    }

    else {
        patientVitalsPage();
    }
}
    