const counter = document.querySelector('#stone-count');
const stone = document.querySelector('#stone');

let stones = 0;

function renderCounter() {
  counter.value = `Stones: ${stones}`;
  counter.textContent = `Stones: ${stones}`;
}

stone.addEventListener('click', () => {
  stones += 1;
  renderCounter();
});
