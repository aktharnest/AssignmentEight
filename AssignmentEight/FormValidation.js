function ValidateForm() {
    var uid = document.getElementById("uid").value;
    var pswd = document.getElementById("pswd").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
    var email = document.getElementById("email").value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (uid.length < 5 || uid.length > 7) {
        alert("Id must be between 5 to 7 Characters");
        return false;
    }
    if (pswd.length < 7 || pswd.length > 12) {
        alert("Password must be between 7 to 12 Characters");
        return false;
    }
    if (!name.match(/^[A-Za-z]+$/)) {
        alert("Please Enters Letters Only");
        return false;
    }
    if (!address.match(/^[0-9a-zA-Z]+$/)) {
        alert("Please Enters Letters and Numbers Only in Address");
        return false;
    }
    if (country == 0) {
        alert("Select a Country");
        return false;
    }
    if (!zip.match(/^[0-9a-zA-Z]+$/)) {
        alert("Please Enters Letters and Number Only in ZIP");
        return false;
    }
    if (email == "") {
        alert("Fill email Field");
        return false;
    }
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid E-mail address ");
        return false;
    }
    if (!(document.getElementById("male").checked || document.getElementById("female").checked)) {
        alert("PLease select a gender");
        return false;
    }

    return true;
}
