<template>
  <b-navbar class="header" toggleable="lg">
    <b-navbar-toggle target="nav-collapse"/>

    <b-collapse id="nav-collapse" is-nav class="py-sm-2 px-sm-0">
      <b-navbar-nav fill class="mx-lg-auto">
        <b-nav-item to="/pah" class="d-flex justify-content-center align-items-center">WHAT IS PAH?</b-nav-item>
        <b-nav-item to="/manage" class="d-flex justify-content-center align-items-center">MANAGING YOUR PAH</b-nav-item>
        <b-nav-item to="/treatment" class="d-flex justify-content-center align-items-center">TREATMENT</b-nav-item>
        <b-nav-item to="/resources" class="d-flex justify-content-center align-items-center">RESOURCES</b-nav-item>
        <b-nav-item to="/commitment" class="d-flex justify-content-center align-items-center">OUR COMMITMENT TO PAH</b-nav-item>
        <b-nav-item to="/mailing-list" class="join font-weight-bold">JOIN OUR EMAIL LIST</b-nav-item>
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
  border: none;
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
    padding: .75rem;
    font-size: 0.8rem;

    & + .nav-item {
      margin-top: 0;
    }
  }

  @include for-huge-desktop-up {
    font-size: 1rem;
  }
}

.navbar-light .navbar-nav .nav-item.join .nav-link {
  max-width: 200px;
  background-color: black;
  color: white;

  &:hover {
    color: #ccc;
  }
}
</style>