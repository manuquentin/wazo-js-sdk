import axios from 'axios';

import wazo from '../../config';
import version from './version';

const handleResponse = (response, callback) => {
  wazo.data = response.data.data;

  if (callback) {
    callback(wazo.data);
  }
};

export default (params) => {
  const url = `https://${wazo.server}/api/auth/${version}/token`;
  const data = {
    backend: params.backend || 'wazo_user',
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
