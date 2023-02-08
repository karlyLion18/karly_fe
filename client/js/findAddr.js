import { getNode } from '/lib/index.js';

const kakaoPopup = getNode('.popup_btn')

const findAddr = () => {
  new daum.Postcode({
    oncomplete: function (data) {
      console.log(data);

      let roadAddr = data.roadAddress; // 도로명 주소 변수
      let jibunAddr = data.jibunAddress; // 지번 주소 변수

      document.getElementById('member_post').value = data.zonecode;
      if (roadAddr !== '') {
        document.getElementById('member_addr').value = roadAddr;
      } else if (jibunAddr !== '') {
        document.getElementById('member_addr').value = jibunAddr;
      }
    },
  }).open();
};

kakaoPopup.addEventListener('click', findAddr);
