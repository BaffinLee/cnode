// all urls we used

const URLS = {
  list: 'https://cnodejs.org/api/v1/topics',
};

const API = {
  get(name) {
    return URLS[name] || '';
  },
  urls() {
    return URLS;
  },
};

export default API;
