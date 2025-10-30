document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelector('.categories');
  const cats = document.querySelectorAll('.cat');
  const highlight = document.querySelector('.highlight');
  const cards = document.querySelectorAll('.card');
  let activeIndex = 0;

  // ===== NAVBAR HIGHLIGHT =====
  function moveHighlight(index) {
    const width = 100 / cats.length;
    highlight.style.left = `${index * width}%`;
    highlight.style.width = `${width}%`;
    cats.forEach((c, i) => {
      c.classList.toggle('active', i === index);
    });
  }

  cats.forEach((cat, index) => {
    cat.addEventListener('mouseenter', () => moveHighlight(index));
    cat.addEventListener('click', () => {
      activeIndex = index;
      moveHighlight(index);
      const category = cat.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      filterGallery(category);
    });
  });

  categories.addEventListener('mouseleave', () => moveHighlight(activeIndex));
  moveHighlight(activeIndex);

  // ===== FILTER GALERI =====
  function filterGallery(category) {
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  filterGallery('all');
});
