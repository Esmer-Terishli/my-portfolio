// HAMBURGER MENU
const icon = document.querySelector(".icon-click");
let menuLink = document.querySelector(".menu-link");
let menuToggle = document.querySelector(".menu-toggle");
function show() {
  menuLink.classList.toggle("active");
  menuLink.classList.add("active1");
  menuToggle.classList.toggle("active");
  icon.classList.toggle("fa-xmark");
  icon.classList.toggle("fa-bars");
}

// ACTIVE COLOR
let navLinks = document.querySelectorAll(".nav_item a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      link.style.color = "";
    });
    this.classList.add("active-link");
    this.style.color = "#6e57e0";

    let targetSectionId = this.getAttribute("href");
    let targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      let currentPosition = window.scrollY;
      let targetPosition =
        targetSection.getBoundingClientRect().top + currentPosition - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// TEXT ANIMATED
let text = "Frontend developer";
let elementId = "text-subtitle";
let delay = 100;

function typeText(text, elementId, delay) {
  let container = document.getElementById(elementId);
  let index = 0;

  let timer = setInterval(function () {
    container.textContent += text[index];
    index++;

    if (index === text.length) {
      clearInterval(timer);
    }
  }, delay);
}
typeText(text, elementId, delay);

// TAB SKILLS
let tabHeaders = document
  .getElementsByClassName("tab-header")[0]
  .getElementsByTagName("div");
let tabContents = document
  .getElementsByClassName("tab-content")[0]
  .getElementsByTagName("div");
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let activeTabIndex = 0;

tabHeaders[activeTabIndex].classList.add("active");
tabContents[activeTabIndex].classList.add("active");
for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function () {
    if (i !== activeTabIndex) {
      tabHeaders[activeTabIndex].classList.remove("active");
      tabContents[activeTabIndex].classList.remove("active");
      tabHeaders[i].classList.add("active");
      tabIndicator.style.top = `calc(80px + ${i * 150}px)`;
      tabContents[i].classList.add("active");
      activeTabIndex = i;
    }
  });
}

// STICKY NAVBAR
const header = document.getElementById("site-header");
function handleScroll() {
  if (window.innerWidth > 992) {
    if (window.scrollY > 200 && window.scrollY < 450) {
      header.style.display = "none";
    } else {
      header.style.display = "block";
    }
  } else {
    header.style.display = "block";
  }
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);

// QUALIFICATION TABS
const tabs = document.querySelectorAll(".qualification [data-target]");
const tabContents2 = document.querySelectorAll(".qualification [data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents2.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

// FAQ ACCORDION SECTION
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
  let accordionDescription = item.querySelector(".accordion-description");
  accordionDescription.addEventListener("click", () => {
    item.classList.toggle("open");
    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      item
        .querySelector(".accordion-description i")
        .classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item
        .querySelector(".accordion-description i")
        .classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let desc = item2.querySelector(".description");
      desc.style.height = "0px";
      item2
        .querySelector(".accordion-description i")
        .classList.replace("fa-minus", "fa-plus");
    }
  });
}

// TESTIMONIALS SECTION
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// PROJECT SECTION
const tabs2 = document.querySelectorAll(".project-button[data-target]");
const tabContents3 = document.querySelectorAll(
  ".project-content[data-content]"
);

tabs2.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents3.forEach((tabContent) => {
      tabContent.classList.remove("project-active");
    });
    target.classList.add("project-active");

    tabs2.forEach((tabItem) => {
      tabItem.classList.remove("project-active");
    });
    tab.classList.add("project-active");

    if (tab.dataset.target === "#education2") {
      tabContents3.forEach((tabContent) => {
        tabContent.classList.add("project-active");
      });
    }
  });
});

function showAllTabsContent() {
  const tabContents = document.querySelectorAll(
    ".project-content[data-content]"
  );

  tabContents.forEach((tabContent) => {
    tabContent.classList.add("project-active");
  });
}
document.addEventListener("DOMContentLoaded", showAllTabsContent);

// CONTACTME SECTION
const getElement = (id) => document.getElementById(id);
const addInputListener = (input, minLength, errorMessage) => {
  input.addEventListener("input", function () {
    const value = input.value;
    const isValid = value.length >= minLength;
    validateInput(input, isValid, errorMessage);
  });
};
const validateEmail = (email) => {
  const atIndex = email.indexOf("@");
  const domain = email.slice(atIndex + 1);
  return atIndex !== -1 && domain.length >= 3;
};
const validateInput = (input, isValid, errorMessage) => {
  input.style.border = isValid ? "2px solid green" : "2px solid red";
  input.nextElementSibling.textContent = isValid ? "" : errorMessage;
  if (!isValid) {
    input.setAttribute("required", "");
  } else {
    input.removeAttribute("required");
  }
};
const showErrorMessage = (title, text, errorMessage) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    footer: `<a href="">${errorMessage}</a>`,
  });
};
const nameInput = getElement("name-input");
const emailInput = getElement("email-input");
const projectInput = getElement("project-input");
const messageInput = getElement("message-input");
const contactClick = getElement("contact-click");

addInputListener(nameInput, 5, "At least 5 characters required");
addInputListener(projectInput, 20, "At least 20 characters required");
addInputListener(messageInput, 100, "At least 100 characters required");

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;
  const isValidEmail = validateEmail(emailValue);
  validateInput(
    emailInput,
    isValidEmail,
    "Email must contain @ symbol and at least 3 characters after @ symbol"
  );
  if (!isValidEmail) {
    emailInput.style.border = "2px solid red";
    emailInput.setAttribute("required", "");
  } else {
    emailInput.removeAttribute("required");
  }
});

contactClick.addEventListener("click", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const projectValue = projectInput.value;
  const messageValue = messageInput.value;

  if (nameValue.length < 5) {
    showErrorMessage(
      "Oops...",
      "Name must be at least 5 characters long",
      "Why do I have this issue?"
    );
    nameInput.setAttribute("required", "");
    nameInput.focus();
  } else if (!validateEmail(emailValue)) {
    showErrorMessage(
      "Oops...",
      "Please enter a valid email address",
      "Why do I have this issue?"
    );
    emailInput.style.border = "2px solid red";
    emailInput.setAttribute("required", "");
  } else if (projectValue.length < 20) {
    showErrorMessage(
      "Oops...",
      "Please provide a project description of at least 20 characters",
      "Why do I have this issue?"
    );
    projectInput.style.border = "2px solid red";
    projectInput.setAttribute("required", "");
  } else if (messageValue.length < 100) {
    showErrorMessage(
      "Oops...",
      "Please enter a message of at least 100 characters",
      "Why do I have this issue?"
    );
    messageInput.style.border = "2px solid red";
    messageInput.setAttribute("required", "");
  } else {
    Swal.fire("Good job!", "You clicked the button!", "success");
  }
});

// DARK MODE
document.addEventListener("DOMContentLoaded", function () {
  const themeIcon = document.getElementById("theme-icon");
  const body = document.querySelector("body");
  const elements = document.querySelectorAll(
    ".home__title, .about-title, .about-info-title, .qualification-button, .qualification-data h3, .faq-title, .project-button, .contact-description h3, .input-message"
  );

  const currentTheme = localStorage.getItem("theme");
  currentTheme === "dark" ? enableDarkMode() : enableLightMode();

  themeIcon.addEventListener("click", function () {
    body.classList.toggle("dark-bg");
    elements.forEach((element) => element.classList.toggle("dark-bg2"));
    themeIcon.classList.toggle("fa-sun");
    themeIcon.classList.toggle("fa-moon");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-bg") ? "dark" : "light"
    );
  });

  function enableDarkMode() {
    body.classList.add("dark-bg");
    elements.forEach((element) => element.classList.add("dark-bg2"));
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeIcon.style.width = "22px"; 
    localStorage.setItem("theme", "dark");
  }

  function enableLightMode() {
    body.classList.remove("dark-bg");
    elements.forEach((element) => element.classList.remove("dark-bg2"));
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeIcon.style.width = "22px"; 
    localStorage.setItem("theme", "light");
  }
});

// SHOW SCROLL UP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);