<template>
  <footer class="ut-footer bg-primary d-flex flex-column py-4">
    <b-container fluid>
      <b-row>
        <b-col sm="8" offset-sm="2">
          <b-navbar-nav fill class="d-flex flex-lg-row">
            <b-nav-item to="privacy-policy">Privacy Policy</b-nav-item>
            <b-nav-item to="terms-of-use">Terms of Use</b-nav-item>
            <b-nav-item to="contact-us">Contact Us</b-nav-item>
            <b-nav-item to="unsubscribe">Unsubscribe</b-nav-item>
            <b-nav-item to="site-map">Site Map</b-nav-item>
          </b-navbar-nav>

          <b-row class="mb-3 mb-lg-0">
            <b-col class="text-center">
              <small>&copy; Copyright 2019 United Theraputics Corporation. All rights reserved XX/XX/XXXX</small>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="2" class="d-flex align-items-center justify-content-center">
          <g-image src="~/assets/ut-footer-logo.png" class="footer-logo" />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

.container-fluid {
  max-width: 1920px;
}

.ut-footer .navbar-nav li a {
  color: black;
  font-weight: bold;
}

.ut-footer .navbar-nav li a:hover {
  color: var(--color-secondary);
}

.nav-item .nav-link.router-link-exact-active.router-link-active {
  color: var(--color-secondary);
}

.ut-footer .footer-logo {
  width: 150px;

  @include for-desktop-up {
    width: 100%;
  }
}
</style>