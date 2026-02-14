// tombol NO kabur
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// klik YES
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
  <div style="
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background:#0a1f44;
  color:white;
  font-size:40px;">
  Yay 💙
  </div>`;
});

// LOVE JATUH
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const symbols = ["💙","🩵","🤍"];
  heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
