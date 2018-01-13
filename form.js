var checkedValue = false;
var password = document.getElementById("password")
    , re_password = document.getElementById("re_password");

function validatePassword() {
    if (password.value != re_password.value) {
        document.getElementById("re_password_dont_match").innerHTML = "Passwords Don't Match";
        document.getElementById("re_password_dont_match").style.display = "inline-block";
        document.getElementById("re_password_dont_match").style.color = "red";
    } else {
        document.getElementById("re_password_dont_match").innerHTML = "Password Match";
        document.getElementById("re_password_dont_match").style.display = "inline-block";
        document.getElementById("re_password_dont_match").style.color = "green";
    }
}

password.onchange = validatePassword;
re_password.onkeyup = validatePassword;

function mySubmitFunction() {
    if (!checkedValue) {
        alert("Please accept the Terms and Conditions");
        return false;
    } else {
        alert("Thanks for Your Registration!!");
        return true;
    }
}

function checkOnTerms() {
    if (document.getElementById('checkbox').checked) {
        checkedValue = true;
    }
}