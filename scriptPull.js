import UserObj from "./scriptClasses.js";

const urlUsers = "https://jsonplaceholder.typicode.com/";
var urtTail = "users";


// ---------------------------------------------------------------------------------------------------------------------------------------
var btnAllUsers = document.getElementById('btnClickAllUsers');
btnAllUsers.addEventListener('click', funcClickAllUsers);

async function funcClickAllUsers() {
    funcTimeStampToConsole();

    if(document.getElementById("divDisplayResults").childElementCount > 0) {
        funcRemoveChildNodes("divDisplayResults");
    }
    
    console.log("Selected All Users");
    
    var htmlTag_br = document.createElement("br");

    console.log("URL of data:");
    console.log(urlUsers + urtTail);

    var objJSON = await fetch(urlUsers + urtTail)
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
var btnFindUser = document.getElementById('btnClickFindUser');
btnFindUser.addEventListener('click', funcClickFindUser);

async function funcClickFindUser(){
    funcTimeStampToConsole();

    if(document.getElementById("divDisplayResults").childElementCount > 0) {
        funcRemoveChildNodes("divDisplayResults");
    }

    console.log("Selected Find User");

    var htmlTag_hr = document.createElement("hr");
    var htmlTag_h2 = document.createElement("h2");

    htmlTag_h2.innerHTML = "Find User"

    document.getElementById("divAdditionalOptions").appendChild(htmlTag_h2);
    document.getElementById("divAdditionalOptions").appendChild(htmlTag_hr);
}

// ---------------------------------------------------------------------------------------------------------------------------------------
var btnClearResults = document.getElementById('btnClearResults');
btnClearResults.addEventListener('click', funcRemoveChildNodes);

function funcRemoveChildNodes() {
    var divParentContainer = document.getElementById('divDisplayResults');

    while(htmlTagByID.firstChild){
        htmlTagByID.firstChild.remove();
    }

}

// ---------------------------------------------------------------------------------------------------------------------------------------
function funcTimeStampToConsole(){
    var dateStamp = new Date();
    var stringDate = dateStamp.getMonth() + "/" + dateStamp.getDate() + "/" + dateStamp.getFullYear();
    var stringTime = dateStamp.getHours() + ":" + dateStamp.getMinutes() + ":" + dateStamp.getSeconds();

    console.log(stringDate + " " + stringTime);
}


// create class for user and put it in another file
