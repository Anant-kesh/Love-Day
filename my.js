// Navigate to different pages
function goToPage(page) {
  window.location.href = page;
}

// Floating hearts animation
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 600);
// Curtain animation for note page
window.addEventListener("load", () => {
  const leftCurtain = document.querySelector(".curtain-left");
  const rightCurtain = document.querySelector(".curtain-right");

  if (leftCurtain && rightCurtain) {
    setTimeout(() => {
      leftCurtain.classList.add("open-left");
      rightCurtain.classList.add("open-right");    }, 500); // delay for dramatic effect
  }
});
// --- Curtain animation stays the same ---
// (keeping previous code for curtain + hearts)

// Falling flower petals
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  
  // Use different flower emojis for variety
  const flowers = ["🌸", "🌹", "💐", "🌼"];
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  
  flower.style.left = Math.random() * 100 + "vw"; 
  flower.style.fontSize = (15 + Math.random() * 20) + "px"; 
  flower.style.animationDuration = (5 + Math.random() * 5) + "s"; 
  
  document.body.appendChild(flower);
  
  setTimeout(() => {
    flower.remove();
  }, 10000);
}

// Make flowers fall continuously
setInterval(createFlower, 1000);
