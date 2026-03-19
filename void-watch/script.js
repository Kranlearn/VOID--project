// ── Horloge en temps réel ────────────────────────
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg   = hours * 30 + minutes * 0.5;

  document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hourHand').style.transform   = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// ── Scroll reveal ────────────────────────────────
const reveals = document.querySelectorAll('.about, .collection, .specs, .order, .stat, .product-card, .spec-item');

reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── Nav scroll effect ────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = '#e8e8e4';
  } else {
    nav.style.borderBottomColor = 'transparent';
  }
});

// ── Order form ───────────────────────────────────
function submitOrder() {
  const name  = document.getElementById('orderName').value.trim();
  const email = document.getElementById('orderEmail').value.trim();
  const model = document.getElementById('orderModel').value;
  const confirm = document.getElementById('orderConfirm');

  if (!name || !email || !model) {
    confirm.textContent = '⚠ Please fill in all fields.';
    confirm.style.color = '#c0392b';
    return;
  }

  if (!email.includes('@')) {
    confirm.textContent = '⚠ Please enter a valid email.';
    confirm.style.color = '#c0392b';
    return;
  }

  confirm.textContent = `✓ Thank you ${name} — your ${model} reservation is confirmed.`;
  confirm.style.color = '#27ae60';

  document.getElementById('orderName').value  = '';
  document.getElementById('orderEmail').value = '';
  document.getElementById('orderModel').value = '';
}

// ── Smooth scroll ────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
// ── Carousel ─────────────────────────────────────
let currentSlide = 0;
const cards = document.querySelectorAll('.carousel-track .product-card');
const dotsWrap = document.getElementById('carouselDots');

// Crée les dots
cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  dotsWrap.appendChild(dot);
});

// Affiche le premier slide
cards[0].classList.add('active');

function goToSlide(index) {
  cards[currentSlide].classList.remove('active');
  document.querySelectorAll('.carousel-dot')[currentSlide].classList.remove('active');

  currentSlide = (index + cards.length) % cards.length;

  cards[currentSlide].classList.add('active');
  document.querySelectorAll('.carousel-dot')[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  goToSlide(currentSlide + direction);
}