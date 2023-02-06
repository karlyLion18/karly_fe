import { karlyxios } from "/client/js/common/karlyxios.js";
import { getNode, attr, addClass, toggleClass, getInputValue, removeClass } from '/client/lib/index.js';

let url = 'http://localhost:5001/users';

const registerBtn = getNode('.register_btn');

const userIdNode = getNode('.user__input-id');

// console.log('🚀 ⁝ onSubmit ⁝ userGender', userGender);

const onSubmit = () => {
  const userID = getInputValue('.user__input-id');
  const userPw = getInputValue('.user__input-pw');
  const userName = getInputValue('.user__input-name');
  const userEmail = getInputValue('.user__input-email');
  const userPhone = getInputValue('.user__input-phone');
  const userGender = document.querySelector('input[type="radio"]:checked').value;

  const userBirth = () => {
    const birthYear = getInputValue('.user__birth--year');
    const birthMonth = getInputValue('.user__birth--month');
    const birthDay = getInputValue('.user__birth--day');

    return [birthYear, birthMonth, birthDay].join('.');
  };

  const data = {
    id: userID,
    name: userName,
    password: userPw,
    email: userEmail,
    phonenumber: userPhone,
    gender: userGender,
    birth: userBirth(),
    tos: '',
    recommend: 0,
  };

  karlyxios.post(url, data);
};

registerBtn.addEventListener('click', () => {
  if (onsubmit.data.value === '') {
    alert(err);
  } else {
    onSubmit();
  }
});

/* LUCKY DOYUN */
/* -------------------------------------------------------------------------- */
/*                                 users info                                 */
/* -------------------------------------------------------------------------- */
const confirmButton = getNode('.confirm_button');

const userBoxUserId = getNode('.user__id .user__info');
let userBoxUserIdValue = '';

const userBoxUserPw = getNode('.user__pw .user__info');
const userPwValidation = getNode('.user-box__pw-validation');
let userPwValidationDivToggle = false;
let userPwValidationRegexpCheck = false;
let userBoxUserPwValidationText = userPwValidation.innerHTML;
let userBoxUserPwValue = '';

const userBoxUserPwConfirm = getNode('.user__pw-confirm .user__info');
const userPwConfirmValidation = getNode('.user-box__pw-confirm-validation');
let userBoxUserPwConfirmEvent = '';
let userPwConfirmValidationDivToggle = false;
let userPwConfirmValidationRegexpCheck = false;
let userBoxUserPwConfirmValidationText = userPwConfirmValidation.innerHTML;
let userBoxUserPwConfirmValue = '';

const userBoxUserEmail = getNode('.user__email .user__info');
const userEmailValidation = getNode('.user-box__email-validation');
let userEmailValidationDivToggle = false;
let userEmailValidationRegexpCheck = false;
let userBoxUserEmailValidationText = userEmailValidation.innerHTML;

const userBoxUserPhone = getNode('.user__phone .user__info');
let userBoxUserPhoneValue = ''

/* -------------------------------------------------------------------------- */
/*                             Regular Expression                             */
/* -------------------------------------------------------------------------- */
const idRegexp = /^[a-z0-9]\w{5,15}$/i;
const emailRegexp = /^[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])+@[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])+\.[a-zA-Z]{1,5}$/i;
const phoneNumberRegexp = /^01([0|1|6|7|8|9]?)-\d{3,4}-\d{4}$/;
const passwordRegexp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

/* -------------------------------------------------------------------------- */
/*                             users info database                            */
/* -------------------------------------------------------------------------- */
const usersInfoUrl = 'http://localhost:5001/users/';


/* -------------------------------------------------------------------------- */
/*                          비밀번호 암복호화 테스트 console.log                */
/* -------------------------------------------------------------------------- */
console.log("비밀번호 : doyun123!@#");
console.log("암호화 : " , createEncryptionPassword("doyun123!@#"));
console.log("복호화 : ",  createDescryptionPassword(createEncryptionPassword("doyun123!@#")));


/* -------------------------------------------------------------------------- */
/*                                functino list                               */
/* -------------------------------------------------------------------------- */
async function clickConfirm() {
  let registerInputId = userBoxUserId.value;
  
  // id값이 비어있는지 확인
  if(!registerInputId){
    console.log("id값이 비어있을 때 알림 처리 구현");
    return;
  }
  
  // id값이 입력되면 db값 가져오기위해 url완성
  let registerInputIdUrl = usersInfoUrl + registerInputId;
  let usersInfoDatabase = await karlyxios.get(registerInputIdUrl);

  // json server가 db이므로
  // 통신실패는 db에 data가 존재하지 않음을 의미
  if(usersInfoDatabase.ok == false){
    console.log("id중복 없음 알림 처리 구현");
    return;
  }else{
    let usersInfoDatabaseId = usersInfoDatabase.data.id
    if(registerInputId === usersInfoDatabaseId){
      let registerInputId = userBoxUserId.value;
  
  // id값이 비어있는지 확인
  if(!registerInputId){
    console.log("id값이 비어있을 때 알림 처리 구현");
    return;
  }
  
  // id값이 입력되면 db값 가져오기위해 url완성
  let registerInputIdUrl = usersInfoUrl + registerInputId;
  let usersInfoDatabase = await karlyxios.get(registerInputIdUrl);

  // json server가 db이므로
  // 통신실패는 db에 data가 존재하지 않음을 의미
  if(usersInfoDatabase.ok == false){
    console.log("id중복 없음 알림 처리 구현");
    return;
  }else{
    let usersInfoDatabaseId = usersInfoDatabase.data.id
    if(registerInputId === usersInfoDatabaseId){
      console.log("아이디가 중복 알림 처리 구현");
    }
  }
    }
  }
}

// 비밀번호를 암호화된 값으로 생성하는 함수
function createEncryptionPassword(password) {
 let splitPassword = [...password];
 let encryptionValue = [];
 let encryptionPassword = '';
 
 splitPassword.forEach(element => {
  encryptionValue.push(element.charCodeAt());
 });

 encryptionValue.forEach(element=>{
  encryptionPassword = encryptionPassword + '|' + element;
 })

 return encryptionPassword;
}

// 암호화된 값을 복호화하는 함수
function createDescryptionPassword(password) {
  let unpipePassword = password.split('|');
  let descryptionPassword = '';
  unpipePassword.shift('');

  unpipePassword.forEach(element => {
    descryptionPassword = descryptionPassword + String.fromCharCode(element)
  })

  return descryptionPassword;
}

//이메일 형식 검증 문구
function validationChekckEmail(e) {
  //이메일 입력란에 값이 한번이라도 입력이 되면 
  //userEmailValidationText 을 이용해서 경고문구 출력
  //!userEmailValidationText 을 통해 이후 키입력시엔 토글 막음
  if(!userEmailValidationDivToggle){
    onValidationBox(e);
    userEmailValidationDivToggle=!userEmailValidationDivToggle;
    return;
  }
  
  //이메일 입력란 값에 대한 경고문구 생성 이후
  //경고문구 텍스트 값 변경을 위한 로직
  let userBoxUserEmailValue = getInputValue(userBoxUserEmail);
  if(userBoxUserEmailValue == ''){
    userEmailValidation.innerHTML = '이메일을 입력해 주세요.';
  }else{
    userEmailValidation.innerHTML = userBoxUserEmailValidationText;
  }

  //이메일 정규식을 통해 정상적인 메일형식이라면 경고문구 제거
  if(userBoxUserEmailValue.match(emailRegexp) && !userEmailValidationRegexpCheck){
    offValidationBox(e);
    userEmailValidationRegexpCheck = true;
    return;
  }

  //정규식 검사 후 정상적인 메일형식으로 판정 되었지만, 메일주소를 비정상적인 형식으로 변경했을때
  //다시 경고문구 생성
  if(!userBoxUserEmailValue.match(emailRegexp) && userEmailValidationRegexpCheck){
    onValidationBox(e);
    userEmailValidationRegexpCheck = false;
  }
}

//경고 문구 출력
function onValidationBox(e, showClassName) {
  let registerValidationBox = e.target.nextElementSibling;
  if((registerValidationBox.classList.contains('user-box_validation-toggle'))){
    removeClass(registerValidationBox, 'user-box_validation-toggle');
  }
}

//경고 문구 삭제
function offValidationBox(e, showClassName) {
  let registerValidationBox = e.target.nextElementSibling;
  if(!(registerValidationBox.classList.contains('user-box_validation-toggle'))){
    addClass(registerValidationBox, 'user-box_validation-toggle');
  }
  // if((registerValidationBox.classList.contains(classname))){
  //   removeClass(registerValidationBox, classname);
  // }
}

//비밀번호 형식 검증 문구
function validationChekckPw(e) {
  if(!userPwValidationDivToggle){
    onValidationBox(e);
    userPwValidationDivToggle=!userPwValidationDivToggle;
  }
  
  userBoxUserPwValue = getInputValue(userBoxUserPw);
  if(userBoxUserPwValue == ''){
    userPwValidation.innerHTML = '영문자(대, 소문자 구별하지 않음), 숫자, 특수문자만 허용하며, 3개 이상 조합';
  }else{
    userPwValidation.innerHTML = userBoxUserPwValidationText;
  }

  //8자리 이상 입력 그리고 형식에 맞는지 여부에 따른 출력 문구 변경
  if(userBoxUserPwValue.length >= 8 && !userPwValidationRegexpCheck){
    userPwValidation.innerHTML = '영문/숫자/특수문자(공백 제외)만 허용하며, 3개 이상 조합';
  }else if(userBoxUserPwValue.length >= 8){
    userPwValidation.innerHTML = '영문/숫자/특수문자(공백 제외)만 허용하며, 3개 이상 조합';
  }

  if(userBoxUserPwValue.match(passwordRegexp) && !userPwValidationRegexpCheck){
    offValidationBox(e);
    userPwValidationRegexpCheck = true;
    return;
  }

  if(!userBoxUserPwValue.match(passwordRegexp) && userPwValidationRegexpCheck){
    onValidationBox(e);
    userPwValidationRegexpCheck = false;
  }
  if(userBoxUserPwConfirmValue != ''){
    isConfirmPw(userBoxUserPwConfirmEvent);
  }
}

// let userPwConfirmValidationDivToggle = false;
// let userPwConfirmValidationRegexpCheck = false;
// let userBoxUserPwConfirmValidationText = userPwConfirmValidation.innerHTML;

function validationChekckPwConfirm(e) {
  if(!userPwConfirmValidationDivToggle){
    onValidationBox(e);
    userPwConfirmValidationDivToggle=!userPwConfirmValidationDivToggle;
    userBoxUserPwConfirmEvent = e;
  }

  userBoxUserPwConfirmValue = getInputValue(userBoxUserPwConfirm);
  if(userBoxUserPwConfirmValue == ''){
    userPwConfirmValidation.innerHTML = '비밀번호를 한번 더 입력해 주세요.';
  }else{
    userPwConfirmValidation.innerHTML = userBoxUserPwConfirmValidationText;
  }

  isConfirmPw(userBoxUserPwConfirmEvent);
}

function isConfirmPw(e) {
  if(userBoxUserPwValue == userBoxUserPwConfirmValue){
    offValidationBox(e);
  }else{
    onValidationBox(e);
  }
}

function validationChekckPhone(e) {
  userBoxUserPhone.value = getInputValue(userBoxUserPhone).replace(/[^0-9]/g, '');
  userBoxUserPhoneValue = getInputValue(userBoxUserPhone);

  if(!userBoxUserPhoneValue){
    onValidationBox(e);
  }
  else { 
    offValidationBox(e);
  }
}

function validationChekckId(e) {
  userBoxUserIdValue = getInputValue(userBoxUserId);

  if(!userBoxUserIdValue.match(idRegexp)){
    onValidationBox(e);
  }
  else {
    offValidationBox(e);
  }

}


/* -------------------------------------------------------------------------- */
/*                            addEventListener List                           */
/* -------------------------------------------------------------------------- */

// 중복확인 버튼 클릭시
confirmButton.addEventListener('click',clickConfirm);
userBoxUserId.addEventListener('input',(e) => validationChekckId(e))
userBoxUserEmail.addEventListener('input',(e) => validationChekckEmail(e));
userBoxUserPw.addEventListener('input', (e) => validationChekckPw(e));
userBoxUserPwConfirm.addEventListener('input', (e) => validationChekckPwConfirm(e));
userBoxUserPhone.addEventListener('input', (e) => validationChekckPhone(e));