document.addEventListener('DOMContentLoaded', function () {
  // ====== Form Validation (Bootstrap 5) ======
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);

    // Optional: Focus feedback
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

  // ====== Auto-hide success messages ======
  const successMsg = document.querySelector('.alert-success');
  if (successMsg) {
    setTimeout(() => {
      successMsg.style.opacity = '0';
      successMsg.style.transition = 'opacity 0.5s ease';
      setTimeout(() => successMsg.remove(), 600);
    }, 3000);
  }
});