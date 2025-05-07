// Theme toggle handler
const toggleButton = document.getElementById("theme-toggle");

// Initialize theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const nextTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
});
