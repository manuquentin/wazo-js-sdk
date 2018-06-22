import axios from 'axios';

import wazo from '../../config';
import api from '.';
import token from './token';

const handleResponse = (response, callback) => {
  wazo.token = response.data.data.token;
  token.set(response.data.data);

  console.log(token.get());

  window.localStorage.setItem('wazoAuth', JSON.stringify(response.data.data));

  if (callback) {
    callback(wazo.token);
  }
};

export default (params) => {
  const url = `https://${wazo.server}/${api}`;
  const data = {
    backend: 'wazo_user',
    expiration: params.expiration || 3600,
  };
  const config = {
    auth: {
      username: params.username,
      password: params.password,
    },
  };

  axios.post(url, data, config)
    .then(response => handleResponse(response, params.callback));
};
