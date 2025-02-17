document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form reload

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const response = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    alert(data.message);
    window.location.href = "login.html"; // Redirect to login page
  } else {
    alert(data.message); // Show error message
  }
});