function toggleForm() {
  document.getElementById("signupForm").classList.toggle("hidden");
  document.getElementById("loginForm").classList.toggle("hidden");
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const policyChecked = document.getElementById("privacyPolicy").checked;

  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  }
  if (!policyChecked) {
    alert("You must agree to the privacy policy.");
    return;
  }

  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  })
  .catch(err => {
    console.error(err);
    alert("Signup failed!");
  });
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your login credentials.");
    return;
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  })
  .catch(err => {
    console.error(err);
    alert("Login failed!");
  });
}
