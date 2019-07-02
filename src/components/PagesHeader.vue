<template>
  <b-navbar class="header px-lg-5" toggleable="lg">
    <b-navbar-brand href="/">
      <g-image src="../assets/brand.png" alt="logo" fit="contain" width="100px"/>
    </b-navbar-brand>


  <b-navbar-toggle target="nav-collapse"/>


    <b-collapse id="nav-collapse" is-nav class="py-sm-2 px-sm-0">
      <b-navbar-nav fill class="mx-lg-auto">
        <b-nav-item to="/pah">WHAT IS PAH?</b-nav-item>
        <b-nav-item to="/manage">MANAGING YOUR PAH</b-nav-item>
        <b-nav-item to="/treatment">TREATMENT</b-nav-item>
        <b-nav-item to="/resources">RESOURCES</b-nav-item>
        <b-nav-item to="/commitment">OUR COMMITMENT TO PAH</b-nav-item>
        <b-nav-item to="#"><button class="join font-weight-bold">JOIN OUR EMAIL LIST</button></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
  }
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

.header {
  border: none;
}

.header::before {
  position: absolute;
  content: '';
  height: 2px;
  width: 96%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  background: var(--color-secondary);
}

.navbar-nav {
  max-width: 1140px;
  width: 100%;
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