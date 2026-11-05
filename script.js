
/*
  SG Testing & Industrial Services
  Website JavaScript
*/

document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");

  // Automatically update copyright year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Close mobile navigation
  function closeMenu() {
    if (!menuBtn || !navLinks) return;

    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute(
      "aria-label",
      "Open navigation menu"
    );
  }

  // Mobile menu interaction
  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
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
    });

    // Close after selecting a section
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Escape closes navigation
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Click outside closes navigation
    document.addEventListener("click", function (event) {
      const clickedMenu = navLinks.contains(event.target);
      const clickedButton = menuBtn.contains(event.target);

      if (!clickedMenu && !clickedButton) {
        closeMenu();
      }
    });

    // Reset when returning to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });

  }

});
