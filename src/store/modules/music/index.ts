import { Module } from 'vuex';
// import state from './state';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { MusicState } from './types';
import { RootState } from '../../types';

const namespaced = true;

export const state: MusicState = {
  topMusicList: [],
  newReleaseList: [],
};

const music: Module<MusicState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};

export default music;
