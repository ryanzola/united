<template>
  <section id="closing" class="py-3 py-md-5 mb-3 mb-md-5">
    <b-container>
      <b-row>
        <b-col lg="8" offset-lg="2" class="text-center font-weight-bold px-lg-5">
          <p>PAH IS A PROGRESSIVE DISEASE.</p>
          <p>It's crucial to find a treatment plan that can help improve your risk status and delay disease progression.</p>
        </b-col>
      </b-row>
    </b-container>
  </section><!-- closing -->
</template>
<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

/* CLOSING
=============================================== */

#closing p {
  font-size: 1rem;

  @include for-desktop-up {
    font-size: 1.3rem;
  }

  @include for-big-desktop-up {
    font-size: 1.6rem;
  }
}

#closing p:first-child {
  color: var(--color-secondary);
}
</style>