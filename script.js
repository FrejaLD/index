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


$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
    	event.preventDefault();
    	var content = $('.modal-body');
    	content.empty();
      	var title = $(this).attr("title");
      	$('.modal-title').html(title);      	
      	content.html($(this).html());
      	$(".modal-profile").modal({show:true});
    });

  });
