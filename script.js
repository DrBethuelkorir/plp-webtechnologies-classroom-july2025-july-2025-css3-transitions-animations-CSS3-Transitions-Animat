// ----------------------
// Part 2: Functions with Parameters & Return Values
// ----------------------

// Function to calculate animation delay based on user level
function getAnimationDelay(level) {
  return level > 5 ? "0.2s" : "0.5s";
}

// Function to log animation status
function logAnimationStatus(isAnimating) {
  return isAnimating ? "Animation started!" : "Animation stopped.";
}

// ----------------------
// Part 2: Scope Demonstration
// ----------------------
let globalStatus = "Ready"; // Global scope

function updateStatus() {
  let localStatus = "Animating"; // Local scope
  console.log("Local:", localStatus);
  console.log("Global:", globalStatus);
}

// ----------------------
// Part 3: Trigger Box Animation
// ----------------------
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
  console.log(logAnimationStatus(box.classList.contains("animate")));
  updateStatus();
});

// ----------------------
// Part 3: Modal Slide-In Animation
// ----------------------
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hidden");
});
