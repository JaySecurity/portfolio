let cards = document.querySelectorAll('.card-container');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    card.style.backgroundColor = 'white';
  });
});
