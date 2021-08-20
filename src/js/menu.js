import menuData from './menu.json';
import menuCardTemplate from '../templates/menu.hbs';

const menu = document.querySelector('.js-menu');
const menuCardMarckup = menuCardTemplate(menuData);
const tagList = document.querySelector('.tag-list');
const tagItem = document.querySelector('.tag-list__item');
menu.insertAdjacentHTML('beforeend', menuCardMarckup);



// const ingredient =  menuData.ingredients.map(elem => {
//   tagItem.textContent = elem;
//   return;
 
// })
//  tagList.append(...ingredient);