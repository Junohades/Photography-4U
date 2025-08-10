const backgrounds = document.querySelectorAll('.background-slideshow img');
const sections = document.querySelectorAll('.content-section');

// Change background on scroll
window.addEventListener('scroll', () => {
  let index = 0;
  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      index = i;
    }
  });

  backgrounds.forEach((bg, i) => {
    bg.classList.toggle('active', i === index);
  });
});

// Fade-in effect for text
const fadeIns = document.querySelectorAll('.fade-in');
const fadeInOnScroll = () => {
  fadeIns.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
