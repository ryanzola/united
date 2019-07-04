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
          <b-col offset-lg="2">
            <b-row class="d-flex mb-lg-3">
              <b-col lg="7" class="align-self-end">
                <h3 class="font-weight-bold p-3 text-center">Pulmonary Hypertension Association</h3>
              </b-col>

              <b-col lg="4" class="p-0">
                <img src="../assets/pha-brand.png" alt="pha logo" class="w-100">
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="6">
                <p>
                  <strong>The PH Association</strong> provides valuable resources and information to 
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
                <h3 class=" col-sm-6 p-3 mb-3 text-center font-weight-bold">PHAware</h3>
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
              <b-col lg="8" class="pt-lg-4">
                <h3 class="font-weight-bold p-3 mb-lg-3 text-center col-lg-6">Scleroderma Foundation</h3>

                <p class="col-lg-9 p-0 pr-lg-5">
                  <strong>Scleroderma</strong> is a chronic connective tissue disease in which 
                  the patients are at high risk of getting PAH. The Scleroderma Foundation 
                  supports patients and their families through support programs, peer 
                  counseling, raising public awareness, and stimulating research to 
                  improve treatment.
                </p>
              </b-col>

              <b-col lg="3">
                <img src="../assets/scleroderma-foundation-logo.png" alt="pha logo" class="w-100 px-4">
              </b-col>
            </b-row>
          </b-col>
        </b-row><!-- scleroderma -->

        <b-row class="ph-news mb-lg-5">
          <b-col lg="4" offset-lg="1"  class="px-5 pt-lg-4 d-flex">
            <img src="../assets/ph-news.png" alt="pha logo" class="align-self-center w-100">
          </b-col>

          <b-col lg="5">     
            <h3 class=" col-sm-6 p-3 mb-3 text-center font-weight-bold">PH News</h3>
            <p class="pr-lg-5 mb-0">
              Valuable news and articles about<br> 
              developments in PH research and therapies.
            </p>
          </b-col>
        </b-row><!-- ph-news -->
      </b-container>
    </section>

    <section id="support" class="py-5 my-5">
      <b-container>
        <h1 class="title offset-lg-6 mb-5">
          Learn more about how 
          United Therapeutics 
          supports people with PAH
        </h1>

        <b-row>
          <b-col offset-lg="1">
            <h3 class="p-3 text-center col-lg-3">
              PeerNetwork.net 
            </h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6" offset-lg="1">
            <p class="pt-lg-3">
              <strong>PeerNetwork</strong> gives patients and their caregivers an opportunity 
              to connect with peer mentors to learn about the practical lifestyle 
              considerations of United Therapeutics medications.
            </p>
            
            <p class="font-weight-bold">Sponsored by United Therapeutics Corporation</p>

          </b-col>
          <b-col lg="3" offset-lg="1" class="p-0">
            <img src="../assets/peernetwork.png" alt="peer network logo" class="w-100">
          </b-col>
        </b-row>
      </b-container>
    </section><!-- support -->

    <section id="learn-more" class="py-5 my-5">
      <b-container>
        <b-row>
          <b-col offset-lg="1">
            <h1 class="title col-lg-7 pr-lg-3 pl-0 mb-5">
              Want to learn more about
              PAH treatments from
              United Therapeutics?
            </h1>

            <h4 class="font-weight-bold">
              Go directly to our site.
            </h4>

            <h3 class="p-3 col-lg-6 offset-lg-4 text-center">Visit FightingPAH.com right now</h3>
          </b-col>
        </b-row>
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

h3 {
  border: 2px solid var(--color-secondary);
}
</style>
