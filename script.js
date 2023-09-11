let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const scrollReveal = ScrollReveal(scrollRevealOptions);
scrollReveal.reveal(".home .content h3");

ScrollReveal().reveal(".home .content p", {
  ...scrollReveal,
  delay: 500,
});

ScrollReveal().reveal(".home .content .btn", {
  ...scrollReveal,
  delay: 1000,
});
