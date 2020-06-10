import {showToast} from '../utils/toast';

export const fetchAPI = (url, route, method) => {
  console.log('Request', url + route, method);
  return fetch(url + route, method)
    .then(response => response.json())
    .then(response => {
      console.log('Response', response);
      return response;
    })
    .catch(error => {
      console.log('Response Error', error);
      error.message == 'Network request failed'
        ? showToast(error.message)
        : null; //showToast("Contact Support Team")
      return false;
    });
};
