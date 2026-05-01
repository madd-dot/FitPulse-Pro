// Global navigation and simple interactions
document.addEventListener("DOMContentLoaded", () => {
  console.log("FitPulse Pro Live");

  // Mobile menu toggle (if needed)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smooth appearance for elements with .fade-in
  const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    observers.observe(el);
  });

  // Handle Login/Signup redirect (simulated)
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate login and redirect to dashboard
      window.location.href = "dashboard.html";
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate signup and redirect to dashboard
      window.location.href = "dashboard.html";
    });
  }

  // Dashboard Interaction: Modal Example
  const modalToggle = document.getElementById("open-modal");
  const modal = document.getElementById("dashboard-modal");
  const closeModal = document.getElementById("close-modal");

  if (modalToggle && modal && closeModal) {
    modalToggle.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }
});
