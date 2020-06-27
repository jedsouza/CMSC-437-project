function person(name, age) {
    this.name = name;
    this. age = age;
}

function initializeData() {
    if(localStorage.getItem("people") == null) {
        var initialArray = [new person("george", 40), new person("nick", 25)];
        localStorage.setItem("people", JSON.stringify(initialArray));
    }

    else{}
}

function displayData() {
    var finalArray = JSON.parse(localStorage.getItem("people"));
    console.log(JSON.stringify(finalArray));
}

function displayName() {
    var finalArray = JSON.parse(localStorage.getItem("people"));
    console.log(finalArray[0].name);
}

function displayAge() {
    var finalArray = JSON.parse(localStorage.getItem("people"));
    console.log(finalArray[0].age);
}

function addPerson() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);

    var finalArray = JSON.parse(localStorage.getItem("people"));
    finalArray.push(new person(name, age));

    localStorage.setItem("people", JSON.stringify(finalArray));
}