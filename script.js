const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const cat = document.getElementById("cat");

// YES button click
yesBtn.addEventListener("click", () => {
  yesBtn.style.transform = "scale(1.2)";
  setTimeout(() => { yesBtn.style.transform = "scale(1)"; }, 300);
  response.innerText = "You unlocked the best ending 🎉❤️ 💯";
  cat.style.display = "block";
});

// NO button random movement
noBtn.style.position = "absolute";

function moveNoButton() {
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Shrink randomly
  const size = 90 + Math.random() * 40;
  noBtn.style.width = size + "px";

  // Rotate randomly
  const rot = (Math.random() * 40) - 20;
  noBtn.style.transform = `rotate(${rot}deg)`;
}

// Support for hover and touch
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 30) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 400);
