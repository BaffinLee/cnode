// utils
import API from '@/services/Api';

export default {
  // build url
  url(config) {
    let url = config.url || API.get(config.name) || '';
    let query = '';

    if (config.end) {
      url += config.end;
    }

    // handle query
    if (url) {
      url.replace(/&$/, '');

      if (config.params) {
        Object.keys(config.params).forEach((key) => {
          query += `&${key}=${config.params[key]}`;
        });
      }

      if (!url.match(/\?/) && query) {
        query = query.replace(/^&?/, '?');
      }

      url += query;

      return url;
    }

    return '';
  },
};
