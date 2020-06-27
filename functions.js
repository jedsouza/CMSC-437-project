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
