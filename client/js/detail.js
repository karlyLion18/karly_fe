import { karlyxios } from '/js/common/karlyxios.js';
import { insertBefore, getNode, insertAfter } from '/lib/dom/index.js';

const productDetail = getNode('.productDetail__main');

const index = document.querySelector('data-index');

export const productCard = ({
  id = '',
  name = '',
  description = '',
  price = '',
  saleRation = '',
  stock = '',
  salePrice = '',
  image = {
    thumbnail: '',
    alt: '',
  },
} = {}) => {
  return /*html*/ `
  <section class="productDetail" data-index="${id}">
  <figure class="productDetail-main__photo">
    <img
      class="productDetail-main-photo__img"
      src="${image.thumbnail}"
      alt="상품 썸네일입니다." />
  </figure>
  <div>
    <div class="productDetail-title">
      <h2 class="productDetail-title__delivery">샛별배송</h2>
      <h1 class="productDetail-title__name">${name}</h1>
      <h2 class="productDetail-title__explain">${description}</h2>
      <h2 class="productDetail-title__price">
        <span class="productDetail-title-price__number">${salePrice}</span>
        <span class="productDetail-title-price__won">원</span>
      </h2>
      <h2 class="productDetail-title__notice">로그인 후, 적립 혜택이 제공됩니다.</h2>
    </div>
    <!-- 물품 설명  -->
    <div class="productDetail-information">
      <dl class="productDetail-information__delivery">
        <dt class="productDetail-information-delivery__normal">배송</dt>
        <dd>
          <p class="productDetail-information-delivery__title">샛별배송</p>
          <p class="productDetail-information-delivery__guide">
            23시 전 주문 시 내일 아침 7시 전 도착(대구 부산 울산 샛별배송 운영시간 별도 확인)
          </p>
        </dd>
      </dl>
      <dl class="productDetail-information__seller">
        <dt class="productDetail-information-seller__company">판매자</dt>
        <dd class="productDetail-information-seller__name">
          <p>칼리</p>
        </dd>
      </dl>
      <dl class="productDetail-information__package">
        <dt class="productDetail-information-package__type">포장타입</dt>
        <dd>
          <p class="productDetail-information-packgage-guide__title">상온 (종이포장)</p>
          <p class="productDetail-information-package__guide">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
        </dd>
      </dl>
      <dl class="productDetail-information__unit">
        <dt class="productDetail-information-unit__sell">판매단위</dt>
        <dd class="productDetail-information-unit__item">
          <p>1봉</p>
        </dd>
      </dl>
      <dl class="productDetail-information__weight">
        <dt class="productDetail-information-weight__unit">중량/용량</dt>
        <dd class="productDetail-information-weight__item">
          <p>123g * 4봉</p>
        </dd>
      </dl>
      <dl class="productDetail-information__origin">
        <dt class="productDetail-information-origin__land">원산지</dt>
        <dd class="productDetail-information-origin__page">
          <p>상세페이지 별도표기</p>
        </dd>
      </dl>
      <dl class="productDetail-information__allergy">
        <dt class="productDetail-information-allergy__info">알레르기 정보</dt>
        <dd class="productDetail-information-allergy__list">
          <p>-대두, 밀, 쇠고기 함유</p>
          <p>
            -계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기,
            오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조
          </p>
        </dd>
      </dl>
      <!-- 수량설정 -->
      <dl class="productDetail-information__sellect">
        <dt class="productDetail-information-sellect__item">상품선택</dt>
        <dd class="productDetail-infromation-sellect__number">
          <h3 class="productDetail-infromation-sellect-number__name">${name}</h3>
          <div>
            <div class="divroductDetail-information-sellect__calc">
              <button class="productDetail-information-sellect-calc__minusBtn" type="button"></button>
              <h3 class="productDetail-infromation-sellect-calc__number">${stock}</h3>
              <button class="productDetail-information-sellect-calc__plusBtn" type="button"></button>
            </div>
          </div>
          <h3 class="productDetail-information-sellect-number__totalPrice">${price}</h3>
        </dd>
      </dl>
    </div>
  </div>
  <!-- 좋아요, 알람, 장바구니 -->
  <div class="productDetail__total">
    <div class="productDetail-total__bill">
      <h2 class="productDetail-total-bill__totalPrice">총 상품금액:</h2>
      <span class="productDetail-total-bill__number">${price}</span>
      <span class="productDetail-total-bill__won">원</span>
      <span class="productDetail-total-bill-guide__mile">적립</span>
      <span class="productDetail-total-bill__guide"> 로그인 후, 적립 혜택 제공 </span>
    </div>
    <div class="productDetail__basket">
      <button class="productDetail-basket__likeBtn" type="button"></button>
      <button class="productDetail-basket__alarmBtn" type="button"></button>
      <button class="productDetail-basket__basketBtn" type="button">장바구니 담기</button>
    </div>
  </div>
</section>
  `;
};

export const renderProduct = async () => {
  try {
    let url = `http://localhost:5001/products/{id}`;

    let res = await karlyxios.get(url);
    let productData = res.data; // 배열

    insertBefore(productDetail, productCard(productData));
  } catch (err) {
    console.log(err);
  }
};

renderProduct(index);
