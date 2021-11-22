import UserObj from "./scriptClasses.js";

const urlUsers = "https://jsonplaceholder.typicode.com/";
var urlTail = "users";
var bolFindUserButtonClicked = new Boolean(false);


// ---------------------------------------------------------------------------------------------------------------------------------------
// All users button
var btnAllUsers = document.getElementById('btnClickAllUsers');
btnAllUsers.addEventListener('click', funcClickAllUsers);

async function funcClickAllUsers() {
    console.log("Selected All Users");

    funcTimeStampToConsole();

    funcRemoveChildNodes();

    if(document.getElementById("divDisplayResults").childElementCount > 0) {
        funcRemoveChildNodes("divDisplayResults");
    }
    
    var htmlTag_br = document.createElement("br");

    console.log("URL of data:");
    console.log(urlUsers + urlTail);

    var objJSON = await fetch(urlUsers + urlTail)
    .then(response => response.json())
    .then(data => data);

    console.log("Object data:");
    console.log(objJSON);

    objJSON.forEach(objUser => {
        var htmlTag_p = document.createElement("p");
        htmlTag_p.innerHTML = "User ID: " + objUser.id + " - Name: " + objUser.name + " - Email: " + objUser.email;

        document.getElementById("divDisplayResults").appendChild(htmlTag_p);
        document.getElementById("divDisplayResults").appendChild(htmlTag_br);
    });
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Find user button
var btnFindUser = document.getElementById('btnClickFindUser');
btnFindUser.addEventListener('click', funcClickFindUser);

async function funcClickFindUser(){
    console.log("Selected Find User");

    funcTimeStampToConsole();

    funcRemoveChildNodes();

    if(bolFindUserButtonClicked == false){
        if(document.getElementById("divDisplayResults").childElementCount > 0) {
            funcRemoveChildNodes("divDisplayResults");
        }
    
        var htmlTag_hr = document.createElement("hr");
        var htmlTag_h2 = document.createElement("h2");
        var htmlTag_input = document.createElement("input");
        var htmlTag_button = document.createElement("button");
    
        htmlTag_h2.innerHTML = "Find User";
        htmlTag_input.id = "findUserInput";
        htmlTag_button.id = "findUserSearch";
        htmlTag_button.textContent = "Search";
    
        document.getElementById("divAdditionalOptions").appendChild(htmlTag_h2);
        document.getElementById("divAdditionalOptions").appendChild(htmlTag_input);
        document.getElementById("divAdditionalOptions").appendChild(htmlTag_button);

        document.getElementById("divAdditionalOptions").appendChild(htmlTag_hr);
        
        var btnFindUserSearch = document.getElementById('findUserSearch');
        btnFindUserSearch.addEventListener('click', funcFindUserSearch);

        bolFindUserButtonClicked = true;
    }    
}

async function funcFindUserSearch(){
    console.log("Searched for user.");

    var htmlTag_p = document.createElement("p");

    htmlTag_p.innerText = document.getElementById("findUserInput").value;

    document.getElementById("divDisplayResults").appendChild(htmlTag_p);

    if(document.getElementById("findUserInput").innerText.length == 0){
        htmlTag_p.innerHTML = "No user information was entered to search.";

        document.getElementById("divDisplayResults").appendChild(htmlTag_p);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Clear results button
var btnClearResults = document.getElementById('btnClearResults');
btnClearResults.addEventListener('click', funcRemoveChildNodes);

function funcRemoveChildNodes() {
    var htmlContainerResults = document.getElementById('divDisplayResults');
    var htmlContainerAdditional = document.getElementById('divAdditionalOptions');

    while(htmlContainerResults.firstChild){
        htmlContainerResults.firstChild.remove();
    }

    while(htmlContainerAdditional.firstChild){
        htmlContainerAdditional.firstChild.remove();
    }

    bolFindUserButtonClicked = false
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Time stamp function
function funcTimeStampToConsole(){
    var dateStamp = new Date();
    var stringDate = dateStamp.getMonth() + "/" + dateStamp.getDate() + "/" + dateStamp.getFullYear();
    var stringTime = dateStamp.getHours() + ":" + dateStamp.getMinutes() + ":" + dateStamp.getSeconds();

    console.log(stringDate + " " + stringTime);
}


// create class for user and put it in another file
