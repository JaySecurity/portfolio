let cards = document.querySelectorAll('.card-container');
let header = document.querySelector('header');
let prevScroll = window.screenY;

document.addEventListener('scroll', () => {
  setTimeout(() => {
    if (window.scrollY > prevScroll) {
      prevScroll = window.scrollY;
      header.style.top = '-100%';
    }
    if (window.scrollY < prevScroll) {
      prevScroll = window.scrollY;
      header.style.top = 0;
    }
  }, 100);
});

cards.forEach((card) => {
  card.addEventListener('mouseenter', (e) => {
    card.querySelector('.card').classList.toggle('card-hover');
  });
  card.addEventListener('mouseleave', (e) => {
    card.querySelector('.card').classList.toggle('card-hover');
  });
  card.addEventListener('touchmove', (e) => {
    e.preventDefault();
    card.querySelector('.card').classList.toggle('card-hover');
  });
});
