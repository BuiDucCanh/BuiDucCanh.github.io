const header = document.querySelector("header");
const menuButton = document.querySelector(".hamburger-icon");
const navLink = document.querySelector(".nav-links");
const navIcon = document.getElementById("nav-icon");
const navLinkItems = document.querySelectorAll(".nav-links-item");

let showMenu = false;

function closeNav() {
  setTimeout(() => {
    showMenu = false;
    navLink.classList.remove("show-nav-links");
    changeIcon();
  }, 200);
}

function headerColor() {
  window.scrollY >= 10 || showMenu
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

function changeIcon() {
  showMenu
    ? navIcon.setAttribute("src", "assets/x.svg")
    : navIcon.setAttribute("src", "assets/hamburger.svg");
}

function toggleMenu() {
  menuButton.addEventListener("click", () => {
    navLink.classList.toggle("show-nav-links");
    showMenu = !showMenu;
    headerColor();
    changeIcon();
  });
}

toggleMenu();
window.addEventListener("scroll", headerColor);
navLink.addEventListener("click", closeNav);

// Modal
const modals = document.querySelectorAll(".modal");
const viewButton = document.querySelectorAll(".view-project");

function openModal(data) {
  // close all modals
  modals.forEach((modal) => {
    modal.classList.remove("active");
  });

  // find modal by data-project
  const modal = document.querySelector(`[data-modal="${data}"]`);
  modal.classList.add("active");

  // close modal when clicked outside
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modal.classList.remove("active");
    }
  });

  // close modal when close button is clicked
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // close modal when escape key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("active");
    }
  });
}

viewButton.forEach((button) => {
  button.addEventListener("click", () => {
    const data = button.getAttribute("data-project");
    openModal(data);
  });
});

// Contact form
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = [];

  const addError = (input, message) => {
    input.classList.add("error");
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errors.push(input);
  };

  const removeError = (input) => {
    input.classList.remove("error");
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = "";
    errors.pop(input);
  }

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value === "") {
    addError(name, "Name is required");
  } else {
    removeError(name);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    addError(email, "Email is required");
  } else if (!emailRegex.test(email.value)) {
    addError(email, "Enter a valid email");
  } else {
    removeError(email);
  }

  if (message.value === "") {
    addError(message, "Message is required");
  } else {
    removeError(message);
  }

  if (errors.length !== 0) {
    errors[0].focus();
    return;
  } else {
    form.reset();
    alert("Message sent successfully!");
    return;
  }
});
