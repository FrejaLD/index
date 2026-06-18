const backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");

// Corrected selector using underscores to match the CodePen HTML
const cardImages = document.querySelectorAll(".card_image img");

// Open modal when any card image is clicked
cardImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Close modal when clicking the 'X' button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking anywhere outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
