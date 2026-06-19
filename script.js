setTimeout(() => {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("modalImg");
  const cardImages = document.querySelectorAll(".card_image img");

  // 1. OPENING THE MODAL: When a thumbnail is clicked
  cardImages.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation(); // Stops it from instantly closing itself
      if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = img.src;
        console.log("Modal opened with image:", img.src);
      }
    });
  });

  // 2. CLOSING THE MODAL: Catching any click on the screen while modal is active
  if (modal) {
    modal.addEventListener("click", () => {
      modal.style.display = "none";
      console.log("Modal closed!");
    });
  }
}, 250);


function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}




document.querySelectorAll('.copy-icon-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const textarea = document.getElementById(targetId);
    const icon = button.querySelector('.icon-state');
    
    navigator.clipboard.writeText(textarea.value)
      .then(() => {
        // Change icon and add green styling class
        icon.textContent = 'check';
        button.classList.add('copied');
        
        // Reset back to original state after 2 seconds (2000ms)
        setTimeout(() => {
          icon.textContent = 'content_copy';
          button.classList.remove('copied');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  });
});
