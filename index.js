import { DateTime } from './modules/luxon.min.js';
import Books from './modules/Books.js';
import {
  list, allSection, inputSection, contactUs, linksAll, btnAdd,
  linksAdd, contactLink, menuList, copyRight, addLink, contactSection, time,
} from './modules/constDeclaration.js';
/* eslint-disable no-alert */
const title = document.getElementById('title');
const author = document.getElementById('author');

const book = new Books(title, author);
book.displayBooks();

window.addEventListener('load', () => {
  menuList[0].classList.add('active');
  inputSection.style.display = 'none';
  contactSection.style.display = 'none';
});

list.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'flex';
  inputSection.style.display = 'none';
  contactUs.style.display = 'none';
  copyRight.style.marginTop = '5%';
  linksAll.style.color = 'blue';
  linksAdd.style.color = 'black';
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'flex';
  contactSection.style.display = 'none';
  copyRight.style.marginTop = '23%';
  linksAdd.style.color = 'blue';
  linksAll.style.color = 'black';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
  copyRight.style.marginTop = '19%';
  linksAdd.style.color = 'black';
  linksAll.style.color = 'black';
});

btnAdd.addEventListener('click', book.addBook);

const displayDate = () => {
  const currentDateTime = DateTime.now();
  time.innerHTML = currentDateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

window.onload = () => { book.displayBooks(); };
setInterval(displayDate, 1000);
