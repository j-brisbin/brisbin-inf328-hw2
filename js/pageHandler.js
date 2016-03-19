/**
 * Created by brisbij on 2/17/14.
 */
var lastNameField;
var firstNameField;
var phoneNumberField;
var eMailField;
var companyField;
var contactDiv;
var businessContactDiv;
var addButton;
var contactList;
var businessContactList;
var newContact;
var companyDiv;
var businessButton;
var personalButton;
window.onload = init;

function init(){

    firstNameField = document.getElementById("fnameText");
    lastNameField = document.getElementById("lnameText");
    phoneNumberField = document.getElementById("phoneText");
    eMailField = document.getElementById("eMailText");
    companyField = document.getElementById("companyText");
    businessButton = document.getElementById("businessRadio");
    personalButton = document.getElementById("personalRadio");
    contactDiv = document.getElementById("contactList");
    businessContactDiv = document.getElementById("businessContactList");
    addButton = document.getElementById("addButton");
    companyDiv = document.getElementById("company");
    contactList = new Array();
    businessContactList = new Array();
    personalButton.onclick = companyShowHide;
    businessButton.onclick = companyShowHide;
    addButton.onclick = formHandler;

}

function formHandler(evt){

    try{
        if(personalButton.checked)
        {
            newContact = new Contact(firstNameField.value,lastNameField.value,eMailField.value,
                phoneNumberField.value);
            contactList.push(newContact);
            contactDiv.innerHTML="";
            var contactHeader = document.createElement("h3");
            contactHeader.innerHTML = "Personal Contacts: ";
            contactDiv.appendChild(contactHeader);
            contactList.sort(Contact.compareTo);
            for(var i = 0; i<contactList.length; i++)
            {
                var contactDisplay = document.createElement("p");
                contactDisplay.innerHTML = contactList[i].display();
                contactDiv.appendChild(contactDisplay);
            }

        }
        else if(businessButton.checked)
        {
            newContact = new BusinessContact(firstNameField.value,lastNameField.value,eMailField.value,
                phoneNumberField.value,companyField.value);
            businessContactList.push(newContact);
            businessContactDiv.innerHTML="";
            var businessContactHeader = document.createElement("h3");
            businessContactHeader.innerHTML = "Business Contacts: ";
            businessContactDiv.appendChild(businessContactHeader);
            businessContactList.sort(BusinessContact.compareTo);
            for(var i = 0; i<businessContactList.length; i++)
            {
                var businessContactDisplay = document.createElement("p");
                businessContactDisplay.innerHTML = businessContactList[i].display();
                businessContactDiv.appendChild(businessContactDisplay);
            }

        }
        else
        {
            window.alert("You have not selected a contact type. Please select a contact type " +
                "before trying to add a contact.")
        }

    }
    catch(ex){
        window.alert("There has been an error! " + ex.message);
        console.log("Error has occurred! " + ex.message);
    }

}

function companyShowHide(evt){
    if(personalButton.checked)
    {
        companyDiv.style.visibility="hidden";
    }
    else
    {
        companyDiv.style.visibility="visible";
    }
}
