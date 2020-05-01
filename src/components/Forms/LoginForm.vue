<template>
  <form class="login-form">
    <vs-card>
      <div slot="header">
        <h2>Login</h2>
        <p>
          Don't have an account yet?
          <vs-button to="/register" color="primary" type="flat">Register</vs-button>
        </p>
      </div>
      <div>
        <vs-input
          size="large"
          type="email"
          label-placeholder="Email"
          :succes="email.success"
          success-text="Email is correct"
          :danger="email.danger"
          danger-text="User with this email was not found"
          v-model="email.value"
        />
        <vs-input
          size="large"
          type="password"
          label-placeholder="Password"
          :succes="password.success"
          success-text="Password is correct"
          :danger="password.danger"
          danger-text="Password is incorrect"
          v-model="password.value"
        />
      </div>
      <div>
        <vs-row vs-justify="space-between">
          <vs-checkbox>Remember me</vs-checkbox>
          <div>
            <vs-button color="primary">Login</vs-button>
            <vs-button to="/" color="primary" type="flat">Forgot password?</vs-button>
          </div>
        </vs-row>
      </div>
    </vs-card>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component({})
export default class LoginForm extends Vue {
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

  @Watch('email.value')
  onEmailChanged = (currentEmail: string, oldEmail: string) => {
    console.log(currentEmail);
    console.log(oldEmail);
  };

  @Watch('password.value')
  onPasswordChanged = (currentPassword: string, oldPassword: string) => {
    console.log(currentPassword);
    console.log(oldPassword);
  };
}
</script>

<style scoped lang="scss">
.login-form {
  width: 100%;
  margin-top: 50px;
  .vs-input {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
