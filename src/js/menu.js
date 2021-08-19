import menuData from './menu.json';
import menuCardTemplate from '../templates/menu.hbs';

console.log(menuCardTemplate);

const menu = document.querySelector('.js-menu');
const menuCardMarckup = menuCardTemplate(menuData);
menu.insertAdjacentHTML('beforeend', menuCardMarckup);

