const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
body.classList.toggle(Theme.LIGHT);

const input = document.getElementById('theme-switch-toggle');


input.addEventListener('change', onInputChange);
function onInputChange() {
        
        const theme = body.classList.toggle(Theme.DARK);
        theme ? input.setAttribute('checked', '') : input.removeAttribute('checked');
    localStorage.setItem('theme', 'Theme.DARK');
    
};
 
function savedTheme() {
    if (localStorage.getItem('theme', 'Theme.DARK')) {
        onInputChange();
    }
    localStorage.removeItem('theme');
}
savedTheme();
  