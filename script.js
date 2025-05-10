const button = document.getElementById("animatedBtn");

// Load state from localStorage
const isClicked = localStorage.getItem("buttonClicked") === "true";
// Set initial background color based on state
if (isClicked) {
  document.body.style.backgroundColor = "lightblue";
}
// Center the button
button.style.position = "absolute";
button.style.top = "50%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";

// Add a cute cat animated cartoon
const cat = document.createElement("div");
cat.style.width = "100px";
cat.style.height = "100px";
cat.style.backgroundImage = "url('https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg')"; // Valid cat image URL
cat.style.backgroundSize = "cover";
cat.style.position = "absolute";
cat.style.top = "30%";
cat.style.left = "50%";
cat.style.transform = "translate(-50%, -50%)";
cat.style.animation = "bounce 2s infinite";

// Add bounce animation
const style = document.createElement("style");
style.textContent = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(style);

// Append cat to the body
document.body.appendChild(cat);
if (isClicked) {
  button.classList.add("clicked");
}

button.addEventListener("click", () => {
  button.classList.toggle("clicked");

  // Save state to localStorage
  const clicked = button.classList.contains("clicked");
  localStorage.setItem("buttonClicked", clicked);
});