// Footer year
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Modal order
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const serviceName = document.getElementById("serviceName");
const orderHint = document.getElementById("orderHint");

function openModal(service){
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = "Order • " + service;
  serviceName.value = service;
  orderHint.textContent = "Demo: connect payment/order system later.";
}
function hideModal(){
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-open-order]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.service || "Service"));
});

closeModal?.addEventListener("click", hideModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

document.getElementById("orderForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const link = document.getElementById("orderLink").value.trim();
  const size = document.getElementById("orderSize").value;
  alert(`Order received (demo) ✅\n\nService: ${serviceName.value}\nLink: ${link}\nSize: ${size}`);
  hideModal();
});

// Contact form -> mailto (change your email)
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("message").value.trim();

  const toEmail = "yourmail@example.com"; // CHANGE THIS
  const subject = encodeURIComponent(`Support message from ${name}`);
  const body = encodeURIComponent(msg);

  window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
});
