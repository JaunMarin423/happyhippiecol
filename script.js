/* ================================================================
   Happy Como Hippie — JavaScript
   ================================================================ */

(function () {

  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  window.closeMenu = function () {
    mobileMenu.classList.add('hidden');
  };

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('#mobile-menu a').forEach(function (link) {
    link.addEventListener('click', window.closeMenu);
  });

  /* ---- Scroll Reveal ---- */

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ---- Smooth scroll for anchor links ---- */

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

  /* ---- Navbar shadow on scroll ---- */

  var header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      header.classList.add('shadow-organic');
    } else {
      header.classList.remove('shadow-organic');
    }
  });

  /* ---- Sticky mobile bar ---- */

  var stickyBar = document.getElementById('sticky-bar');
  if (stickyBar) {
    setTimeout(function () {
      stickyBar.classList.add('visible');
    }, 1500);
  }

  /* ---- Exit-intent popup ---- */

  var exitPopup = document.getElementById('exit-popup');
  var exitClose = document.getElementById('exit-popup-close');
  var popupShown = false;

  function showPopup() {
    if (!popupShown && exitPopup) {
      exitPopup.classList.add('active');
      popupShown = true;
    }
  }

  function hidePopup() {
    if (exitPopup) {
      exitPopup.classList.remove('active');
    }
  }

  if (exitClose) {
    exitClose.addEventListener('click', hidePopup);
  }

  if (exitPopup) {
    exitPopup.addEventListener('click', function (e) {
      if (e.target === exitPopup) {
        hidePopup();
      }
    });
  }

  document.addEventListener('mouseleave', function (e) {
    if (e.clientY <= 0 && !popupShown) {
      showPopup();
    }
  });

  /* ---- Escape key closes popup ---- */

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hidePopup();
    }
  });

})();
