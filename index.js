let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

AOS.init(); // INIT AOS PLUGIN

function toggleContrast() {
  // LIGHT/DARK MODE TOGGLER
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact() {
  // EMAIL CONTACT PLUGIN
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_a66ia17",
      "template_rl1qz5r",
      event.target,
      "9luxz5C1bYZbUl7ce"
    )
    .then(() => {
      loading.classList.remove("modal__overlay-visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on nunowdev@gmail.com"
      );
    });
}

function toggleModal() {
  // TOGGLE CONTACT MODAL
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
