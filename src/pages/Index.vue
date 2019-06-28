<template>
  <Layout>
    <section id="hero" class="px-1 px-md-0 pb-3 pb-md-5 mb-3 mb-md-5">
      <b-container fluid class="d-flex align-items-center flex-column">
        <b-row class="mb-5">
          <b-col class="text-center px-lg-5">
            <img class="w-100" src="../assets/ut-hero.png" alt="hero image"/>
          </b-col>
        </b-row>
        <b-row class="my-md-5">
          <b-col class="text-center mx-auto">     
            <svg viewBox="0 0 28 22" class="arrow">
              <path d="M0 0 h28 l -14 22 l -14 -22 Z" fill="black"/>
            </svg>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- hero -->
     
    <section id="what-is-pah" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container fluid>
        <b-row class="mx-auto mb-lg-4  content">
          <b-col lg="3" offset-lg="1" class="p-sm-4 p-lg-4 d-none d-lg-block">
            <img src="../assets/ut-lungs.png" alt="lungs" class="w-100"> 
          </b-col>

          <b-col lg="7" class="p-0 p-lg-5 text-center text-lg-left">
            <b-row class="mb-5">
              <b-col>
                <div>
                  <h1 class="title mb-4">WHAT IS PAH?</h1>
                  <p>Looking for more info about <br>what PAH is? Look no further.</p>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="text-center text-lg-left">
                <g-link to="/pah" class="ut-btn">
                  <button class="ut-btn">Learn More</button>
                </g-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- what-is-pah -->

    <section id="know-your-risk" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container>
        <b-row class="content">
          <b-col>
            <div>
              <h1 class="title mb-5">WHY IT'S IMPORTANT<br> TO KNOW YOUR RISK</h1>
              <p class="pl-lg-5">
                If you have PAH, there's no time to lose. Every moment you wait to talk
                to your doctor is a moment PAH will steal from you. It's important to have your 
                doctor determine your risk score and help you understand all available treatment 
                options. Make sure you and your doctor are doing everything you can to take on 
                your PAH. But the most important thing is to take action by talking to your doctor 
                about your treatment options.
              </p>
            </div>
          </b-col>
        </b-row>


      </b-container>
    </section><!-- know-your-risk -->

    <section id="know-where-you-stand">
      <b-container>
        <b-row class="mb-5">
          <b-col>
            <div>
              <h1 class="title text-md-center mb-3">KNOW WHERE YOU STAND</h1>
              <p class="lead text-center mb-3">
                Slide the bottom arrow from left to right to see the progression of PAH from low to 
                high risk.<br>Click on each test to learn more about the lab values assoicated with each 
                risk score.
              </p>

              <p class="text-center">
                If you're immediate or high risk in any of these areas, there may be more you can do to 
                manage your PAH. Even a single "high risk" result can impact where you stand with your 
                risk score. When you know where you stand, you stand a better chance of taking the fight 
                to PAH.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- know-where-you-stand -->

    <section id="interactive-tool">
      <b-container>
        <b-row class="text-center">
          <b-col>
            <ClientOnly>
              <InteractiveTool />
            </ClientOnly>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- interactive-tool -->

    <section id="managing-your-pah" class="py-3 py-md-5 my-3 my-md-5">
      <b-container class="my-0 my-sm-5">
        <b-row>
          <b-col sm="8" offset-sm="3" class="py-5 pr-md-5 bg-grey">
            <img src="../assets/list.png" alt="checklist" class="position-absolute"> 
            <div class="content">
              <h1 class="title mb-4">MANAGING YOUR PAH</h1>
              <p class="mb-5 mb-sm-0">If you need info about managing your PAH, you've come to the right place.</p>
            </div>

            <b-row>
              <b-col sm="5" offset-sm="6" class="text-center text-lg-right">
                <g-link to="/pah">
                  <button class="ut-btn">Get Started</button>
                </g-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- managing-your-pah -->

    <section id="treatment" class="py-3 py-md-5 my-3 my-md-5">
      <b-container>
        <b-row>
          <b-col sm="8" offset-sm="1" class="py-5 pr-md-5 bg-primary">
            <img src="../assets/puffer.png" alt="checklist" class="position-absolute"> 

            <div class="content">
              <h1 class="title mb-4">TREATMENT</h1>
              <p class="mb-5 mb-sm-0">There's no time to lose. Find a treatment that takes the fight to PAH.</p>
            </div>

            <b-row>
              <b-col sm="5" offset-sm="5" class="d-flex justify-content-center justify-content-md-start">
                <g-link to="/pah">
                  <button class="ut-btn">Take Action</button>
                </g-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- treatment -->

    <section id="closing">
      <b-container>
        <b-row>
          <b-col sm="8" offset-sm="2" class="text-center font-weight-bold">
            <p>PAH IS A PROGRESSIVE DISEASE.</p>
            <p>It's crucial to find a treatment plan that can help improve your risk status and delay disease progression.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import InteractiveTool from '../components/InteractiveTool';
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    InteractiveTool
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

/* GENERAL LAYOUT
=============================================== */

br {
  display: none;

  @include for-tablet-portrait-up {
    display: block;
  }
}

section {
  position: relative;
}

/* HERO
=============================================== */

#hero {
  padding-top: 60px;

  @include for-tablet-portrait-up {
    padding-top: 40px;
  }
}

#hero .row {
  max-width: 1440px;
}

#hero .arrow {
  height: 11px;
  width: 14px;

  @include for-tablet-portrait-up {    
    width: 28px;
    height: 22px;
  }
}

/* WHAT IS PAH?
=============================================== */

#what-is-pah {
  background-color: var(--color-primary);

  @include for-desktop-up {
    background-color: unset;
  }
}

#what-is-pah .content {
  font-weight: bold;
}

#what-is-pah .content::before {
  position: absolute;
  content: '';

  background-color: var(--color-primary);
  border-radius: 4px;

  @include for-desktop-up {
    height: 295px;
    width: 550px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -42%);
  }
  @include for-big-desktop-up {
    height: 330px;
    width: 745px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -44%);
  }
}

#what-is-pah p {
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 1.3rem;

  @include for-tablet-portrait-up {
    font-size: 2.4rem;
  }


  @include for-desktop-up {
    font-size: 2rem;
  }

  @include for-big-desktop-up {
    font-size: 2.8rem;
  }
}

/* KNOW YOUR RISKS
=============================================== */

#know-your-risk {
  background-color: var(--color-grey);

  @include for-desktop-up {
    background-color: unset;
  }
}

#know-your-risk::before,
#know-your-risk::after {
  display: none;
}

#know-your-risk::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 15px;
  border-radius: 0 0.25rem 0 0;
  background-color: var(--color-primary);

  @include for-desktop-up {
    display: inline;
  }
}

#know-your-risk::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  height: 100%;
  width: 15px;
  border-radius: 0.25rem 0 0 0.0;
  background-color: var(--color-primary);

  @include for-desktop-up {
    display: inline;
  }
}

#know-your-risk .tool {
  width: 100%;
}

/* KNOW WHERE YOU STAND
=============================================== */

#know-where-you-stand {

}

#know-where-you-stand::before,
#know-where-you-stand::after {
  display: none;
}

#know-where-you-stand::before {
  position: absolute;
  content: '';
  top: -3rem;
  left: 0;
  height: calc(100% + 6rem);
  width: 15px;
  background-color: var(--color-primary);

  @include for-desktop-up {
    display: inline;
  }
}

#know-where-you-stand::after {
  position: absolute;
  content: '';
  top: -3rem;
  right: 0;
  height: calc(100% + 6rem);
  width: 15px;
  background-color: var(--color-primary);

  @include for-desktop-up {
    display: inline;
  }
}

/* INTERACTIVE TOOL
=============================================== */

#interactive-tool {

}

#interactive-tool::before,
#interactive-tool::after {
  display: none;
}

#interactive-tool::before {
  position: absolute;
  content: '';
  top: -3rem;
  left: 0;
  height: calc(100% + 6rem);
  width: 15px;
  border-radius: 0 0 0.25rem 0;
  background-color: var(--color-primary);

  @include for-desktop-up {
    display: inline;
  }
}

#interactive-tool::after {
  position: absolute;
  content: '';
  top: -3rem;
  right: 0;
  height: calc(100% + 6rem);
  width: 15px;
  border-radius: 0 0 0 0.25rem;
  background-color: var(--color-primary);

  @include for-desktop-up {
    display: inline;
  }
}

/* MANAGING YOUR PAH
=============================================== */

#managing-your-pah .content {
  font-weight: bold;

  @include for-tablet-portrait-up {
    width: 105%;
    transform: translate(-140px, -100px)
  }
}

#managing-your-pah p {
  margin-bottom: 0;
  line-height: 1.2;

  @include for-tablet-portrait-up {
    font-size: 2.5rem;
  }
}

#managing-your-pah img {
  display: none;

  @include for-tablet-portrait-up {
    display: block;
    height: 220px;
    right: -70px;
    top: -95px;
  }

  @include for-desktop-up {
    display: block;
    height: 220px;
    right: -95px;
    top: -95px;
  }
}

/* TREATMENT
=============================================== */

#treatment .content {
  font-size: 2rem;
  font-weight: bold;

  @include for-tablet-portrait-up {
    font-size: 2.5rem;
    transform: translate(200px, -100px)
  }
  @include for-desktop-up {
    font-size: 2.5rem;
    transform: translate(290px, -100px)
  }
}

#treatment p {
  margin-bottom: 0;
  line-height: 1.2;
  letter-spacing: -0.2px;

  @include for-tablet-portrait-up {
    font-size: 2.5rem;
  }
}

#treatment img {
  display: none;

  @include for-tablet-portrait-up {
    display: block;
    height: 220px;
    left: -46px;
    top: -110px;
  }
}

/* CLOSING
=============================================== */

#closing p:first-child {
  color: var(--color-secondary);
}
</style>
