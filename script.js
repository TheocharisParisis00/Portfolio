// Get the toggle button and the body element
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme");

// Apply saved theme if available
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle the dark theme on button click
toggleButton.addEventListener("click", () => {
  // Toggle the 'dark-theme' class on the body
  body.classList.toggle("dark-theme");

  // If the dark theme is active, save it to localStorage
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    // If not, remove it from localStorage (to default to light theme)
    localStorage.removeItem("theme");
  }
});
