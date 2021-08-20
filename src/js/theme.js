

const body = document.querySelector('body');
console.log(body);

const input = document.getElementById('theme-switch-toggle');
input.addEventListener('change', onDarckTheme);

input.getAttribute("checked");

function onDarckTheme() {
    const darckTheme = {
        theme: 'darck',
        checked: 'true',
        change: 'on'
}

    body.classList.toggle('dark-theme');
    input.getAttribute("checked", "true");
    localStorage.setItem('theme', 'DARK');
}




localStorage.getItem('theme');

// console.log(localStorage);

