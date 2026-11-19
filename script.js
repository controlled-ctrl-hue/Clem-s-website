// Small, intentional touches only — nothing flashy.

// Gently settle cards into place on first view (respects reduced-motion).
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  const cards = document.querySelectorAll(".card, .entry");
  cards.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform += " translateY(10px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.opacity = "1";
        // strip the extra translateY we tacked on, keep the card's own tilt
        el.style.transform = el.style.transform.replace(" translateY(10px)", "");
        io.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((el) => io.observe(el));
})();
