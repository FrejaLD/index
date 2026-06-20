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




const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the target textarea ID from the data-target attribute
    const targetId = button.getAttribute('data-target');
    const textarea = document.getElementById(targetId);

    if (textarea) {
      // Use the Clipboard API to copy the text
      navigator.clipboard.writeText(textarea.value)
        .then(() => {
          // Success: Provide temporary visual feedback
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.classList.add('copied'); // Optional for CSS styling

          // Reset button text after 2 seconds
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          alert('Could not copy text. Please try manually.');
        });
    }
  });
});
