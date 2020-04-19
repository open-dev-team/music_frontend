<template>
  <div class="music">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-w="4">
        <vs-card fixed-height>
          <template v-slot:header>{{musicName}} - {{authorName}}</template>
          <template v-slot:extra-content>{{musicDescription}}</template>
          <template v-slot:media>
            <img v-bind:src="coverUrl" alt="cover">
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      musicName: '',
      authorName: '',
      musicDescription: '',
      coverUrl: '',
    };
  },
  created() {
    this.getMusicInfoRequest(this.id);
  },
  methods: {
    getMusicInfoRequest(id) {
      setTimeout(() => {
        const mockUpData = [
          {
            id: '1',
            musicName: 'In Your Eyes',
            authorName: 'Robin Schulz, Alida',
            musicDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            coverUrl: 'https://avatars.yandex.net/get-music-content/2110367/317fe895.a.9581969-1/200x200',
          },
          {
            id: '2',
            musicName: 'Give It Away',
            authorName: 'Filatov & Karas, Deepest Blue',
            musicDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            coverUrl: 'https://avatars.yandex.net/get-music-content/2789402/97ffa2d2.a.10363011-1/200x200',
          },
          {
            id: '3',
            musicName: 'I Want to Hold Your Hand',
            authorName: 'The Beatles',
            musicDescription: 'The Brits Are Coming! More Than 80 Songs of the Original 60\'s British Invasion.',
            coverUrl: 'https://avatars.yandex.net/get-music-content/41288/e1971620.a.2426871-1/200x200',
          },
          {
            id: '4',
            musicName: 'Red Sky',
            authorName: 'Status Quo',
            musicDescription: 'британская рок-группа, основанная бас-гитаристом Аланом Ланкастером и гитаристом Фрэнсисом Росси в 1962 году в Лондоне, Англия (поначалу как The Scorpions, The Spectres и Traffic Jam; название Status Quo было принято в 1967 году)',
            coverUrl: 'https://avatars.yandex.net/get-music-content/149669/1c06a6dd.a.5803152-1/200x200',
          },
        ];
        this.getMusicInfoResponce(mockUpData.filter((obj) => obj.id === id));
      }, 200);
    },
    getMusicInfoResponce(responceObject) {
      if (Array.isArray(responceObject) && responceObject.length > 0) {
        const responceItem = responceObject[0];
        this.musicName = responceItem.musicName;
        this.authorName = responceItem.authorName;
        this.musicDescription = responceItem.musicDescription;
        this.coverUrl = responceItem.coverUrl;
      }
    },
  },
  props: {
    id: String,
  },
};
</script>

<style scoped>

</style>
