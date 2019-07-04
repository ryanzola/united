<template>
  <Layout>
    <section id="our-commitment" class="py-5 my-5">
      <b-container>
        <h1 class="title offset-lg-4 mb-5 pr-lg-5">
          Our commitment to changing 
          the lives of patients with PAH
        </h1>

        <b-row>
          <b-col lg="4">
            <img src="../assets/ut-logo.png" alt="united theraputics logo" class="w-100 px-lg-4">
          </b-col>

          <b-col lg="6" class="pr-lg-5">
            <p>
              <strong>United Therapeutics was founded by the parents of a child 
              diagnosed with pulmonary arterial hypertension (PAH).</strong><br> 
              Faced with a lack of information, support, and therapy options, 
              they set out on a very personal quest to help change the future 
              for people impacted by PAH. Since United Therapeutics 
              was founded in 1996, thousands of patients around the world have 
              benefited from our commitment to the PAH community.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- our-commitment -->

    <section id="pah-initiative" class="py-5 my-5">
      <b-container>
        <h1 class="title mb-5 offset-lg-2">THE PAH INITIATIVE</h1>
        <b-row class="mb-lg-5">
          <b-col lg="6" offset-lg="2">
            <p class="font-weight-bold pr-lg-5">
              The PAH Initiative strives to improve the lives of adults with 
              PAH by helping to ensure that every patient receives the right 
              treatment at the right time. United Therapeutics is proud to 
              sponsor the PAH-I and we’ll work to establish the PAH 
              Initiative as a trusted resource for patients, healthcare 
              providers and PAH communities.
            </p>
          </b-col>
          <b-col lg="3">
            <img src="../assets/pah-initiative.png" alt="pah initiative logo" class="w-100">
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6" offset-lg="2">
            <p class="pr-lg-5">
              We know that for patients with PAH, every moment is precious, 
              and that’s why the PAH Initiative created NoTimetoLose.com. 
              We’re encouraging patients to understand their risk scores and 
              learn about the benefits of using prostacyclin class therapy 
              earlier to help improve symptoms and delay disease progression.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- pah-initiative -->

    <section id="dedication" class="py-5 my-5">
      <b-container>
        <b-row>
          <b-col lg="7" offset-lg="2">
            <h1 class="title">
              Watch this video about our 
              dedication to transforming 
              treatment for PAH and other 
              rare diseases
            </h1>
          </b-col>
        </b-row>

        <b-row>
          <b-col offset-lg="6">
            <img src="../assets/dedication-video.png" alt="dedication video thumbnail" class="w-100">
          </b-col>
        </b-row>
      </b-container>
    </section><!-- dedication -->
  </Layout>
</template>

<script>
import Layout from '~/layouts/Pages.vue'

export default {
  metaInfo: {
    title: 'Our Commitment to PAH'
  },
  components: {
    Layout
  }
}
</script>