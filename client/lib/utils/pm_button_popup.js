
import { getNode } from "/client/lib/index.js";

export const countnum = (b) => {
  num = b;
  return num;
}

export const rendernum = () => {
  return countnum(num);
}

let num = 1;

export function plus_popup(e) {
  let count_num = getNode('.cartProduct__countNum');
  let buttonWrapper = e.target.closest('.cartProduct__counter');
  let plusButton = e.target.closest('.cartProduct__plus');

  if (!buttonWrapper || !plusButton) return;
  num++;
  count_num.innerText = num;
  countnum(num);
  rendernum();
}

export function minus_popup(e) {
  let count_num = getNode('.cartProduct__countNum');
  let buttonWrapper = e.target.closest('.cartProduct__counter');
  let minusButton = e.target.closest('.cartProduct__minus');

  if (!buttonWrapper || !minusButton) return;
  if (num > 1) {
    num--;
    count_num.innerText = num;
    countnum(num);
    rendernum();

  } else {
    num = 1;
    count_num.innerText = num;
    countnum(num);
    rendernum();
  }

}

