<template>
  <b-navbar class="header d-lg-flex justify-content-lg-center" toggleable="lg" fixed="top">
    <b-navbar-toggle target="nav-collapse"/>

    <b-collapse id="nav-collapse" is-nav class="p-4 py-sm-3 px-sm-0">
      <b-navbar-nav fill>
        <b-nav-item href="/pah">WHAT IS PAH?</b-nav-item>
        <b-nav-item href="/manage">MANAGING YOUR PAH</b-nav-item>
        <b-nav-item href="treatment">TREATMENT</b-nav-item>
        <b-nav-item href="resources">RESOURCES</b-nav-item>
        <b-nav-item href="commitment">OUR COMMITMENT TO PAH</b-nav-item>
        <b-nav-item href="#"><button class="join font-weight-bold">JOIN OUR EMAIL LIST</button></b-nav-item>
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

#nav-collapse {
  max-width: 1440px;
}

.navbar-nav {
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

.navbar-light .navbar-nav .nav-item button.join {
  max-width: 200px;
  background-color: black;
  color: white;

  &:hover {
    color: #ccc;
  }
}
</style>