function validateForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var address = document.getElementById('address').value;
    var mobileNo = document.getElementById('mobile_no').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (firstName.length < 6) {
        alert("First Name should contain at least 6 characters.");
        return false;
    }
    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return false;
    }
    if (mobileNo.length !== 10 || isNaN(mobileNo)) {
        alert("Mobile Number should be 10 digits.");
        return false;
    }
    if (lastName.trim() === "" || address.trim() === "") {
        alert("Last Name and Address should not be empty.");
        return false;
    }
    if (!gender) {
        alert("Please select a gender.");
        return false;
    }
    return true;
}
