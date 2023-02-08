import { attr } from '../lib/dom/attr.js';
import { getNode, getNodes } from '../lib/dom/getNode.js';
import { insertLast } from '../lib/dom/insert.js';
import { karlyxios } from './index.js';
import { insertBefore } from './../lib/dom/insert.js';

/* -------------------------------------------------------------------------- */
/*                                products info                               */
/* -------------------------------------------------------------------------- */
let url = 'http://localhost:5001/products';
let productListBone = {
  id: '',
  name: '',
  description: '',
  price: '',
  saleRatio: '',
  salePrice: '',
  image: {
    thumbnail: '',
    view: '',
    banner: '',
    info: '',
    alt: ''
  },
  stock: ''
};

const karlyProduct = getNode('.karly-product');
const karlyProductMenu = getNode('.karly-product-menu__order-naming');
const karlyProductMenuToggle = getNodes('.karly-product-menu__order-li a');
const karlyPageControl = getNode('.karly-page-control');
const karlyProductTotal = getNode('.karly-product-menu__total-num');
let karlyProductTotalCount = '';


/* -------------------------------------------------------------------------- */
/*                              console.log test                              */
/* -------------------------------------------------------------------------- */
// console.log(karlyxios.get(url));
// console.log(karlyProduct);



/* -------------------------------------------------------------------------- */
/*                                function list                               */
/* -------------------------------------------------------------------------- */
function ready() {
  console.log("PRODUCT PAGE START");
  orderSortRecommend();
}



//상품 리스트에 상품 목록 표시
function createKarlyProductList(productListBone = {}) {
  let image = productListBone.image;

  if(productListBone.saleRatio){
    //세일을 한다면
    return /* html */`
    <a href="javascript:void(0);" class="karly-product-a">
      <visual class="karly-product-a__visual">
        <img src="/client/assets/${image.thumbnail}" alt="" />
        <button class="karly-product-a__visual-button">
          <img src="/client/assets/img/product_list/cart.svg" alt="" />
        </button>
      </visual>
      <div class="karly-product-info">
        <span class="karly-product-info__delivery-type">샛별배송</span>
        <span class="karly-product-info__full-name">${productListBone.name}</span>
        <div class="karly-product-price">      
          <span class="karly-product-price__discount-rate">${productListBone.saleRatio*100}%</span>
          <span class="karly-product-price__computed-price">${priceChange(productListBone.salePrice)}원</span>
        </div>
        <span class="karly-product-price__original-price">${priceChange(productListBone.price)}원</span>
        <span class="karly-product-price__oneline-review">${productListBone.description}</span>
        <div class="karly-product-badge">
          <span class="karly-product-badge__karly">
            Karly Only
          </span>
          <span class="karly-product-badge__text">
            한정수량
          </span>
        </div>
      </div>
    </a>`
  }
  else{
    //세일을 하지 않는다면
    return /* html */`
    <a href="javascript:void(0);" class="karly-product-a">
      <visual class="karly-product-a__visual">
        <img src="/client/assets/${image.thumbnail}" alt="" />
        <button class="karly-product-a__visual-button">
          <img src="/client/assets/img/product_list/cart.svg" alt="" />
        </button>
      </visual>
      <div class="karly-product-info">
        <span class="karly-product-info__delivery-type">샛별배송</span>
        <span class="karly-product-info__full-name">${productListBone.name}</span>
        <div class="karly-product-price">          
          <span class="karly-product-price__computed-price">${priceChange(productListBone.price)}원</span>
        </div>
        <span class="karly-product-price__oneline-review">${productListBone.description}</span>
        <div class="karly-product-badge">
          <span class="karly-product-badge__karly">
            Karly Only
          </span>
          <span class="karly-product-badge__text">
            한정수량
          </span>
        </div>
      </div>
    </a>`
  }
}

function toggleProductMenu(e) {
  let eventTagName = e.target.tagName;
  let eventTarget = e.target;

  if(eventTagName === 'A'){
    karlyProductMenuToggle.forEach(element => {
      attr(element, "class", "karly-product-menu__order-li--inactive");
    });
    attr(eventTarget, "class", "karly-product-menu__order-li--active");
  }

  if(eventTarget.text == '판매량순'){
    console.log("판매량순 정렬 !");
    orderSort();
  }
  if(eventTarget.text == '추천순'){
    console.log("추천순 정렬 !");
    orderSortRecommend();
  }
  
}

async function orderSortRecommend() {
  let productDataFromDB = await karlyxios.get(url);
  let objectData = productDataFromDB.data;

  removeChildkarlyProduct();
  
  karlyProductTotalCount = objectData.length;
  updateKarlyProductTotal(karlyProductTotalCount);
  objectData.forEach((element) => {
    insertLast(karlyProduct,createKarlyProductList(element));
  });
}

async function orderSort() {
  let productDataFromDB = await karlyxios.get(url);
  let objectData = productDataFromDB.data;
  objectData.sort((a,b) => a.stock - b.stock);

  removeChildkarlyProduct();
  karlyProductTotalCount = objectData.length;
  updateKarlyProductTotal(karlyProductTotalCount);

  objectData.forEach((element) => {
    insertLast(karlyProduct,createKarlyProductList(element));
  });
}

function removeChildkarlyProduct() {
  while(karlyProduct.firstElementChild){
    karlyProduct.removeChild(karlyProduct.firstElementChild);
  }
}

function karlyProductCartButton(e) {
  let karlyProductVisualButton = e.target.closest('.karly-product-a__visual-button');

  if(karlyProductVisualButton) {
    if(karlyProductVisualButton.className === 'karly-product-a__visual-button'){
      console.log("상품 장바구니 클릭 완료");
    } 
  }
}

function updateKarlyProductTotal(count) {
  karlyProductTotal.innerHTML = `총 ${count}건`;
}

function priceChange(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* -------------------------------------------------------------------------- */
/*                            addEventListener List                           */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", ready);

karlyProductMenu.addEventListener('click', (e) => toggleProductMenu(e));

karlyProduct.addEventListener('click', (e) => karlyProductCartButton(e));
