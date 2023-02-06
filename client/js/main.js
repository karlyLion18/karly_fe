import { getNodes, getNode, show_cart_popup, close_cart_popup, tiger, renderProductsCard } from "/client/lib/index.js";

const productsCardContainer = getNode('.swiper-wrapper')

async function rendingProductsList() {

  let response = await tiger.get(`http://localhost:3000/products`)
  console.log(response)
  let userData = response.data;


  userData.forEach((data) => {
    console.log(data);
    renderProductsCard(productsCardContainer, data)
  })

}

rendingProductsList()


const list_wrapper = getNodes('.recommend-list');
const cart_popup = getNode('.cart-popup-wrapper');

list_wrapper.forEach((item) =>
  item.addEventListener('click', show_cart_popup)
)

cart_popup.addEventListener('click', close_cart_popup);

