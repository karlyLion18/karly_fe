import { getNode, addClass } from "/client/lib/index.js";

export function close_ad_popup(e) {
  let ad_popup = getNode('.ad-popup')

  let buttonWrapper = e.target.closest('.ad-popup__button-list');
  let closeButton = e.target.closest('.ad-popup__button--close');

  if (!buttonWrapper || !closeButton) return;

  addClass(ad_popup, 'hidden');

}