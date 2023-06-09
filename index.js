// dark/light mode

var button = document.querySelector("#modeButton");
var theme = document.querySelector("#theme-selctor");
var image = document.querySelector("#dark-mode-icon");

function darkMode() {
  if (theme.getAttribute("href") == "light-style.css") {
    theme.href = "dark-style.css";
    image.src = "images/icons/light-mode-icon.png";
  } else {
    theme.href = "light-style.css";
    image.src = "images/icons/dark-mode-icon.png";
  }
}

// pop-up windows

const modalOne = document.getElementById("modal1");
const overlay = document.getElementById("modal-overlay");

function openPopUp1() {
  modalOne.style.visibility = "visible";
  overlay.style.display = "block";
  modalOne.style.opacity = "1";
}

function closePopUp1() {
  modalOne.style.visibility = "hidden";
  overlay.style.display = "none";
}

const modalTwo = document.getElementById("modal2");

function openPopUp2() {
  modalTwo.style.visibility = "visible";
  overlay.style.display = "block";
  modalTwo.style.opacity = "1";
}
function closePopUp2() {
  modalTwo.style.visibility = "hidden";
  overlay.style.display = "none";
}

const modal = document.getElementById("modal");

function openPopUp() {
  modal.style.visibility = "visible";
  overlay.style.display = "block";
  modal.style.opacity = "1";
}
function closePopUp() {
  modal.style.visibility = "hidden";
  overlay.style.display = "none";
}
