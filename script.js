const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const themeToggleButton = document.getElementById('theme-toggle');

let counter = 0;
let isDarkMode = localStorage.getItem('theme') === 'dark';

if (isDarkMode) {
    document.body.classList.add('dark');
}

function updateCounter() {
    counterDisplay.textContent = counter;
}

function toggleThemeText() {
    themeToggleButton.textContent = isDarkMode
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
}

incrementButton.addEventListener('click', ()=> {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', ()=> {
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', ()=> {
    counter = 0;
    updateCounter();
});

themeToggleButton.addEventListener('click', ()=> {
isDarkMode = !isDarkMode;
document.body.classList.toggle ('dark', isDarkMode);
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
toggleThemeText();
});

toggleThemeText();
updateCounter();

document.addEventListener('touchstart', function (event) {
 if(event.touches.length > 1) {
    event.preventDefault();
 }
}, {passive: false});

let lastTouchEnd = 0;
document.addEventListener('touched', function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {passive: false});