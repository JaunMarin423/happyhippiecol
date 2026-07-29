/* ================================================================
   Happy Como Hippie — JavaScript
   ================================================================ */

(function () {

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.closeMenu = function () {
    mobileMenu.classList.add('hidden');
  };

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('#mobile-menu a').forEach(function (link) {
    link.addEventListener('click', window.closeMenu);
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      header.classList.add('shadow-organic');
    } else {
      header.classList.remove('shadow-organic');
    }
  });

})();
