import { insertLast } from "/client/lib/index.js";


const createProductsCard = ({ thumbnail = '', name = '', price = '' } = {}) => {

  return /* html */ `
  <div class="swiper-slide recommend-list__swiper">
          <img class="recommend-list__img" src="${thumbnail}" alt="" />
          <div class="recommend-list__product-info">
            <h3 class="recommend-list__product-name">${name}</h3>
            <span class="recommend-list__price">${price} 원</span>
          </div>
          <button class="recommend-list__cart-add" type="button">
            <img src="/client/assets/icons/Icon/Cart.svg" alt="">
          </button>
        </div>
  `
}

export const renderProductsCard = (target, data) => {
  console.log(createProductsCard(data))
  console.log(target)
  insertLast(target, createProductsCard(data));
}