function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close the hamburger menu when clicking anywhere on the screen
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Stop propagation when clicking on the hamburger icon
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Set dark theme as the default theme
if (!currentTheme) {
  setDarkMode();
} else if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
