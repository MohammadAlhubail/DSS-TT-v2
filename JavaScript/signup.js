// Google Login
function googleLogin() {
  var clientId =
    "649303250093-2bnvclv310ser66hhla42vf4uo1s2kbc.apps.googleusercontent.com";
  var redirectUri = "https://mohammadalhubail.github.io/DSS-TT-v2/index";
  var url =
    "https://accounts.google.com/o/oauth2/auth?client_id=" +
    clientId +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=token&scope=openid%20email%20profile";
  window.location.href = url;
}
