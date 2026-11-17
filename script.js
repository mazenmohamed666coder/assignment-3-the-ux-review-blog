var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobile-menu');

function toggleMenu(open) {
  mobileMenu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? 'CLOSE' : 'MENU';
}

menuBtn.addEventListener('click', function () {
  toggleMenu(!mobileMenu.classList.contains('open'));
});

mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    toggleMenu(false);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') toggleMenu(false);
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) toggleMenu(false);
});

document.querySelectorAll('a[href="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

var loadBtn = document.getElementById('loadMore');
var articles = document.getElementById('articles');

loadBtn.addEventListener('click', function () {
  var cards = articles.querySelectorAll('.card');
  cards.forEach(function (card) {
    articles.appendChild(card.cloneNode(true));
  });
  loadBtn.textContent = 'NO MORE ARTICLES';
  loadBtn.disabled = true;
});

var form = document.getElementById('newsletter');
var email = document.getElementById('email');
var msg = document.getElementById('formMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  msg.classList.toggle('error', !valid);
  if (valid) {
    msg.textContent = 'You are in. Stay brutal!';
    form.reset();
  } else {
    msg.textContent = 'Enter a valid email address.';
  }
});
