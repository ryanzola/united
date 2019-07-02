<template>
  <Layout>
    <section id="blood-vessels" class="py-5 my-5">
      <b-container>
        <b-row>
          <b-col lg="6" class="content">
            <h1 class="title">First, let’s see how PAH effects blood vessels.</h1>
            <h3 class="mb-4 font-weight-bold pr-lg-5">
              Then, we’ll look at therapies that help resolve the issues seen in the video.
            </h3>

            <p class="mb-4 pr-lg-5">
              Press play to watch the video
            </p>
          </b-col>

          <b-col lg="6" class="pt-5 mt-5 mb-4 mb-lg-0">
            <img src="../assets/blood-vessels-thumb.png" alt="video thumbnail" class="w-100">
          </b-col>
        </b-row>
      </b-container>
    </section><!-- blood-vessels -->

    <section id="treatment-options" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container class="pb-lg-5">
          <b-row class="mb-4">
            <b-col offset-lg="1">
              <h1 class="title mb-4">PAH treatment options</h1>


              <b-row>
                <b-col lg="9" offset-lg="2">
                  <p class="font-weight-bold">
                    There are 3 known substances found in your body that help blood flow freely through your 
                    blood vessels. With PAH, too much or too little of these substances can result in the narrowing 
                    of the blood vessels ion your lungs.
                  </p>
                  <p>
                    Currently, there is no test to determine which substance is out of balance. However, 1, 2, or all 3 of 
                    these substances could be out of balance.
                  </p>
                  <p>
                    <strong>PAH treatment guidelines recommend using more than 1 type of treatment to address different 
                    pathways.</strong> It’s important that you and your doctor continuously monitor your condition and set 
                    goals for your treatment. <strong>It may be necessary to add treatment to improve your risk status.</strong>
                  </p>
                </b-col>
              </b-row>
            </b-col><!-- copy -->
          </b-row>

          <b-row class="list">
            <b-col>
              <b-row class="list-item mb-lg-5 pb-lg-5">
                <b-col lg="3">
                  <img src="../assets/ut-nitric-oxide.png" alt="nitric oxide icon" class="w-100">
                </b-col><!-- icon -->

                <b-col lg="6" class="pl-5">
                  <h2 class="font-weight-bold mb-lg-5">Nitric Oxide Therapies:</h2>

                  <p>
                    Boost the production of nitric oxide (a molecule that 
                    relaxes the inner muscles of blood vessels) within your 
                    body to help keep the blood vessels in your lungs 
                    open. <strong>These medicines are available in pill form.</strong>
                  </p>

                  <div class="drop-content">

                  </div>
                </b-col><!-- copy -->
              </b-row><!-- list-item 1 -->

              <b-row class="list-item my-lg-5 py-lg-5">
                <b-col lg="3" offset-lg="3" class="px-lg-4">
                  <img src="../assets/ut-endothelin.png" alt="endothelin icon" class="w-100">
                </b-col>

                <b-col lg="6" class="mb-4 mb-lg-0">
                  <h2 class="font-weight-bold mb-lg-5">
                    Endothelin Therapies:
                  </h2>

                  <p>
                    Prevent excess endothelin (an amino acid) from 
                    tightening or restricting the blood vessels in your 
                    lungs. <strong>These medicines are available in pill form.</strong>
                  </p>

                  <div class="drop-content">

                  </div>
                </b-col>
              </b-row><!-- list-item 2 -->

              <b-row class="list-item mt-lg-5 pt-lg-5">
                <b-col lg="3">
                  <img src="../assets/ut-prostacyclin.png" alt="prostacyclin class therapies icon" class="w-100">
                </b-col><!-- icon -->

                <b-col lg="6">
                  <h2 class="font-weight-bold mb-lg-5">
                    Prostacyclin Class Therapies:
                  </h2>
                  <b-row>
                    <b-col>
                      <p>
                        Mimics the effects of the natural prostacyclin that your 
                        body produces to help the blood vessels in your lungs 
                        stay open. <strong>These medicines are available in 3 forms: 
                        pills, inhaled, and infused with a pump.</strong>
                      </p>

                      <div class="drop-content">

                      </div>
                    </b-col>
                  </b-row>
                </b-col><!-- copy -->
              </b-row><!-- list-item 3 -->
            </b-col>
          </b-row><!-- list -->
      </b-container>
    </section><!-- treatment-options -->

    <section id="common-tests" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container class="pb-lg-5">
          <b-row>
            <b-col lg="8" class="pt-lg-5">
              <b-row>
                <b-col class="mr-lg-5 pl-lg-5">
                  <h2 class="font-weight-bold mb-lg-5">
                    Visit FightingPAH.com to learn more about 
                    the PAH treatment options brought to you 
                    by United Therapeutics.
                  </h2>

                  <button class="ut-btn">Go Now</button>
                </b-col>
              </b-row>
            </b-col><!-- copy -->

            <b-col lg="3" class="d-none d-lg-block">
              <img src="../assets/ut-fighting-pah.png" alt="fighting pah icon" class="w-100"> 
            </b-col><!-- icon -->
          </b-row>
      </b-container>
    </section><!-- common-tests -->
  </Layout>
</template>

<script>
import Layout from '~/layouts/Pages.vue'

export default {
  metaInfo: {
    title: 'Treatment'
  },
  components: {
    Layout
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

/* BLOOD VESSELS
=============================================== */

#blood-vessels::before {
  position: absolute;
  content: '';
  border-radius: 0.4375rem;

  // @include for-desktop-up {    
  //   left: 50%;
  //   height: 340px;
  //   width: 750px;
  //   transform: translate(-38%, 38px);  
  //   background-color: var(--color-grey);
  // }
  // @include for-big-desktop-up {    
  //   left: 50%;
  //   height: 330px;
  //   width: 920px;
  //   transform: translate(-40%, 45px);  
  // }
}
</style>
