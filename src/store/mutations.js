import utils from '@/assets/js/utils';

export default {
  SET_PAGE: (state, data) => {
    state.page = utils.copy(data);
  },
  SET_LOADING: (state, data) => {
    state.loading = data;
  },
  SET_TOPIC: (state, data) => {
    state.topic = utils.copy(data);
  },
  SET_REPLAIES: (state, data) => {
    state.replies = utils.copy(data);
  },
};
