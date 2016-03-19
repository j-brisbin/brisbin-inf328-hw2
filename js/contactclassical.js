/**
 * Created by brisbij on 2/17/14.
 */
function extend(subClass, superClass) {
    var F = function () {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

var Contact = function (newFirstName, newLastName, newEmail, newPhoneNumber) {

    var firstName, lastName, eMail, phoneNumber;

    firstName = newFirstName;
    lastName = newLastName;
    eMail = newEmail;
    phoneNumber = newPhoneNumber;

    this.getFirstName = function () {
        return firstName;
    };

    this.setFirstName = function (newFirstName) {
        firstName = newFirstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.setLastName = function (newLastName) {
        lastName = newLastName;
    };

    this.getPhoneNumber = function () {
        return phoneNumber;
    };

    this.setPhoneNumber = function (newPhoneNumber) {
        phoneNumber = newPhoneNumber;
    };

    this.getEmail = function () {
        return eMail;
    };

    this.setEmail = function (newEmail) {
        eMail = newEmail;
    };

    this.display = function () {
        return "First Name: " + this.getFirstName() + ", Last Name: " + this.getLastName()
            + ", Phone Number: " + this.getPhoneNumber() + ", E-mail Address: " + this.getEmail();
    };

    Contact.compareTo = function (contact1, contact2) {
        if (contact1.getFirstName() < contact2.getFirstName()) {
            return -1;
        }
        else if (contact1.getFirstName() == contact2.getFirstName()) {
            return 0;
        }
        else {
            return 1;
        }
    };
};


var BusinessContact = function (newFirstName, newLastName, newEmail, newPhoneNumber, newCompany) {
    var company;
    BusinessContact.superclass.constructor.call(this, newFirstName, newLastName, newEmail, newPhoneNumber);

    company = newCompany;
    this.getCompany = function () {
        return company;
    };

    this.setCompany = function (newCompany) {
        company = newCompany;
    };

    this.display = function () {
        return "First Name: " + this.getFirstName() + ", Last Name: " + this.getLastName()
            + ", Phone Number: " + this.getPhoneNumber() + ", E-mail Address: " + this.getEmail()
            + ", Company: " + this.getCompany();
    };
};
extend(BusinessContact, Contact);




