import { insertLast, priceChange } from "/client/lib/index.js";


const createProductsCard = (data) => {

  if (data.saleRatio === 0) {
    return /* html */ `
  <div class="swiper-slide recommend-list__swiper">
          <img class="recommend-list__img" src="/client/assets/${data.image.thumbnail}" alt="" />
          <div class="recommend-list__product-info">
            <h3 class="recommend-list__product-name">${data.name}</h3>
            <span class="recommend-list__price">${priceChange(data.price)}원</span>
           
          </div>
          <button class="recommend-list__cart-add" type="button">
            <img src="/client/assets/icons/Icon/Cart.svg" alt="">
          </button>
        </div>
  `}

  else {
    return /* html */ `
    <div class="swiper-slide recommend-list__swiper">
            <img class="recommend-list__img" src="/client/assets/${data.image.thumbnail}" alt="" />
            <div class="recommend-list__product-info">
              <h3 class="recommend-list__product-name">${data.name}</h3>
              <div class="recommed-list__sale-wrapper">
                <span class="recommend-list__sale-ratio">${data.saleRatio * 100}%</span>
                <span class="recommend-list__sale-price">${priceChange(data.salePrice)}원</span>
                
              </div>
              <span class="recommend-list__before-price">${priceChange(data.price)}원</span>
        
            </div>
            <button class="recommend-list__cart-add" type="button">
              <img src="/client/assets/icons/Icon/Cart.svg" alt="">
            </button>
          </div>
    `}
}


export const renderProductsCard = (target, data) => {
  insertLast(target, createProductsCard(data));
}