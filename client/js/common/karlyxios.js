import { refError } from '/lib/error/refError.js';

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
    'Project-Name': 'KarlyLion18-karly_fe'
  }
}

export const karlyxios = async (options = {}) => {

  const { url, ...restOptions } = {
                                    ...defaultOptions,
                                    ...options,
                                    headers: {
                                      ...defaultOptions.headers,
                                      ...options.headers
                                    }
  };

  let response = await fetch(url, restOptions);

  if(!response.ok){
    refError("[karlyxios] : you were faild");
  }else{
    response.data = await response.json();
  }

  return response;
}

/* -------------------------------------------------------------------------- */
/*                  karlyxios 4 type (get, post, put, delete)                 */
/* -------------------------------------------------------------------------- */

karlyxios.get = (url, options) => {
  return karlyxios({
    url,
    ...options
  });
};

karlyxios.post = (url, body, options) => {
  return karlyxios({
    url,
    body:JSON.stringify(body),
    method: 'POST',
    ...options
  });
};

karlyxios.put = (url, body, options) => {
  return karlyxios({
    url,
    body:JSON.stringify(body),
    method: 'PUT',
    ...options
  });
};

karlyxios.delete = (url, body, options) => {
  return karlyxios({
    url,
    method: "DELETE",
    ...options
  });
};