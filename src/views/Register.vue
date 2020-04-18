<template>
  <div class="register">
    <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-xs="10" vs-sm="8">
        <register-form />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import RegisterForm from '@/components/Forms/RegisterForm.vue';

export default {
  name: 'Register',
  components: { RegisterForm },
};
</script>

<style scoped lang="scss"></style>
