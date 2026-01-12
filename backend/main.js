const filterButtons = document.querySelectorAll('.filter-btn');
const carCards = document.querySelectorAll('.car-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    carCards.forEach(card => {
      if (filter === 'todos') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(filter)
          ? 'block'
          : 'none';
      }
    });
  });
});
