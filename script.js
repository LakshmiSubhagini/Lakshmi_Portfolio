document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".section-page");
  const contactBtn = document.querySelector('.btn[href="#contact"]');

  function showSection(id) {
    sections.forEach(section => section.classList.remove("show"));
    navLinks.forEach(link => link.classList.remove("active"));

    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.classList.add("show");
      document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add("active");
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });

  // ✅ Handle "Contact Me" button in hero section
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showSection("contact");
    });
  }

  // ✅ Optional: Open correct section if user reloads with hash
  const initial = window.location.hash?.substring(1) || "home";
  showSection(initial);
});
