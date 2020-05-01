import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import music from './modules/music';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    msg: 'Music',
  },
  modules: {
    music,
  },
};

export default new Vuex.Store<RootState>(store);
