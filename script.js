(() => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');

  function setOpen(open){
    hamburger.setAttribute('aria-expanded', String(open));
    if(open){
      mobileNav.hidden = false;
      mobileNav.style.display = 'block';
    }else{
      mobileNav.hidden = true;
      mobileNav.style.display = 'none';
    }
  }

  // Init
  setOpen(false);

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  // Close mobile nav when clicking a link
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Smooth reveal on scroll (tiny, no libraries)
  const items = document.querySelectorAll('.aboutCard, .service, .workCard, .quote, .contactCard, .form, .stat, .showcase');
  const io = new IntersectionObserver((entries) => {
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add('reveal');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));

  // Contact form demo submit
  window.MIJAN_submit = (ev) => {
    ev.preventDefault();
    const btn = ev.target.querySelector('button[type="submit"]');
    const old = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = "Sent ✓ (demo)";
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = old;
      ev.target.reset();
    }, 1400);
    return false;
  };
})();
