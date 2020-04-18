<template>
  <form class="register-form">
    <vs-card>
      <div slot="header">
        <h2>Register</h2>
        <p>
          Already have an account?
          <vs-button to="/login" color="primary" type="flat">Login</vs-button>
        </p>
      </div>
      <div>
        <vs-input
          size="large"
          type="text"
          label-placeholder="Username"
          :success="username.success"
          success-text="Name must be at least 5 characters"
          :danger="username.danger"
          danger-text="Name must be at least 5 characters"
          description-text="Name must be at least 5 characters"
          v-model="username.value"
        />
        <vs-input
          size="large"
          type="text"
          label-placeholder="Fullname"
          :success="fullname.success"
          success-text="Name must be at least 6 characters"
          :danger="fullname.danger"
          danger-text="Name must be at least 6 characters"
          description-text="Name must be at least 6 characters"
          v-model="fullname.value"
        />
        <vs-input
          size="large"
          type="email"
          label-placeholder="Email"
          :success="email.success"
          success-text="The email is valid"
          :danger="email.danger"
          danger-text="The email is not valid"
          v-model="email.value"
        />
        <vs-input
          size="large"
          type="password"
          label-placeholder="Password"
          :success="password.success"
          success-text="Password must be at least 6 characters"
          :danger="password.danger"
          danger-text="Password must be at least 6 characters"
          description-text="Password must be at least 6 characters"
          v-model="password.value"
        />
      </div>
      <div>
        <vs-row vs-justify="space-between">
          <vs-checkbox>
            I agree to the <vs-button to="/" type="line">Terms and Privacy Policy</vs-button>
          </vs-checkbox>
          <vs-button color="primary">Register</vs-button>
        </vs-row>
      </div>
    </vs-card>
  </form>
</template>

<script lang="ts">
/*

В целом не плохо, но использование watch дорогое удовольствие посмотри на компоненту:
https://github.com/Bizhev/nuxt-express-sqlite/blob/master/components/sectionFormEvents/SectionFormEvents.vue
я не говорю что он идеал, но принцип try catch очень важна
TODO: 1. Переделать валидацию

TODO: 2. Eslint - очень на меня ругается, не делай деплой с ошибками.
P.S. Можно делать так для автофикса: npm run lint --fix
Как все сделаешь, удали эти сообщения и делай пуш в development
 */

import { Component, Watch, Vue } from 'vue-property-decorator';

@Component({})
export default class RegisterForm extends Vue {
  /*= == DATA === */
  username = {
    success: false,
    danger: false,
    value: '',
  };

  fullname = {
    success: false,
    danger: false,
    value: '',
  };

  email = {
    success: false,
    danger: false,
    value: '',
  };

  password = {
    success: false,
    danger: false,
    value: '',
  };

  /*= == WATCH === */
  @Watch('username.value')
  onUsernameChanged = (currentUsername: string, oldUsername: string) => {
    if (currentUsername.length < 5) {
      this.username.success = false;
      this.username.danger = true;
    } else {
      this.username.danger = false;
      this.username.success = true;
    }
  };

  @Watch('fullname.value')
  onFullnameChanged = (currentFullname: string, oldFullname: string) => {
    if (currentFullname.length < 6) {
      this.fullname.success = false;

      this.fullname.danger = true;
    } else {
      this.fullname.danger = false;
      this.fullname.success = true;
    }
  };

  @Watch('email.value')
  onEmailChanged = (currentEmail: string, oldEmail: string) => {
    if (/\S+@\S+\.\S+/.test(currentEmail)) {
      this.email.success = true;
      this.email.danger = false;
    } else {
      this.email.danger = true;
      this.email.success = false;
    }
  };

  @Watch('password.value')
  onPasswordChanged = (currentPassword: string, oldPassword: string) => {
    if (currentPassword.length < 6) {
      this.password.success = false;
      this.password.danger = true;
    } else {
      this.password.danger = false;
      this.password.success = true;
    }
  };
}
</script>

<style scoped lang="scss">
.register-form {
  width: 100%;
  margin-top: 50px;
  .vs-input {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
