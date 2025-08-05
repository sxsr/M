function sendMessage() {
  const message = document.getElementById("message").value.trim();
  const warning = document.querySelector(".warning");
  const success = document.querySelector(".success");
  const loader = document.querySelector(".loader");
  const error = document.querySelector(".error");

  warning.style.display = "none";
  success.style.display = "none";
  error.style.display = "none";

  if (message === "") {
    warning.style.display = "block";
    return;
  }

  loader.style.display = "block";

  fetch("https://sheetdb.io/api/v1/ldqlu850q8c9x", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [{ message }] })
  })
    .then(response => response.json())
    .then(() => {
      loader.style.display = "none";
      success.style.display = "block";
      document.getElementById("message").value = "";
    })
    .catch(() => {
      loader.style.display = "none";
      error.style.display = "block";
    });
}

function openPrompt() {
  document.getElementById("passwordPrompt").classList.remove("hidden");
}

function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  if (password === "9843984AJlIojdcnjcn2") {
    window.location.href = "inbox.html";
  } else {
    alert("صامل ؟ طيب ودك تلقم حظر");
  }
}