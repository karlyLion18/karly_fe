import { getNode } from '/client/lib/index.js';

const popup = getNode('.popup');
const btnOpenPopup = getNode('.popup_btn');

export const winClose = () => {
  window.close();
};

btnOpenPopup.addEventListener('click', () => {
  popup.style.display = 'block';
});
