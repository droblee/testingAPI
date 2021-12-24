import UserObj from "./scriptClasses.js";

const urlUsers = "https://jsonplaceholder.typicode.com/";
var urlTail = "users";

var htmlContainerResults = document.getElementById('divDisplayResults');
var htmlContainerAdditional = document.getElementById('divAdditionalOptions');

// ---------------------------------------------------------------------------------------------------------------------------------------
// All users button
var btnAllUsers = document.getElementById('btnClickAllUsers');
btnAllUsers.addEventListener('click', funcClickAllUsers);

async function funcClickAllUsers() {
    console.log("Selected All Users");

    funcTimeStampToConsole();

    funcClearAdditionalResults()

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
}

async function funcFindUserSearch(){
    var userInput = document.getElementById("findUserInput").value;
    var foundUser;

    console.log("Searched for user: " + userInput);

    while(htmlContainerResults.firstChild){
        htmlContainerResults.firstChild.remove();
    }

    var htmlTag_p = document.createElement("p");

    if(userInput == ""){
        htmlTag_p.innerHTML = "No user information was entered to search.";

        document.getElementById("divDisplayResults").appendChild(htmlTag_p);
    }
    else {
        var objJSON = await fetch(urlUsers + urlTail)
        .then(response => response.json())
        .then(data => data);
    
        objJSON.forEach(objUser => {
            switch(userInput){
                case objJSON.id:
                    foundUser = objUser;
                    break;

                case objJSON.name:
                    foundUser = objUser;
                    break;

                case objJSON.username:
                    foundUser = objUser;
                    break;

                case objJSON.email:
                    foundUser = objUser;
                    break;

                default:
                    foundUser = false
            }

            if(foundUser == false){
                htmlTag_p.innerHTML = "No user found.";
                document.getElementById("divDisplayResults").appendChild(htmlTag_p);
            }
            else{
                var htmlTag_p = document.createElement("p");
                htmlTag_p.innerHTML = "User ID: " + foundUser.id + " - Name: " + foundUser.name + " - Email: " + foundUser.email;
        
                document.getElementById("divDisplayResults").appendChild(htmlTag_p);
                document.getElementById("divDisplayResults").appendChild(htmlTag_br);
            }            
        });
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Clear all results button
var btnClearResults = document.getElementById('btnClearResults');
btnClearResults.addEventListener('click', funcRemoveChildNodes);

function funcRemoveChildNodes() {
    while(htmlContainerResults.firstChild){
        htmlContainerResults.firstChild.remove();
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Clear aditional results button
function funcClearAdditionalResults(){
    while(htmlContainerAdditional.firstChild){
        htmlContainerAdditional.firstChild.remove();
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Time stamp function
function funcTimeStampToConsole(){
    var dateStamp = new Date();
    var stringDate = dateStamp.getMonth() + "/" + dateStamp.getDate() + "/" + dateStamp.getFullYear();
    var stringTime = dateStamp.getHours() + ":" + dateStamp.getMinutes() + ":" + dateStamp.getSeconds();

    console.log(stringDate + " " + stringTime);
}

// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/