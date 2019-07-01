<template>
  <Layout>
    <section id="what-is-pah" class="px-1 px-md-0 pb-3 pb-md-5 mb-3 mb-md-5 mt-md-5">
      <b-container>
        <b-row class="mb-3">
          <b-col offset-lg="3">
            <h1 class="title">WHAT EXACTLY IS PAH?</h1>
          </b-col>
        </b-row>
        <b-row class="definition mb-5">
          <b-col sm="3" class="d-none d-lg-block">
            <img src="../assets/ut-lungs.png" alt="lungs" class="w-100">
          </b-col>
          <b-col lg="7" xl="6">
            <p>
              <strong>PAH stands for Pulmonary Arterial Hypertension.</strong> PAH causes the 
              millions of tiny blood vessels in your lungs to harden and narrow,
              creating less blood flow from your heart to your lungs. As a result, 
              this creates high blood pressure in the vessels of your lungs causing 
              the right side of the heart to work harder than normal. But there’s 
              nothing basic about this disease. PAH is a severe, progressive 
              disease. While some cases are passed down through family, 
              most people with PAH don’t know the cause of their disease.
            </p>
          </b-col>
        </b-row>

        <b-row class="symptoms">
          <b-col sm="2" offset-sm="2" class="d-none d-lg-block">
            <img src="../assets/ut-symptoms.png" alt="symptoms icon" class="w-100">
          </b-col>

          <b-col>
            <h4 class="font-weight-bold text-center text-lg-left">PAH Symptoms</h4>
            <p class="pr-lg-4 pr-xl-5">
              <strong>Early signs and symptoms include dizziness, shortness of breath, chest pain, 
              fatigue, and swollen ankles or legs. You may notice these symptoms during 
              physical activity. As the disease progresses, these same symptoms occur 
              even at rest.</strong> And because PAH is a progressive disease, there is no making up 
              for lost time. That means if you’re not treated appropriately earlier on, the 
              symptoms will continue to get worse. So, the time to take on the fight is now.
            </p>
            <p class="text-secondary font-weight-bold text-center text-lg-left">With PAH, there’s no time to lose.</p>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- what-is-pah -->

    <section id="pulmonary" class="py-5 my-5">
      <b-container>
        <b-row>
          <b-col>
            <h1 class="title mb-sm-4 mb-xl-5">Pulmonary Hypertension (PH) vs. PAH</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" offset-lg="2" class="content pr-lg-5">
            <p>
              PH is a more general term for any condition in which pressure in the 
              blood vessels of the lungs is too high. It can involve multiple other 
              clinical conditions. P<span class="text-secondary font-weight-bold">A</span>H is a specific type of PH.  It’s progressive form 
              of PH that causes the walls of the arteries of the lungs to become tight 
              and stiff, so that the right side of the heart has to work harder to push 
              blood through the narrowed arteries in the lungs.
            </p>
          </b-col>

          <b-col sm="3" offset-sm="1" class="d-none d-lg-block">
            <img src="../assets/ut-pulmonary.png" alt="pulmonary icon" class="w-100">
          </b-col>
        </b-row>
      </b-container>  
    </section><!-- pulmonary -->

    <section id="take-a-look" class="py-5 my-5">
      <b-container>
        <b-row>
          <b-col lg="6" class="pt-5 mt-5 mb-4 mb-lg-0">
            <img src="../assets/pah-video-thumb.png" alt="video thumbnail" class="w-100">
          </b-col>
          <b-col lg="6" class="content">
            <h1 class="title mb-4">Let’s take a look at how PAH impacts your body</h1>
            <p class="mb-4 font-weight-bold pr-lg-5">
              Sometimes it helps to actually see what’s happening<br class="d-none d-xl-block">
              in the body of someone who has PAH. 
            </p>

            <p class="mb-4 pr-lg-5">
              Click on the link below to watch a video that will give you a better 
              understanding of the causes of the symptoms, the affect PAH has 
              on the heart and lungs, as well as how treatments work.
            </p>

            <b-row>
              <b-col class="text-center text-lg-left">
                <button class="ut-btn">Watch the Video</button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- take-a-look -->
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

/* WHAT IS PAH?
=============================================== */

#what-is-pah .definition::before {
  position: absolute;
  content: '';
  border-radius: 0.4375rem;

  @include for-desktop-up {
    left: 50%;
    height: 240px;
    width: 650px;
    background-color: var(--color-primary);
    transform: translate(-47%, -20px);
  }

  @include for-big-desktop-up {
    left: 50%;
    height: 240px;
    width: 700px;
    background-color: var(--color-primary);
    transform: translate(-52%, -20px);
  }
}

#what-is-pah .container::before {
  position: absolute;
  content: '';
  border-radius: 0.4375rem;

  @include for-desktop-up {
    left: 50%;
    height: 475px;
    width: 725px;
    background-color: var(--color-grey);
    transform: translate(-35%, 80px);
  }

  @include for-big-desktop-up {
    left: 50%;
    height: 475px;
    width: 855px;
    background-color: var(--color-grey);
    transform: translate(-35%, 90px);
  }
}

/* PULMONARY
=============================================== */

#pulmonary::before {
  position: absolute;
  content: '';
  border-radius: 0.4375rem;

  @include for-desktop-up {
    left: 50%;
    height: 320px;
    width: 750px;
    background-color: var(--color-primary);
    transform: translate(-52%, -20px);
  }

  @include for-big-desktop-up {
    left: 50%;
    height: 320px;
    width: 920px;
    background-color: var(--color-primary);
    transform: translate(-52%, -35px);
  }
}

/* TAKE A LOOK
=============================================== */

#take-a-look::before {
  position: absolute;
  content: '';
  border-radius: 0.4375rem;

  @include for-desktop-up {    
    left: 50%;
    height: 340px;
    width: 750px;
    transform: translate(-38%, 38px);  
    background-color: var(--color-grey);
  }
  @include for-big-desktop-up {    
    left: 50%;
    height: 330px;
    width: 920px;
    transform: translate(-40%, 45px);  
  }
}
</style>