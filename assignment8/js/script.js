// Sign-Up
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validation
    if (name && email && password.length >= 6) {
      let user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Account created!");
      window.location.href = "sign-in.html";
    } else {
      alert("Please fill all fields correctly.");
    }
  });
}

// Sign-In
if (document.getElementById("signinForm")) {
  document.getElementById("signinForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Logged in!");
      window.location.href = "home.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}

// Home Page: Check if logged in
if (window.location.pathname.includes("home.html")) {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "sign-in.html";
  }
}

// Logout
function logout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "sign-in.html";
}