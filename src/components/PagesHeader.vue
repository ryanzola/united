<template>
  <b-navbar class="header" toggleable="lg" fixed="top">
    <b-navbar-brand href="/">
      <g-image src="~/assets/logo.png" alt="logo" fit="contain" width="100px"/>
    </b-navbar-brand>


  <b-navbar-toggle target="nav-collapse"/>


    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="pah" :active="$route.path === '/pah'">WHAT IS PAH?</b-nav-item>
        <b-nav-item to="manage">MANAGING YOUR PAH</b-nav-item>
        <b-nav-item to="treatment">TREATMENT</b-nav-item>
        <b-nav-item to="resources">RESOURCES</b-nav-item>
        <b-nav-item to="commitment">OUR COMMITMENT TO PAH</b-nav-item>
        <b-nav-item to="#"><button class="join font-weight-bold">JOIN OUR EMAIL LIST</button></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
  
  }
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

.header {
  background: url('../assets/bg.png') fixed;
  background-size: 184px 184px;
  background-repeat: repeat;
  border: none;

  @include for-desktop-up {
    background-image: none;
  }
}

.navbar-light .navbar-nav .nav-link {
  color: black;
  font-weight: bold;
  transition: color 150ms ease-in-out;

  &:last-child {
    padding: 0;
  }

  &:hover {
    color: var(--color-secondary);
  }
}

.navbar-light .navbar-nav .nav-item {

  &:last-child {
    padding: 0;
  }

  & + .nav-item {
    margin-top: 1rem;
  }

  @include for-desktop-up {
    padding: .425rem .75rem;
    font-size: 0.9rem;

    & + .nav-item {
      margin-top: 0;
    }
  }

  @include for-big-desktop-up {
    font-size: 1rem;
  }
}

.nav-item .nav-link.router-link-exact-active.router-link-active {
  color: var(--color-secondary);
}

.navbar-light .navbar-nav .nav-item button.join {
  max-width: 200px;
  background-color: black;
  color: white;

  &:hover {
    color: #ccc;
  }
}
</style>