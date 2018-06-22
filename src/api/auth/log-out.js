import axios from 'axios';

import wazo from '../../config';
import api from '.';
import token from './token';

const handleResponse = (callback) => {
  token.data = null;

  window.localStorage.removeItem('wazoAuth');

  if (callback) {
    callback(wazo.token);
  }
};

export default (params) => {
  if (wazo.token) {
    const url = `https://${wazo.server}/${api}/${wazo.token}`;

    axios.delete(url)
      .then(handleResponse(params.callback));
  }
};
