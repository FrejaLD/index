// Delay execution to let CodePen finish rendering HTML
setTimeout(() => {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");
  const cardImages = document.querySelectorAll(".card_image img");

  // Only run if the modal HTML elements actually exist on screen
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

    // Close modal when clicking background overlay
    modal.addEventListener("click", () => {
  modal.style.display = "none";
      }
    });
    
    console.log("Lightbox successfully initialized!");
  } else {
    console.error("Could not initialize: Lightbox HTML elements missing from panel.");
  }
}, 200);
