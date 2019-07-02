<template>
  <Layout>
    <section id="useful-information" class="py-5 my-5">
      <b-container>
        <b-row>
          <b-col lg="6">
            <h1 class="title">
              Useful information for
              your fight against PAH
            </h1>
          </b-col>   
        </b-row>

        <b-row class="pha mb-lg-5">
          <b-col>
            <b-row class="d-flex mb-lg-3">
              <b-col lg="7" class="align-self-end">
                <h2 class="font-weight-bold p-lg-3 text-center">Pulmonary Hypertension Association</h2>
              </b-col>

              <b-col lg="3">
                <img src="../assets/pha-brand.png" alt="pha logo">
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="7">
                <p>
                  The PH Association provides valuable resources and information to 
                  PAH patients, their loved ones, and physicians. Featuring everything 
                  from information about PAH, to finding PAH experts and support 
                  groups, the PH Association is fully dedicated to extending and 
                  improving the lives of those affected by PH.
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row><!-- pha -->

        <b-row class="phaware mb-lg-5">
              <b-col lg="3" offset-lg="4"  class="px-5 d-flex">
                <img src="../assets/phaware.png" alt="pha logo" class="w-100 align-self-end">
              </b-col>
    
              <b-col lg="5">     
                <h2 class=" col-sm-6 p-lg-3 mb-5 text-center font-weight-bold">PHAware</h2>
                <p class="pr-lg-5 mb-0">
                  <strong>PHAware</strong> creates awareness and global engagement 
                  on behalf of families affected by PAH, medical 
                  professionals, and supports research efforts to find 
                  a cure for this deadly disease.
                </p>
              </b-col>
        </b-row><!-- phaware -->

        <b-row class="scleroderma mb-lg-5">
          <b-col>
            <b-row class="mb-lg-3">
              <b-col class="pt-lg-4">
                <h2 class="font-weight-bold p-lg-3 text-center">Scleroderma Foundation</h2>

                <p>
                  <strong>Scleroderma</strong> is a chronic connective tissue disease in which 
                  the patients are at high risk of getting PAH. The Scleroderma Foundation 
                  supports patients and their families through support programs, peer 
                  counseling, raising public awareness, and stimulating research to 
                  improve treatment.
                </p>
              </b-col>

              <b-col lg="3" offset-lg="3">
                <img src="../assets/scleroderma-foundation-logo.png" alt="pha logo col-lg-3 w-100">
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="7">

              </b-col>
            </b-row>
          </b-col>
        </b-row><!-- scleroderma -->
      </b-container>
    </section>

  </Layout>
</template>

<script>
import Layout from '~/layouts/Pages.vue'

export default {
  metaInfo: {
    title: 'Resources'
  },
  components: {
    Layout
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

#useful-information h2 {
  border: 2px solid var(--color-secondary);
}
</style>
