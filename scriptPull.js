import UserObj from "./scriptClasses.js";

const urlUsers = new URL('https://jsonplaceholder.typicode.com/users');

var htmlContainerResults = document.getElementById('divDisplayResults');
var htmlContainerAdditional = document.getElementById('divAdditionalOptions');

var whichButtonClicked = "";

// ---------------------------------------------------------------------------------------------------------------------------------------
// All users button
var btnAllUsers = document.getElementById('btnClickAllUsers');
btnAllUsers.addEventListener('click', funcClickAllUsers);

async function funcClickAllUsers() {
    console.log("Selected All Users");

    whichButtonClicked = "allusers";

    funcTimeStampToConsole();
    funcClearAdditionalResults()
    funcRemoveChildNodes();

    if(document.getElementById("divDisplayResults").childElementCount > 0) {
        funcRemoveChildNodes("divDisplayResults");
    }
    
    let htmlTag_br = document.createElement("br");

    console.log("URL of data:");
    console.log(urlUsers);

    let objJSON = await fetch(urlUsers)
    .then(response => response.json())
    .then(data => data);

    console.log("Object data:");
    console.log(objJSON);

    objJSON.forEach(objUser => {
        let htmlTag_p = document.createElement("p");
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

    whichButtonClicked = "finduser";

    funcTimeStampToConsole();
    funcClearAdditionalResults()
    funcRemoveChildNodes();

    let htmlTag_hr = document.createElement("hr");
    let htmlTag_h2 = document.createElement("h2");
    htmlTag_h2.innerHTML = "Find User";
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_h2);

    let htmlTag_label_id = document.createElement("label"); 
    let htmlTag_input_id = document.createElement("input");
    htmlTag_label_id.textContent = "User ID:";
    htmlTag_input.id = "findUserInputID";
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_label_id);
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_input_id);

    let htmlTag_label_name = document.createElement("label");
    let htmlTag_input_name = document.createElement("input");
    htmlTag_label_name.textContent = "Users first and last name:";
    htmlTag_input.id = "findUserInputName";
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_label_name);
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_input_name);

    let htmlTag_label_email = document.createElement("label");
    let htmlTag_input_email = document.createElement("input");
    htmlTag_label_email.textContent = "Users email:";
    htmlTag_input.id = "findUserInputEmail";
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_label_email);
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_input_email);

    let htmlTag_button_search = document.createElement("button");
    htmlTag_button.id = "findUserSearch";
    htmlTag_button.textContent = "Search";
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_button);

    document.getElementById("divAdditionalOptions").appendChild(htmlTag_hr);
    
    let btnFindUserSearch = document.getElementById('findUserSearch');
    btnFindUserSearch.addEventListener('click', funcFindUserSearch);
}

async function funcFindUserSearch(){
    let htmlTag_p = document.createElement("p");

    let userInputID = document.getElementById("findUserInputID").value;
    let isNullID = true;

    let userInputName = document.getElementById("findUserInputName").value;
    let isNullName = true;

    let userInputEmail = document.getElementById("findUserInputEmail").value;
    let isNullEmail = true;

    console.log("Searched for:");
    console.log(userInputID);
    console.log(userInputName);
    console.log(userInputEmail);

    while(htmlContainerResults.firstChild){
        htmlContainerResults.firstChild.remove();
    }

    if(userInputID == ""){
        isNullID = true;
    }
    else{
        isNullID = false;

        let idToNum = parseInt(userInputID);

        if(isNaN(idToNum)){
            alert("User ID has to be a number.")
        }
    }

    /*
    if(userInput == ""){
        htmlTag_p.innerHTML = "No user information was entered to search.";

        document.getElementById("divDisplayResults").appendChild(htmlTag_p);
    }
    else {
        let urlSearch = urlUsers.searchParams.append("name", userInput);

        let objJSON = await fetch(urlSearch)
        .then(response => response.json())
        .then(data => data);
    
        if(objJSON.length == 0){
            htmlTag_p.innerHTML = "No user found.";
            document.getElementById("divDisplayResults").appendChild(htmlTag_p);
        }
        else {
            htmlTag_p.innerHTML = objJSON[0];
    
            document.getElementById("divDisplayResults").appendChild(htmlTag_p);
        }
    }
    */
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