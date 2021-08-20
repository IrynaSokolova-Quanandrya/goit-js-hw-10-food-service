const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const input = document.getElementById('theme-switch-toggle');

input.addEventListener('change', () => {
    const theme = body.classList.toggle('dark-theme');
    theme?input.setAttribute('checked', ''):input.removeAttribute('checked');
    localStorage.setItem('theme', 'dark-theme');
} )
 
function savedTheme() {
    if (localStorage.getItem('theme', 'dark-theme')) {
        input.setAttribute('checked', '');
    }
    
}

  