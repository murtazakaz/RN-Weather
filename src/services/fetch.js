import {showToast} from '../utils/toast';

export const fetchAPI = (url, route, method) => {
  return fetch(url + route, method)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(error => {
      error.message == 'Network request failed'
        ? showToast(error.message)
        : null; //showToast("Contact Support Team")
      return false;
    });
};
