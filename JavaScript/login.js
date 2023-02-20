const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  const data = {
    email: email,
    password: password,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        window.location.href = "/home";
      } else {
        alert(result.message);
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
