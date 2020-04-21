import { ActionTree } from 'vuex';
// import axios from 'axios';
import {
  getTopMusicList,
  getNewReleaseList,
} from '@/services/MusicService';
import { MusicState } from './types';
import { RootState } from '../../types';

const actions: ActionTree<MusicState, RootState> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchTopMusicList({ commit }): any {
    getTopMusicList()
      .then((response) => {
        commit('topMusicListLoaded', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchNewReleaseList({ commit }): any {
    getNewReleaseList()
      .then((response) => {
        commit('newReleaseListLoaded', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default actions;
