<template>
  <div class="top-music">
    <vs-row vs-w="12">
      <vs-col>
        <Hero
          :title="$t('topmusic_formtitle_text')"
          :subtitle="$t('topmusic_formsubtitle_text')"
        />
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" vs-type="flex" vs-justify="center">
      <vs-col vs-w="8" vs-sm="10">
        <vs-list>
          <vs-list-header icon="grade" :title="$t('topmusic_populartracks_text')" color="success">
          </vs-list-header>
          <vs-list-item
            v-for="topMusic in topMusicList"
            :key="topMusic.id"
            :title="topMusic.name"
            :subtitle="topMusic.artist"
          >
            <vs-button color="success" type="flat" icon="play_circle_outline"></vs-button>
            <template slot="avatar">
              <vs-avatar size="50px" :src="topMusic.posterUrl" />
            </template>
          </vs-list-item>
        </vs-list>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" vs-type="flex" vs-justify="center">
      <vs-col vs-w="8" vs-sm="10">
        <vs-list>
          <vs-list-header
            icon="new_releases"
            :title="$t('topmusic_newreleases_text')"
            color="danger">
          </vs-list-header>
          <vs-list-item
            v-for="newRelease in newReleaseList"
            :key="newRelease.id"
            :title="newRelease.name"
            :subtitle="newRelease.artist"
          >
            <vs-button color="danger" type="flat" icon="play_circle_outline"></vs-button>
            <template slot="avatar">
              <vs-avatar size="50px" :src="newRelease.posterUrl" />
            </template>
          </vs-list-item>
        </vs-list>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action } from 'vuex-class';
import Component from 'vue-class-component';
import { Music } from '@/store/modules/music/types';

import Hero from '@/components/Hero.vue';

const namespace = 'music';

@Component({
  components: {
    Hero,
  },
})
export default class TopMusic extends Vue {
  @State('topMusicList', { namespace })
  topMusicList!: Array<Music>;

  @State('newReleaseList', { namespace })
  newReleaseList!: Array<Music>;

  @Action('fetchTopMusicList', { namespace })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchTopMusicList: any;

  @Action('fetchNewReleaseList', { namespace })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchNewReleaseList: any;

  mounted(): void {
    this.fetchTopMusicList();
    this.fetchNewReleaseList();
  }
}
</script>

<style scoped></style>
