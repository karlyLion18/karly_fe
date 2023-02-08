import { getNode, removeClass, addClass, renderCartPopup, deleteCartPopup, countnum } from "/client/lib/index.js";

const cart_popup = getNode('.cart-popup-wrapper');
export function show_cart_popup(e) {
  let showButton = e.target.closest('.recommend-list__cart-add');
  let listWrapper = e.target.closest('.recommend-list');

  if (!showButton || !listWrapper) return;

  renderCartPopup(cart_popup, showButton);

  addClass(document.body, 'stop-scrolling');
  removeClass(cart_popup, 'hidden');

}


export function close_cart_popup(e) {
  let buttonWrapper = e.target.closest('.cart-popup__button-list');
  let closeButton = e.target.closest('.cart-popup__button--cancel');

  if (!buttonWrapper || !closeButton) return;

  removeClass(document.body, 'stop-scrolling');
  addClass(cart_popup, 'hidden');

  deleteCartPopup(cart_popup);
  countnum(1);
}

export function add_cart_popup(e) {
  let buttonWrapper = e.target.closest('.cart-popup__button-list');
  let addButton = e.target.closest('.cart-popup__button--add');

  if (!buttonWrapper || !addButton) return;

  console.log("add");

}