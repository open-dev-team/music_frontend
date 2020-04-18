<template>
  <div class="music">
    <h1>This is music page</h1>
    <p v-if="id!=null">item №{{id}}</p>
    <vs-row vs-w="12" vs-justify="center">
      <vs-col vs-lg="6">
        <vs-card>
          <template v-slot:header>{{musicName}} - {{authorName}}</template>
          <template v-slot:extra-content>{{musicDescription}}</template>
          <template v-slot:media>
            <img v-bind:src="coverUrl" alt="coverUrl" width="10%">
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
      musicName: 'In Your Eyes',
      authorName: 'Robin Schulz, Alida',
      musicDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      coverUrl: 'https://avatars.yandex.net/get-music-content/2110367/317fe895.a.9581969-1/200x200',
    };
  },
  created() {
    this.getMusicInfo();
  },
  methods: {
    getMusicInfo() {
      return {};
    },
  },
  props: {
    id: String,
  },
};
</script>

<style scoped>

</style>
