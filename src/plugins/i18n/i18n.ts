import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '../../locale/en.json';
import ru from '../../locale/ru.json';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'ru',
  messages: {
    en,
    ru,
  },
});
export default i18n;
