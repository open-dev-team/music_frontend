<template>
  <div class="register">
    <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-xs="10" vs-sm="8">
        <login-form />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import LoginForm from '@/components/Forms/LoginForm.vue';

export default {
  name: 'Register',
  components: { LoginForm },
};
</script>

<style scoped lang="scss">
/*.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}*/
</style>
