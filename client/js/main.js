import { getNodes, getNode, plus_popup, minus_popup, show_cart_popup, close_cart_popup, add_cart_popup, tiger, close_ad_popup, renderProductsCard } from "/client/lib/index.js";

const productsCardContainer = getNode('.swiper2 > .swiper-wrapper')


async function rendingProductsList() {

  let response = await tiger.get(`http://localhost:5001/products`)

  let userData = response.data;

  userData.forEach((data) => {
    renderProductsCard(productsCardContainer, data)
  })

}


const list_wrapper = getNodes('.recommend-list');
const cart_popup = getNode('.cart-popup-wrapper');
const ad_popup = getNode('.ad-popup');

list_wrapper.forEach((item) =>
  item.addEventListener('click', show_cart_popup)
)

cart_popup.addEventListener('click', close_cart_popup);
cart_popup.addEventListener('click', add_cart_popup);

cart_popup.addEventListener('click', plus_popup);
cart_popup.addEventListener('click', minus_popup);

ad_popup.addEventListener('click', close_ad_popup);

async function getStorageCartProduct() {
  getStorageCartProducts = await loadStorage('cartProduct');
}

rendingProductsList();