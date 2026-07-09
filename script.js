const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const header = document.querySelector(".site-header");
const cursorGlow = document.querySelector(".cursor-glow");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* Mobile menu */
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });

  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });
}

/* Header blur after scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* Soft cursor glow on desktop */
window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;

  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});

/* Reveal animation on scroll */
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

/* Premium number highlight effect */
const priceCards = document.querySelectorAll(".mini-price, .plan-card, .demo-card, .step");

priceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.filter = "brightness(1.08)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.filter = "brightness(1)";
  });
});

/* Smooth active close for Escape key */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks && menuBtn) {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});
