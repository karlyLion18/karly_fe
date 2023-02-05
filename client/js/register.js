import { getNode } from '/client/lib/index.js';
import { getInputValue } from '../lib/dom/getInputValue.js';
import { karlyxios } from './common/karlyxios.js';

const registerBtn = getNode('.register_btn');

const userIdNode = getNode('.user__input-id');

// console.log('🚀 ⁝ onSubmit ⁝ userGender', userGender);

const onSubmit = () => {
  const userID = getInputValue('.user__input-id');
  const userPw = getInputValue('.user__input-pw');
  const userName = getInputValue('.user__input-name');
  const userEmail = getInputValue('.user__input-email');
  const userPhone = getInputValue('.user__input-phone');
  const userGender = getNode('input[type="radio"]:checked');

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
    phone: userPhone,
    gender: userGender,
    birth: userBirth(),
  };

  karlyxios.post('http://localhost:5001/users', data);
};

registerBtn.addEventListener('click', () => {
  onSubmit();
});
