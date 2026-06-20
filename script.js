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




function copyText() {
  // Get the textarea element
  const textArea = document.getElementById("myTextarea");
  const btn = document.getElementById("copyBtn");
  
  // Use the modern Clipboard API
  navigator.clipboard.writeText(textArea.value)
    .then(() => {
      // Visual feedback: change button text temporarily
      btn.textContent = "Copied!";
      btn.classList.add("success");
      
      // Reset button after 2 seconds
      setTimeout(() => {
        btn.textContent = "Copy Text";
        btn.classList.remove("success");
      }, 2000);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
      alert("Fallback: Please select and copy manually.");
    });
}

