<template>
  <vs-navbar>
    <div slot="title">
      <vs-navbar-title>
        {{$t('navbar_titlelabel_text')}}
      </vs-navbar-title>
    </div>
    <vs-navbar-item index="0">
      <vs-button to="/" color="primary" type="flat">{{$t('navbar_homebutton_text')}}</vs-button>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <vs-button to="/login" color="primary" type="flat">{{$t('navbar_loginbutton_text')}}
      </vs-button>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <vs-button to="/register" color="danger" type="flat">{{$t('navbar_signupbutton_text')}}
      </vs-button>
    </vs-navbar-item>
    <vs-input icon="search" :placeholder="$t('navbar_searchinput_text')" />
    <a
      href=""
      v-if="getCurrentLocale() === 'ru'"
      class="i18nflag"
      @click.prevent="setCurrentLocale('en')"
    >
      <flag iso="us"></flag>
    </a>
    <a
      href=""
      v-if="getCurrentLocale() === 'en'"
      class="i18nflag"
      @click.prevent="setCurrentLocale('ru')"
    >
      <flag iso="ru"></flag>
    </a>
  </vs-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Navbar extends Vue {
  getCurrentLocale() {
    return this.$i18n.locale;
  }

  setCurrentLocale(locale: string) {
    this.$i18n.locale = locale;
  }
}
</script>

<style scoped lang="scss">
.vs-navbar {
  padding: 1rem;
}
.i18nflag {
  float: right;
  margin: 2px 2px 2px 2px;
}
</style>
