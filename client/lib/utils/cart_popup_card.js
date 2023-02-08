import { getNode, insertLast, priceChange, clearContents, rendernum } from "/client/lib/index.js";

const createCartPopup = (node) => {

  const product_info = node.previousElementSibling;
  const product_name = product_info.firstElementChild.innerText;
  let product_price = (product_info.lastElementChild.innerText).replace(/[^0-9]/g, "");
  if (product_info.childElementCount === 3) {
    const sale_price = product_info.lastElementChild.previousElementSibling;
    product_price = (sale_price.lastElementChild.innerText).replace(/[^0-9]/g, "");
  }

  return /* html */ `
  <div class="cart-popup ">
      <div class="cart-popup__item">
        <div class="cart-popup__item-wrapper">
          <div class="cart-popup__item-name">${product_name}</div>
          <div class="cart-popup__price">${priceChange(product_price)}원</div>
          <div class="cartProduct__counter">
            <button class="cartProduct__minus"></button>
            <span class="cartProduct__countNum">1</span>
            <button class="cartProduct__plus"></button>
          </div>
        </div>
        <div class="cart-popup__price-wrapper">
          <div class="cart-popup__price-unit-wrapper">
            <div class="cart-popup__total-price">합계</div>
            <div class="cart-popup__total-price-wrapper">
              <span class="cart-popup__floating-price">${priceChange(product_price)}원</span>
  <span class="cart-popup__price-unit"></span>
            </div >
          </div >
  <div class="mileage">
    <span class="point">적립</span>
    <span class="point-detail">구매 시 5원 적립</span>
  </div>
        </div >
      </div >
  <div class="cart-popup__button-list">
    <button class="cart-popup__button cart-popup__button--cancel">취소</button>
    <button class="cart-popup__button cart-popup__button--add">장바구니 담기</button>
  </div>
    </div >
  `
}

export const renderCartPopup = (target, node) => {
  insertLast(target, createCartPopup(node));
}

export const deleteCartPopup = (target) => {
  clearContents(target);
}