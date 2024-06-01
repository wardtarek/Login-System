var emailInputLogin = document.getElementById("emailInputLogin");
var passwordInputLogin = document.getElementById("passwordInputLogin");
var loginBtn = document.getElementById("loginBtn");
var loginAlert = document.getElementById("loginAlert");
loginBtn.addEventListener("click", loginUser);

function loginUser() {
  var data = JSON.parse(localStorage.getItem("users"));
  userLogin = {
    email: emailInputLogin.value,
    password: passwordInputLogin.value,
  };
  if (localStorage.getItem("users") != null) {
    data.forEach((i) => {
      if (i.email == userLogin.email && i.password == userLogin.password) {
        loginAlert.classList.add("d-none");
        loginBtn.setAttribute("href", "home.html");
        localStorage.setItem("userName", i.name);
      } else {
        loginAlert.classList.remove("d-none");
      }
    });
  } else {
    loginAlert.classList.remove("d-none");
  }
}
