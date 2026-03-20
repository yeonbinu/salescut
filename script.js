document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.dataset.delay) || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 1000);
        
        // Ensure animation only runs once per element
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });
});
