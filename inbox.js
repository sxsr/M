if (localStorage.getItem("auth") !== "ok") {
  window.location.href = "index.html";
}

fetch("https://sheetdb.io/api/v1/ldqlu850q8c9x")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("inbox");
    data.reverse().forEach(entry => {
      const box = document.createElement("div");
      box.className = "message-box";
      box.innerHTML = `
        <img src="m.png" alt="مجهول">
        <span class="name">مجهول</span>
        <div class="text">${entry.message}</div>
        <div class="line"></div>
      `;
      container.appendChild(box);
    });
  });