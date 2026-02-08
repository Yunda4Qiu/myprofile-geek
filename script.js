const button = document.getElementById('pulse-btn');
const bars = document.querySelectorAll('.bar');

button.addEventListener('click', () => {
  bars.forEach((bar) => {
    bar.style.animationDuration = `${0.6 + Math.random() * 1.6}s`;
  });
  button.textContent = 'Boosted';
  button.classList.add('boost');

  window.setTimeout(() => {
    button.textContent = 'Init';
    button.classList.remove('boost');
  }, 1200);
});
