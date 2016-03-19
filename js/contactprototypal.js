/**
 * Created by brisbij on 2/17/14.
 */
function Contact(newFirstName, newLastName, newEmail, newPhoneNumber) {
    var firstName, lastName, eMail, phoneNumber;
    firstName = newFirstName,
    lastName = newLastName,
    eMail = newEmail,
    phoneNumber = newPhoneNumber;

    function getFirstName() {
        return firstName;
    }

    function setFirstName(newFirstName){
        firstName = newFirstName;
    }

    function getLastName() {
        return lastName;
    }

    function setLastName(newLastName){
        lastName = newLastName;
    }

    function getPhoneNumber() {
        return phoneNumber;
    }

    function setPhoneNumber(newPhoneNumber){
        phoneNumber = newPhoneNumber;
    }

    function getEmail(){
        return eMail;
    }

   function setEmail(newEmail){
        eMail = newEmail;
    }

    function display(){
        return "First Name: " + getFirstName() + ", Last Name: " + getLastName()
            + ", Phone Number: " + getPhoneNumber() + ", E-mail Address: " + getEmail();
    }

    Contact.createChildObject = function(){
        return{

        }
    }

}

Contact.compareTo = function(contact1, contact2)
{
    if(contact1.getFirstName() < contact2.getFirstName())
    {
        return -1;
    }
    else if(contact1.getFirstName() == contact2.getFirstName())
    {
        return 0;
    }
    else
    {
        return 1;
    }
};

Contact.childObject = Contact.createChildObject();

var BusinessContact = clone(Contact);
BusinessContact.childObject = BusinessContact.createChildObject();
BusinessContact.childObject.company = [];

BusinessContact.childObject.getCompany = function(){
  return this.company;
};

BusinessContact.childObject.setCompany = function(newCompany){
  this.company = newCompany;
};
