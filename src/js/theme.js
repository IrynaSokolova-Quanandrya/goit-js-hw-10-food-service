const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const currentTheme = localStorage.getItem('currentTheme');


function onChange(){
    body.classList.toggle(Theme.DARK);
    body.classList.toggle(Theme.LIGHT);
    localStorage.setItem('currentTheme', body.classList[0]);
    }
    
    if (currentTheme === null) {
        localStorage.setItem('currentTheme', Theme.LIGHT);
        body.classList.add(Theme.LIGHT);
    } else {
        body.classList.add(currentTheme)
    }
if (currentTheme === Theme.DARK) {
    input.checked = true;
};

    



input.addEventListener('change', onChange);
