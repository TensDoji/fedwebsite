function addUser() {
  register = document.getElementById("register");
  register.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate() === true) {
      var _data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      fetch("/user/register/", {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset = UTF-8" },
      }).then(alert("Sign up successful"));

      window.location.href = "index.html";
    }
  });
}

function validate() {
  // Regular Expression
  var numbersOnly = /^\d+$/;
  var validEmail =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  var invalidPass = /^(?![a-zA-Z0-9!@#\$%\^\&*_=+-]){8,20}$/;

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var errorConPass = document.getElementById("errorConPass");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var errorPass = document.getElementById("errorPass");
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("confirmPassword").value;

  if (name == "" || name == null) {
    nameError.style.color = "red";
    nameError.innerHTML = "Name cannot be blank!";
  } else if (name.match(numbersOnly)) {
    nameError.style.color = "red";
    nameError.innerHTML = "Name cannot be number";
  } else if (name.length <= 3) {
    nameError.style.color = "red";
    nameError.innerHTML = "Name should be of atleast 4 words";
  } else if (name.length >= 20) {
    nameError.style.color = "red";
    nameError.innerHTML = "Name cannot be of more than 20 words";
  } else {
    nameError.style.color = "green";
    nameError.innerHTML = "success";
  }

  if (email == "" || email == null) {
    emailError.innerHTML = "email cannot be blank!";
    emailError.style.color = "red";
  } else if (email.match(validEmail)) {
    emailError.style.color = "red";
    emailError.innerHTML = "Invalid Email";
  } else {
    emailError.style.color = "green";
    emailError.innerHTML = "success";
  }

  if (pass1 == "" || pass1 == null) {
    errorPass.style.color = "red";
    errorPass.innerHTML = "password cannot be blank!";
  } else if (pass1.match(invalidPass)) {
    errorPass.style.color = "red";
    errorPass.innerHTML =
      "password should contain atleast 1 uppercase, 1 lowercase, 1 number and 1 symbol. password length should be 8-20 character";
  } else {
    errorPass.style.color = "green";
    errorPass.innerHTML = "success";
  }

  if (pass2 == "" || pass2 == null) {
    errorConPass.style.color = "red";
    errorConPass.innerHTML = "confirm password cannot be blank";
  } else if (pass2 != pass1) {
    errorConPass.style.color = "red";
    errorConPass.innerHTML = "password do not match";
  } else {
    errorConPass.style.color = "green";
    errorConPass.innerHTML = "success";
  }

  if (
    nameError.innerHTML == "success" &&
    emailError.innerHTML == "success" &&
    errorPass.innerHTML == "success" &&
    errorConPass.innerHTML == "success"
  ) {
    return true;
  } else {
    return false;
  }
}
