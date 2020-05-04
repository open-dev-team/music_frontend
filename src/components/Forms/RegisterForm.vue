<template>
  <form class="register-form">
    <vs-card>
      <div slot="header">
        <h2>{{$t('register_register_text')}}</h2>
        <p>
          {{$t('register_alreadyhaveaccount_text')}}
          <vs-button to="/login" color="primary" type="flat">{{$t('register_login_text')}}
          </vs-button>
        </p>
      </div>
      <div>
        <vs-input
          size="large"
          type="text"
          :label-placeholder="$t('register_usernameinput_text')"
          :success="username.success"
          :success-text="$t('register_usernameinput_success')"
          :danger="username.danger"
          :danger-text="$t('register_usernameinput_danger')"
          :description-text="$t('register_usernameinput_description')"
          v-model="username.value"
        />
        <vs-input
          size="large"
          type="text"
          :label-placeholder="$t('register_fullnameinput_text')"
          :success="fullname.success"
          :success-text="$t('register_fullnameinput_success')"
          :danger="fullname.danger"
          :danger-text="$t('register_fullnameinput_danger')"
          :description-text="$t('register_fullnameinput_description')"
          v-model="fullname.value"
        />
        <vs-input
          size="large"
          type="email"
          :label-placeholder="$t('register_emailinput_text')"
          :success="email.success"
          :success-text="$t('register_emailinput_success')"
          :danger="email.danger"
          :danger-text="$t('register_emailinput_danger')"
          v-model="email.value"
        />
        <vs-input
          size="large"
          type="password"
          :label-placeholder="$t('register_passwordinput_text')"
          :success="password.success"
          :success-text="$t('register_passwordinput_success')"
          :danger="password.danger"
          :danger-text="$t('register_passwordinput_danger')"
          :description-text="$t('register_passwordinput_description')"
          v-model="password.value"
        />
      </div>
      <div>
        <vs-row vs-justify="space-between">
          <vs-checkbox>
            {{$t('register_iagree_text')}}
            <vs-button to="/" type="line">
              {{$t('register_termandprivacy_text')}}
            </vs-button>
          </vs-checkbox>
          <vs-button color="primary">{{$t('register_registerbutton_text')}}</vs-button>
        </vs-row>
      </div>
    </vs-card>
  </form>
</template>

<script lang="ts">
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
  onUsernameChanged = (currentUsername: string) => {
    if (currentUsername.length < 5) {
      this.username.success = false;
      this.username.danger = true;
    } else {
      this.username.danger = false;
      this.username.success = true;
    }
  };

  @Watch('fullname.value')
  onFullnameChanged = (currentFullname: string) => {
    if (currentFullname.length < 6) {
      this.fullname.success = false;

      this.fullname.danger = true;
    } else {
      this.fullname.danger = false;
      this.fullname.success = true;
    }
  };

  @Watch('email.value')
  onEmailChanged = (currentEmail: string) => {
    if (/\S+@\S+\.\S+/.test(currentEmail)) {
      this.email.success = true;
      this.email.danger = false;
    } else {
      this.email.danger = true;
      this.email.success = false;
    }
  };

  @Watch('password.value')
  onPasswordChanged = (currentPassword: string) => {
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
