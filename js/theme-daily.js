// theme-daily.js
// This script switches the website theme automatically every day
// Odd days → theme1.css (green/light)
// Even days → theme2.css (orange/dark)

(function() {
    // Get today's date
    const today = new Date();
    const day = today.getDate();

    // Choose theme based on day (odd/even)
    const themeFile = (day % 2 === 0) ? 'theme2.css' : 'theme1.css';

    // Get the <link> element with id="theme-style"
    const themeLink = document.getElementById('theme-style');

    // Apply the chosen theme
    if (themeLink) {
        themeLink.setAttribute('href', `css/${themeFile}`);
        console.log(`Theme applied: ${themeFile}`);
    } else {
        console.warn('Theme link element not found!');
    }
})();
