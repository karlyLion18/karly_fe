import { getNode, removeClass, addClass } from "/client/lib/index.js";

const review_show = getNode('.productDetail-review');
const inquiry_show = getNode('.productDetail-claim');

const review_popup = getNode('.productDetail-popup-review');
const inquiry_popup = getNode('.productDetail-popup-inquiry');

export function review_popup_show(e) {
  let showButton = e.target.closest('.productDetail-review-top__reviewBtn');
  let reviewWrapper = e.target.closest('.productDetail-review');

  if (!showButton || !reviewWrapper) return;

  addClass(document.body, 'stop-scrolling');
  removeClass(review_popup, 'hidden');
}


export function review_popup_close(e) {
  let reviewWrapper = e.target.closest('.productDetail-popup__button-wrapper');
  let closeButton = e.target.closest('.productDetail-popup__cancel');

  if (!reviewWrapper || !closeButton) return;

  removeClass(document.body, 'stop-scrolling');
  addClass(review_popup, 'hidden');
}

export function inquiry_popup_show(e) {
  let showButton = e.target.closest('.productDetail-claim-top__claimBtn');
  let inquiryWrapper = e.target.closest('.productDetail-claim');

  if (!showButton || !inquiryWrapper) return;

  addClass(document.body, 'stop-scrolling');
  removeClass(inquiry_popup, 'hidden');
}


export function inquiry_popup_close(e) {
  let inquiryWrapper = e.target.closest('.productDetail-popup__button-wrapper');
  let closeButton = e.target.closest('.productDetail-popup__cancel');

  if (!inquiryWrapper || !closeButton) return;

  removeClass(document.body, 'stop-scrolling');
  addClass(inquiry_popup, 'hidden');
}

review_show.addEventListener('click', review_popup_show);
review_popup.addEventListener('click', review_popup_close)

inquiry_show.addEventListener('click', inquiry_popup_show);
inquiry_popup.addEventListener('click', inquiry_popup_close);