import api from '../../api/imgur.js';
import qs from 'qs';
import { router } from '../../main.js';

const state = {
  token: window.localStorage.getItem('imgur_token')
};
const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    // commit() will triggers function in mutations to perform update.
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    // reroute user into the page, this allow the users to get into
    // other possible routes
    router.push('/');
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};
// https://api.imgur.com/oauth2/authorize?
// client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

export default {
  state,
  getters,
  actions,
  mutations
}
