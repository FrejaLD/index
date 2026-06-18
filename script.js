// Delay execution to let CodePen finish rendering HTML
setTimeout(() => {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");
  const cardImages = document.querySelectorAll(".card_image img");

  if (modal && closeBtn) {
    
    // Open modal on card image click
    cardImages.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    // Close modal when clicking 'X'
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking the dark background overlay
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // NEW: Close modal when clicking directly on the expanded image
    modalImg.addEventListener("click", () => {
      modal.style.display = "none";
    });
    
    console.log("Lightbox successfully initialized with image-close function!");
  }
}, 200);
