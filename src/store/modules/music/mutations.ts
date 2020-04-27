import { MutationTree } from 'vuex';
import { MusicState, Music } from './types';

const mutations: MutationTree<MusicState> = {
  topMusicListLoaded(state, payload: Array<Music>) {
    state.topMusicList = payload;
  },

  newReleaseListLoaded(state, payload: Array<Music>) {
    state.newReleaseList = payload;
  },
};

export default mutations;
