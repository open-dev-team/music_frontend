<template>
  <vs-navbar>
    <div slot="title">
      <vs-navbar-title>
        Music
      </vs-navbar-title>
    </div>
    <vs-navbar-item index="0">
      <vs-button to="/" color="primary" type="flat">Home</vs-button>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <vs-button to="/login" color="primary" type="flat">Log in</vs-button>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <vs-button to="/register" color="danger" type="flat">Sign up</vs-button>
    </vs-navbar-item>
    <vs-input icon="search" placeholder="Search" />
  </vs-navbar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
.vs-navbar {
  padding: 1rem;
}
</style>
