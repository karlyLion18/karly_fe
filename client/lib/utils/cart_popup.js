import { getNode, getNodes, removeClass, addClass } from "/client/lib/index.js";

const cart_popup = getNode('.cart-popup-wrapper');

export function show_cart_popup(e) {
  let showButton = e.target.closest('.recommend-list__cart-add');
  let listWrapper = e.target.closest('.recommend-list');

  if (!showButton || !listWrapper) return;

  console.log('show');
  addClass(document.body, 'stop-scrolling');
  removeClass(cart_popup, 'hidden');

  fetch(`http://localhost:3000/products`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
    });

}

export function close_cart_popup(e) {
  let buttonWrapper = e.target.closest('.cart-popup__button-list');
  let closeButton = e.target.closest('.cart-popup__button--cancel');

  if (!buttonWrapper || !closeButton) return;

  console.log('close');

  removeClass(document.body, 'stop-scrolling');
  addClass(cart_popup, 'hidden');

}