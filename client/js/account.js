import { karlyxios } from "/js/common/karlyxios.js";

const user_new = {
  "id": "Hong",
  "name": "홍길동",
  "password": "123",
  "e-mail": "Hong@karly.co.kr",
  "phonenumber": "010-1111-2222",
  "gender": "M",
  "birth": "2013.02.02",
  "tos": "true",
  "recommend": 2
}

const user_modified = {
  "id": "Hong",
  "name": "홍길동수정",
  "password": "12344",
  "e-mail": "Hong@karly.co.kr",
}

let url = 'http://localhost:5002/users';
let delete_url = 'http://localhost:5002/users/Hong';
let update_url = 'http://localhost:5002/users/Hong';
console.log("hello");
// console.log(karlyxios.get(url));
// console.log(karlyxios.delete(delete_url));
// karlyxios.post(url,user_new);
karlyxios.put(update_url, user_modified);