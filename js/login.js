const form = document.getElementById("LoginForm");
const invalidData = document.getElementById("invalid");
var _data = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  LoginValidation();
});

async function LoginValidation() {
  _data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  var email = _data.email;

  fetch("/user/login/" + email)
    .then((response) => response.text())
    .then((response) => ValidateLogin(response));
}

async function ValidateLogin(data) {
  const userData = JSON.parse(data);
  console.log(userData);

  var registered_Email = userData.Email;
  var registered_Password = userData.Password;

  var entered_email = _data.email;
  var entered_password = _data.password;
  console.log(_data);

  if (
    registered_Email == entered_email &&
    registered_Password == entered_password
  ) {
    if (_data.email != "rigden1777@gmail.com") {
      window.location.href = "index2.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    invalidData.innerHTML = "The password is incorrect";
    invalidData.style = "color:red";
  }
}
