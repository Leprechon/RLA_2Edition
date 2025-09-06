// script.js
// R.L. Anino Dental Clinic Management System (RLADCMS)
// Handles form validation, dropdown fixes, and UX enhancements

document.addEventListener('DOMContentLoaded', function () {
  // ====== 1. Form Validation (Bootstrap 5) ======
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);

    // Optional: Focus feedback for better UX
    const inputs = form.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
      });
    });
  });

  // ====== 2. Auto-hide Success Messages ======
  const successMsg = document.querySelector('.alert-success');
  if (successMsg) {
    setTimeout(() => {
      successMsg.style.opacity = '0';
      successMsg.style.transition = 'opacity 0.5s ease';
      setTimeout(() => successMsg.remove(), 600);
    }, 3000);
  }

  // ====== 3. Fix Dropdown Links: Allow "About Us" & "Services" to Navigate ======
  // Fix dropdowns on mobile: Tap to open, tap sub-item to navigate
document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle[href]:not([href="#"])');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const isMobile = window.innerWidth <= 991;

      if (isMobile) {
        e.preventDefault(); // Prevent navigation on first tap

        const menu = this.nextElementSibling;
        menu.classList.toggle('show');
      }
      // On desktop: allow hover + click to navigate
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });

  // Close dropdown when resizing to desktop
  let isMobile = window.innerWidth <= 991;
  window.addEventListener('resize', () => {
    const isNowMobile = window.innerWidth <= 991;
    if (!isNowMobile && isMobile) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
    isMobile = isNowMobile;
  });
});

  // ====== 4. Smooth Scroll for Anchor Links (e.g., #mission, #vision) ======
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ====== 5. Navbar Background on Scroll ======
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-sm');
      } else {
        navbar.classList.remove('bg-white', 'shadow-sm');
      }
    });
  }

  // ====== 6. Active Link Highlighting in Navbar ======
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (linkPage.endsWith('.html') && currentPage === 'index.html' && linkPage === 'index.html')) {
      link.classList.add('active');
      link.style.color = '#006666 !important';
    }
  });

  // ====== 7. Optional: Prevent Double Submissions ======
  const submitButtons = document.querySelectorAll('button[type="submit"]');
  submitButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      if (!btn.disabled) {
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Processing...';
        // Re-enable after 3 seconds (simulate processing)
        setTimeout(() => {
          if (btn.disabled) btn.disabled = false;
          btn.innerHTML = originalText;
        }, 3000);
      }
    });
  });
});
