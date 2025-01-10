const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const themeToggleButton = document.getElementById('theme-toggle');

let counter = 0;
let isDarkMode = localStorage.getItem('theme') === 'dark';

// テーマ初期化
if (isDarkMode) {
  document.body.classList.add('dark');
}

// カウンター更新
function updateCounter() {
  counterDisplay.textContent = counter;
}

// テーマ切り替えボタンの文言を更新
function toggleThemeText() {
  themeToggleButton.textContent = isDarkMode
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
}

// イベントリスナー
incrementButton.addEventListener('click', () => {
  counter++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  counter--;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  counter = 0;
  updateCounter();
});

themeToggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark', isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  toggleThemeText();
});

// 初期化
toggleThemeText();
updateCounter();

// ダブルタップによるズームを防止
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false });