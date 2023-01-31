import { getNode, insertAfter } from "../lib/index.js";

const cartList_add = getNode('.cartProduct-section')
const cartList_show = getNode('.cartList')

const add_product = () => {
  return /* html */ `
  <article class="cartProductList">
            <ul>
              <li class="cartProduct">
                <img class="cartProduct__check" src="../../assets/img/cart/isChecked=true.png" alt="체크된 이미지" />
                <img class="cartProduct__img" src="../../assets/img/cart/cartProduct.png" alt="탱탱쫄면 이미지" />
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
                <img class="cartProduct__check" src="../../assets/img/cart/isChecked=true.png" alt="체크된 이미지" />
                <img class="cartProduct__img" src="../../assets/img/cart/cartProduct.png" alt="탱탱쫄면 이미지" />
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
  `
}

const render_list = (target) => {
  insertAfter(target, add_product());
}


function handler(e) {
  let showButton = e.target.closest('button');
  let list = e.target.closest('li');

  if (!showButton || !list) return;

  console.log('dd')
  render_list(list)
}



cartList_show.addEventListener('click', handler)
