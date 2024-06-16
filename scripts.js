// Hamburger menu untuk mobile version
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// tombol back to top untuk memudahkan navigasi
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTop").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
