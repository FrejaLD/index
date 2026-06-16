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



// Mobile menu toggle
document.getElementById('gen-ham').addEventListener('click', function() {
  var nav = document.getElementById('gen-nav');
  var menu = document.getElementById('gen-menu');
  var isOpen = menu.classList.toggle('open');
  nav.classList.toggle('mobile-open', isOpen);
});
 
// Close menu when clicking outside
document.addEventListener('click', function(e) {
  var nav = document.getElementById('gen-nav');
  var menu = document.getElementById('gen-menu');
  if (!nav.contains(e.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    nav.classList.remove('mobile-open');
  }
});

// Mobile collapsed submenu toggle
document.querySelectorAll('#gen-menu > li.has-sub > a').forEach(function(a) {
  a.addEventListener('click', function(e) {
    // Only intercept on mobile (hamburger visible)
    var ham = document.getElementById('gen-ham');
    if (ham && getComputedStyle(ham).display !== 'none') {
      e.preventDefault();
      var li = a.parentElement;
      li.classList.toggle('sub-open');
      var sub = li.querySelector('ul');
      if (sub) sub.classList.toggle('sub-open');
    }
  });
});
