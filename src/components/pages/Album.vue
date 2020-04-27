<template>
  <div class="music">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-w="4">
        <vs-card fixed-height>
          <template v-slot:header><h3>{{albumName}} - {{authorName}}</h3></template>
          <template v-slot:media>
            <img v-bind:src="albumCoverUrl" alt="cover">
          </template>
          <template v-slot:extra-content><i>{{genre}}</i></template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Album extends Vue {
        /* === PROP'S === */
        @Prop({}) id?: string;

        /* === DATA === */
        albumName = '';

        authorName = '';

        genre = '';

        albumCoverUrl='';


        mockUpData = [
          {
            id: '1',
            albumName: 'The Dark Side of the Moon',
            authorName: 'Pink Floyd',
            genre: 'Прогрессивный рок',
            albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/The_Dark_Side_of_the_Moon.jpg/274px-The_Dark_Side_of_the_Moon.jpg.png',
          },
          {
            id: '2',
            albumName: 'Back in Black',
            authorName: 'AC/DC',
            genre: 'Хард-рок/хэви-метал',
            albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Acdc_backinblack_cover.jpg/274px-Acdc_backinblack_cover.jpg',
          },
          {
            id: '3',
            albumName: 'Bat Out of Hell',
            authorName: 'Meat Loaf',
            genre: 'Рок',
            albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/03/Meat_Loaf_Bat_Out_Of_Hell.png/274px-Meat_Loaf_Bat_Out_Of_Hell.png',
          },
          {
            id: '4',
            albumName: 'Millennium',
            authorName: 'Backstreet Boys',
            genre: 'Поп',
            albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/d0/Millennium1999.JPG/274px-Millennium1999.JPG',
          },
        ];

        created() {
          if (this.id != null) {
            this.getalbumInfoRequest(this.id);
          }
        }

        getalbumInfoRequest(id: string) {
          setTimeout(() => {
            this.getalbumInfoResponce(this.mockUpData.filter((obj) => obj.id === id));
          }, 1000);
        }

        getalbumInfoResponce(responceObject: object) {
          if (Array.isArray(responceObject) && responceObject.length > 0) {
            const responceItem = responceObject[0];
            this.albumName = responceItem.albumName;
            this.authorName = responceItem.authorName;
            this.genre = responceItem.genre;
            this.albumCoverUrl = responceItem.albumCoverUrl;
          }
        }
}
</script>

<style scoped>

</style>
