// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple animated counters
function animateCount(el, to, duration = 900) {
  const start = performance.now();
  const from = 0;

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const val = Math.floor(from + (to - from) * t);
    el.textContent = val;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

animateCount(document.getElementById("statProjects"), 3);
animateCount(document.getElementById("statDays"), 14);
animateCount(document.getElementById("statCoffee"), 27);

// Contact form -> opens mail app (no backend)
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("message").value.trim();

  // তোমার email এখানে বসিয়ে দাও:
  const toEmail = "yourmail@example.com";

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(msg);

  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
