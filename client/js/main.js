import { karlyxios } from '/js/common/karlyxios.js';
import { getNode, insertAfter, insertFirst, insertLast } from '/lib/dom/index.js';

const cartList_add = getNode('.cartProduct-section');
const cartList_show = getNode('.cartList');

const recommendWrapper = getNode('.recommend-wrapper');

const add_product = () => {
  return /* html */ `
  <article class="cartProductList">
            <ul>
              <li class="cartProduct">
                <img class="cartProduct__check" src="/client/assets/img/cart/isChecked=true.png" alt="체크된 이미지" />
                <img class="cartProduct__img" src="/client/assets/img/cart/cartProduct.png" alt="탱탱쫄면 이미지" />
                <p class="cartProduct__name">[풀무원] 탱탱쫄면 (4개입)</p>
                <div class="cartProduct__counter">
                  <button class="cartProduct__minus"></button>
                  <span class="cartProduct__countNum">1</span>
                  <button class="cartProduct__plus"></button>
                </div>
                <span class="cartProduct__price">4,980원</span>
                <button type="button" class="closeIconbtn"></button>
              </li>
            </ul>
          </article>
          <article class="cartProductList">
            <ul>
              <li class="cartProduct">
                <img class="cartProduct__check" src="/client/assets/img/cart/isChecked=true.png" alt="체크된 이미지" />
                <img class="cartProduct__img" src="/client/assets/img/cart/cartProduct.png" alt="탱탱쫄면 이미지" />
                <p class="cartProduct__name">[풀무원] 탱탱쫄면 (4개입)</p>
                <div class="cartProduct__counter">
                  <button class="cartProduct__minus"></button>
                  <span class="cartProduct__countNum">1</span>
                  <button class="cartProduct__plus"></button>
                </div>
                <span class="cartProduct__price">4,980원</span>
                <button type="button" class="closeIconbtn"></button>
              </li>
            </ul>
          </article>
  `;
};

const render_list = (target) => {
  insertAfter(target, add_product());
};

export const recommendProduct = ({
  id = '',
  name = '',
  price = '',
  image = {
    thumbnail: '',
    alt: '',
    view:''
  },
} = {}) => {
  return /*html*/ `
      <div class="swiper-slide recommend-list__swiper">
        <a href="/src/page/product_detail.html/${id}">
          <img class="recommend-list__img" src="/assets/${image.view}" alt="${image.alt}" />
          <div class="recommend-list__product-info">
            <h3 class="recommend-list__product-name">${name}</h3>
            <span class="recommend-list__price">${price}원</span>
          </div>
        </a>
        <button class="recommend-list__cart-add" type="button">
          <img src="/assets/icons/Icon/Cart.svg" alt="" />
        </button>
      </div>
  `;
};

export const recommendCard = (target, data) => {
  insertLast(target, recommendProduct(data));
};

const renderRecommend = async () => {
  try {
    let res = await karlyxios.get('http://localhost:5001/products');
    let productData = res.data;
    console.log('🚀 ⁝ renderRecommend ⁝ productData', productData)

    productData.forEach((data) => {
      recommendCard(recommendWrapper, data);
    });

    recommendCard(recommendWrapper, productData);
  } catch (err) {
    console.log(err);
  }
};

renderRecommend();

const handler_show = () => {
  let showButton = e.target.closest('.cartList__showListIcon');
  let list = e.target.closest('.cartList__foodType');

  if (!showButton || !list) return;

  console.log('bb');

  render_list(list);
};

const handler_delete = () => {
  let close = e.target.closest('.closeIconbtn');
  let close_article = e.target.closest('.cartProductList');

  if (!close || !close_article) return;

  close_article?.parentNode.removeChild(close_article);
};

const handler_check = () => {
  let checkbox = e.target.closest('.cartProduct__check');
  let close_article = e.target.closest('.cartProductList');
  if (!checkbox || !close_article) return;
  // console.log('dd');

  if (checkbox.checked) {
    const newNode = document.createElement('img');
    newNode.class = 'cartProduct__check';
    newNode.src = '/client/assets/img/cart/isChecked=false.png" alt="체크된 이미지"';
  }
};

cartList_show.addEventListener('click', handler_show);
cartList_show.addEventListener('click', handler_delete);
cartList_show.addEventListener('click', handler_check);