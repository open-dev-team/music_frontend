<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    navbar: Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
