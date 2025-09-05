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
  // Bootstrap blocks href when data-bs-toggle="dropdown" is present
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle[href]:not([href="#"])');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const isDropdownOpen = this.classList.contains('show');

      // If dropdown is already open, follow the link immediately
      if (isDropdownOpen) {
        setTimeout(() => {
          window.location.href = href;
        }, 100);
        e.preventDefault(); // Prevent re-triggering dropdown
      } else {
        // First click: open dropdown
        // Allow Bootstrap to handle dropdown toggle
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.classList.remove('show');
      });
    }
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

// Fade in welcome section on scroll
const welcomeSection = document.querySelector('.section.bg-light');
if (welcomeSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  welcomeSection.style.opacity = '0';
  welcomeSection.style.transform = 'translateY(20px)';
  welcomeSection.style.transition = 'all 0.8s ease';
  observer.observe(welcomeSection);
}