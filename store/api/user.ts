import axios from 'axios';
import cookie from 'js-cookie';

export default function logoutUser() {
  return axios.get('/logout', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      JSESSIONID: cookie.get('JSESSIONID'),
    },
  });
}
