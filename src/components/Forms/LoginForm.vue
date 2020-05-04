<template>
  <form class="login-form">
    <vs-card>
      <div slot="header">
        <h2>{{$t('login_login_text')}}</h2>
        <p>
          {{$t('login_donthaveaccount_text')}}
          <vs-button to="/register" color="primary" type="flat">{{$t('login_register_text')}}
          </vs-button>
        </p>
      </div>
      <div>
        <vs-input
          size="large"
          type="email"
          :label-placeholder="$t('login_emailinput_text')"
          :succes="email.success"
          :success-text="$t('login_emailinput_error')"
          :danger="email.danger"
          :danger-text="$t('login_emailinput_danger')"
          v-model="email.value"
        />
        <vs-input
          size="large"
          type="password"
          :label-placeholder="$t('login_passwordinput_text')"
          :succes="password.success"
          :success-text="$t('login_passwordinput_error')"
          :danger="password.danger"
          :danger-text="$t('login_passwordinput_danger')"
          v-model="password.value"
        />
      </div>
      <div>
        <vs-row vs-justify="space-between">
          <vs-checkbox>{{$t('login_rememberme_text')}}</vs-checkbox>
          <div>
            <vs-button color="primary">{{$t('login_loginbutton_text')}}</vs-button>
            <vs-button to="/" color="primary" type="flat">{{$t('login_forgotpasswordbutton_text')}}
            </vs-button>
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
