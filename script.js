// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    panels.forEach(p => p.classList.remove("active"));
    document.getElementById(target)?.classList.add("active");
  });
});

// Ticker items (demo activity)
const items = [
  ["1,000 likes delivered", "2 mins ago"],
  ["500 views delivered", "6 mins ago"],
  ["1,000 followers delivered", "14 mins ago"],
  ["2,500 likes delivered", "22 mins ago"],
  ["5,000 views delivered", "31 mins ago"],
  ["500 followers delivered", "43 mins ago"],
];

const track = document.getElementById("tickerTrack");
function makeTickerRow(){
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.gap = "22px";
  items.forEach(([txt, time]) => {
    const el = document.createElement("div");
    el.className = "ticker-item";
    el.innerHTML = `<span>${txt}</span><span class="ticker-pill">${time}</span>`;
    row.appendChild(el);
  });
  return row;
}

// duplicate row for seamless loop
if (track){
  track.appendChild(makeTickerRow());
  track.appendChild(makeTickerRow());
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mini-cards preset -> scroll to services
document.querySelectorAll("[data-preset]").forEach(el => {
  el.addEventListener("click", () => {
    // You can store preset in localStorage and show in checkout if you want
    localStorage.setItem("preset", el.dataset.preset);
  });
});

// Modal checkout (demo)
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const orderHint = document.getElementById("orderHint");

function openModal(title){
  modalTitle.textContent = title;
  orderHint.textContent = `Selected: ${title}. (Demo) You can connect real payment later.`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function hideModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-checkout]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.checkout));
});

closeModal?.addEventListener("click", hideModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

document.getElementById("checkoutForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const link = document.getElementById("orderLink").value.trim();
  const size = document.getElementById("orderSize").value;
  alert(`Order received (demo) ✅\n\nLink: ${link}\nSize: ${size}\n\nNext: connect payment + order system.`);
  hideModal();
});

// Contact form -> mailto (no backend)
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("message").value.trim();

  // CHANGE THIS:
  const toEmail = "yourmail@example.com";

  const subject = encodeURIComponent(`Support message from ${name}`);
  const body = encodeURIComponent(msg);
  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
