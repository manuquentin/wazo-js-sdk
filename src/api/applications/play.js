import axios from 'axios';

import wazo from '../../config';
import version from './version';

const handleResponse = (response, callback) => {
  wazo.data = response.data;

  if (callback) {
    callback(wazo.data);
  }
};

export default (params) => {
  const url = `https://${wazo.server}/api/ctid-ng/${version}/applications/${params.applicationUuid}/calls/${params.callID}/play`;
  const config = {
    headers: {
      'X-Auth-Token': params.token,
      'Content-Type': 'application/json',
    },
  };
  const data = {
    language: params.language,
    uri: params.uri,
  };

  axios.post(url, data, config)
    .then(response => handleResponse(response, params.callback));
};
