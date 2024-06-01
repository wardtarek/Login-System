var nameInputSign = document.getElementById("nameInputSign");
var emailInputSign = document.getElementById("emailInputSign");
var passwordInputSign = document.getElementById("passwordInputSign");
var signBtn = document.getElementById("signBtn");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");
var emailExist = document.getElementById("emailExist");

var userList = [];

if (localStorage.getItem("users") != null) {
  userList = JSON.parse(localStorage.getItem("users"));
}
signBtn.addEventListener("click", addUser);
function addUser() {
  emailExist.classList.add("d-none");
  if (validEmail() && validPassword()) {
    user = {
      name: nameInputSign.value,
      email: emailInputSign.value,
      password: passwordInputSign.value,
    };
    var data = JSON.parse(localStorage.getItem("users"));
    if (localStorage.getItem("users") != null) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].email == user.email) {
          emailExist.classList.remove("d-none");
          return true;
        }
      }
      userList.push(user);
      localStorage.setItem("users", JSON.stringify(userList));
    } else {
      userList.push(user);
      localStorage.setItem("users", JSON.stringify(userList));
    }
  }
}

emailInputSign.addEventListener("change", validEmail);
function validEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(emailInputSign.value)) {
    emailInputSign.classList.add("is-valid");
    emailInputSign.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
    return true;
  } else {
    emailInputSign.classList.add("is-invalid");
    emailInputSign.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
    return false;
  }
}
passwordInputSign.addEventListener("change", validPassword);
function validPassword() {
  var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (regex.test(passwordInputSign.value)) {
    passwordInputSign.classList.add("is-valid");
    passwordInputSign.classList.remove("is-invalid");
    passwordAlert.classList.add("d-none");
    return true;
  } else {
    passwordInputSign.classList.add("is-invalid");
    passwordInputSign.classList.remove("is-valid");
    passwordAlert.classList.remove("d-none");
    return false;
  }
}
