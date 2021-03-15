let cards = document.querySelectorAll('.card-container');

cards.forEach((card) => {
  card.addEventListener('mouseenter', (e) => {
    card.querySelector('.card').classList.toggle('card-hover');
  });
  card.addEventListener('mouseleave', (e) => {
    card.querySelector('.card').classList.toggle('card-hover');
  });
  card.addEventListener('touchstart', (e) => {
    e.preventDefault();
    card.querySelector('.card').classList.toggle('card-hover');
  });
});
