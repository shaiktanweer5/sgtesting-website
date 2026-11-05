
/*
  SG Testing & Industrial Services
  Website JavaScript
*/

document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    if (!menuBtn || !navLinks) return;

    navLinks.classList.remove("open");

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    menuBtn.textContent = "☰";
  }

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("open");

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuBtn.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

      menuBtn.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after choosing a page section
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close when clicking outside the menu
    document.addEventListener("click", (event) => {

      const insideMenu = navLinks.contains(event.target);
      const onButton = menuBtn.contains(event.target);

      if (!insideMenu && !onButton) {
        closeMenu();
      }

    });

    // Reset menu when switching to desktop view
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });

  }

  // Automatic copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
