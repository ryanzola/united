<template>
  <b-navbar class="header" toggleable="lg">
    <b-navbar-toggle target="nav-collapse"/>

    <b-collapse id="nav-collapse" is-nav class="py-sm-2 px-sm-0">
      <b-navbar-nav fill class="mx-lg-auto">
        <b-nav-item href="/pah" class="d-flex justify-content-center align-items-center">WHAT IS PAH?</b-nav-item>
        <b-nav-item href="/manage" class="d-flex justify-content-center align-items-center">MANAGING YOUR PAH</b-nav-item>
        <b-nav-item href="treatment" class="d-flex justify-content-center align-items-center">TREATMENT</b-nav-item>
        <b-nav-item href="resources" class="d-flex justify-content-center align-items-center">RESOURCES</b-nav-item>
        <b-nav-item href="commitment" class="d-flex justify-content-center align-items-center">OUR COMMITMENT TO PAH</b-nav-item>
        <b-nav-item href="#"><button class="join font-weight-bold">JOIN OUR EMAIL LIST</button></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

  export default {
    mounted() {
      let header = document.querySelector('.header');
      header.style.background = 'rgba(244, 244, 253, 0)'
      document.addEventListener('scroll', setBackgroundColor)

      function setBackgroundColor() {
        let offset = window.scrollY / (document.body.offsetHeight - window.innerHeight)
        header.style.background = (offset * 16) > 0.99 ? 0.99 : `rgba(244, 244, 253, ${offset * 16})`;
      }
    }
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

.navbar-light .navbar-nav .nav-item button.join {
  max-width: 200px;
  background-color: black;
  color: white;

  &:hover {
    color: #ccc;
  }
}
</style>