const backgrounds = document.querySelectorAll('.background-slideshow img');
const sections = document.querySelectorAll('.content-section');

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
