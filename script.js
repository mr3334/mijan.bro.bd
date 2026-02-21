// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Demo data (edit as you want)
const DATA = [
  {
    category: "Instagram Premium",
    services: [
      { name: "ONE CLICK DONE Instagram Followers", avgTime: "2 hours", min: 100, max: 50000, ratePer1000: 264.03 },
      { name: "Instagram Likes (HQ)", avgTime: "1 hour", min: 50, max: 20000, ratePer1000: 180.00 },
      { name: "Instagram Reels Views", avgTime: "30 mins", min: 100, max: 500000, ratePer1000: 55.00 },
    ],
  },
  {
    category: "TikTok",
    services: [
      { name: "TikTok Views", avgTime: "1 hour", min: 100, max: 1000000, ratePer1000: 45.00 },
      { name: "TikTok
