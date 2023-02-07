import { refError } from '/client/lib/error/refError.js';

let body = {
  id: '',
  name: '',
  password: '',
  email: '',
  phonenumber: '',
  gender: 'n',
  birth: '0000-00-00',
  tos: '',
  recommend: 0,
};

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Project-Name': 'KarlyLion18-karly_fe',
  },
};

export const karlyxios = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  let response = await fetch(url, restOptions);

  try {
    if(response.ok){
      response.data = await response.json();
    }
  } catch (error) {
    refError('[karlyxios] : you were faild');
  }

  return response;
};

/* -------------------------------------------------------------------------- */
/*                  karlyxios 4 type (get, post, put, delete)                 */
/* -------------------------------------------------------------------------- */

karlyxios.get = (url, options) => {
  return karlyxios({
    url,
    ...options,
  });
};

karlyxios.post = async (url, body, options) => {
  try {
    return await karlyxios({
      url,
      body: JSON.stringify(body),
      method: 'POST',
      ...options,
    });
  } catch (err) {
    console.log(err);
  }
};

karlyxios.put = (url, body, options) => {
  return karlyxios({
    url,
    body: JSON.stringify(body),
    method: 'PUT',
    ...options,
  });
};

karlyxios.delete = (url, body, options) => {
  return karlyxios({
    url,
    method: 'DELETE',
    ...options,
  });
};