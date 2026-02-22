// Year in footer
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

// Mobile nav menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Theme toggle (persisted)
const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);

themeBtn?.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "" : "dark";
  if (next) document.documentElement.setAttribute("data-theme", next);
  else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem("theme", next);
});

// Copy link buttons (post page)
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(location.href);
      const old = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => btn.textContent = old, 1200);
    }catch{
      alert("Copy failed");
    }
  });
});
