// Google Login
function googleLogin() {
  var clientId =
    "649303250093-2bnvclv310ser66hhla42vf4uo1s2kbc.apps.googleusercontent.com";
  var redirectUri = "https://mohammadalhubail.github.io/DSS-TT-v2/index.html";
  var url =
    "https://accounts.google.com/o/oauth2/auth?client_id=" +
    clientId +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=token&scope=openid%20email%20profile";
  window.location.href = url;
}

// Email Login
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const repeatPassword = repeatPasswordInput.value;

  if (
    email.trim() === "" ||
    password.trim() === "" ||
    repeatPassword.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== repeatPassword) {
    alert("Passwords do not match.");
    return;
  }

  // TODO: Add code to submit form to server

  let sp = " ";
  console.log(email + sp + password);
});
