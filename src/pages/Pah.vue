<template>
  <Layout>
    <section id="what-is-pah" class="px-1 px-md-0 pb-3 pb-md-5 mb-3 mb-md-5 mt-md-5">
      <b-container>
        <b-row>
          <b-col>
            <div class="content">
              <h1 class="title">WHAT EXACTLY IS PAH?</h1>
              <div class="content bg-primary p-2 px-md-5">
                <p>
                  <strong>PAH stands for Pulmonary Arterial Hypertension.</strong> PAH causes the 
                  millions of tiny blood vessels in your lungs to harden and narrow,
                  creating less blood flow from your heart to your lungs. As a result,
                  this creates high blood pressure in the vessels of your lungs causing
                  the right side of the heart to work harder than normal. But there's
                  nothing basic about this disease. PAH is a severe, progressive 
                  disease. While some cases are passed down through family, 
                  most people with PAH don't know the cause of their disease
                </p>

              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- what-is-pah -->
    <section id="pulmonary"></section><!-- pulmonary -->
    <section id="take-a-look"></section><!-- take-a-look -->
  </Layout>
</template>

<script>
import Layout from '~/layouts/Pages.vue'

export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    Layout
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

/* GENERAL LAYOUT
=============================================== */

section {
  position: relative;  
}

/* WHAT IS PAH?
=============================================== */

#what-is-pah {
  padding-top: 60px;

  @include for-tablet-portrait-up {
    padding-top: 40px;
  }
}
</style>