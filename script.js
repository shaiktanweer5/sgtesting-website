
/* SG Testing & Industrial Services
   Website JavaScript
*/

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    // Close mobile menu when Escape is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
}

// Update copyright year automatically
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
