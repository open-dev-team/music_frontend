<template>
  <div class="hero">
    <div class="hero__body">
      <h1 class="hero__title">{{ title }}</h1>
      <h2 class="hero__subtitle">{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class Hero extends Vue {
  @Prop(String) title;

  @Prop(String) subtitle;
}
</script>

<style scoped lang="scss">
$gradient-from: #232526;
$gradient-to: #414345;
$hero-color: #ffffff;

.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: $hero-color;
  background: linear-gradient(to right, $gradient-from, $gradient-to);
  &__body {
    padding: 3rem 1.5rem;
  }
  &__title {
    font-size: 2.8rem;
  }
  &__subtitle {
    margin-top: 1.15rem;
    font-size: 2rem;
  }
}
</style>
