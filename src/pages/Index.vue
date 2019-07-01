<template>
  <Layout>
    <section id="hero" class="px-1 px-md-0 pb-3 pb-md-5 mb-3 mb-md-5">
      <b-container>
        <b-row class="mb-5">
          <b-col>
            <img class="w-100" src="../assets/ut-hero.png" alt="hero image"/>
          </b-col>
        </b-row>
        <b-row class="mt-md-5">
          <b-col class="text-center">
            <b-nav-item to="#what-is-pah">
              <svg viewBox="0 0 28 22" class="arrow">
                <path d="M0 0 h28 l -14 22 l -14 -22 Z" fill="black" />
              </svg>
            </b-nav-item>

          </b-col>
        </b-row>
      </b-container>
    </section><!-- hero -->
     
    <section id="what-is-pah" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container>
        <b-row class="content">
          <b-col lg="3" offset-lg="1" class="p-sm-4 py-lg-5 px-lg-0 d-none d-lg-block">
            <img src="../assets/ut-lungs.png" alt="lungs" class="w-100"> 
          </b-col>

          <b-col lg="7" class="p-0 p-lg-5 text-center text-lg-left">     
            <h1 class="title mb-4">WHAT IS PAH?</h1>
            <p class="mb-5">Looking for more info about <br>what PAH is? Look no further.</p>
  

  
            <g-link to="/pah" class="ut-btn">
              <button class="ut-btn">Learn More</button>
            </g-link>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- what-is-pah -->

    <section id="know-your-risk" class="mx-auto py-5 mb-4 mb-md-5">
      <b-container>
        <b-row class="content">
          <b-col> 
            <b-row class="mb-3 mb-xl-5">
              <b-col>
                <h1 class="title">WHY IT'S IMPORTANT<br> TO KNOW YOUR RISK</h1>
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="11" offset-lg="1">
                <p>
                  <strong>PAH is a serious, progressive disease.</strong> Having your doctor assess your risk status and the 
                  chance that your PAH will progress is an important step in determining your treatment 
                  plan. <strong>Make sure you and your doctor are doing everything you can to take on your PAH.</strong> 
                  The most important thing is to take action by talking to your doctor about your risk status 
                  and treatment options.
                </p>
              </b-col>
            </b-row> 
          </b-col>
        </b-row>
      </b-container>
    </section><!-- know-your-risk -->

    <section id="know-where-you-stand" class="pt-5 pt-md-5">
      <b-container>
        <b-row class="content mb-5">
          <b-col>
    
              <h1 class="title text-md-center mb-4">DO YOU KNOW WHERE YOU STAND?</h1>
              <p class="text-center mb-3">
                <strong>Slide the bottom arrow from left to right to see the progression of PAH from low to high risk. 
                  Click on each test to learn more about the lab values associated with each risk score.</strong>
              </p>
              <p class="text-center">
                If you’re intermediate or high risk in any of these areas, there may be more you can do to manage 
                your PAH. <strong>Even a single “high risk” result can impact where you stand with your risk score.</strong> 
                When you know where you stand, you stand a better chance of taking the fight to PAH.
              </p>
       
          </b-col>
        </b-row>
      </b-container>
    </section><!-- know-where-you-stand -->

    <section id="interactive-tool" class="mb-5">
      <b-container>
        <b-row class="text-center mb-2">
          <b-col>
            <ClientOnly>
              <InteractiveTool />
            </ClientOnly>
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col lg="10" offset-lg="1">
            <p>
              This tool is not intended to nor should it be used to diagnose PAH or determine your risk score. 
              We encourage you to use this information to talk to your doctor about your risk status and discuss 
              whether now is the time to consider making adjustments to your treatment plan.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- interactive-tool -->

    <section id="managing-your-pah" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container class="pb-5">
        <b-row class="content">
          <b-col class="text-center text-lg-left">
            <b-row class="mb-5">
              <b-col lg="8" class="pt-lg-5">
                  <h1 class="title mb-4">MANAGING YOUR PAH</h1>
                  <p>
                    If you need info about managing your 
                    PAH, you’ve come to the right place.
                  </p>
              </b-col>

              <b-col lg="3" class="d-none d-lg-block">
                <img src="../assets/checklist.png" alt="lungs" class="w-100"> 
              </b-col>
            </b-row>

            <b-row>
              <b-col offset-lg="5">
                <g-link to="/pah" class="ut-btn">
                  <button class="ut-btn">Getting Started</button>
                </g-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- managing-your-pah -->

    <section id="treatment" class="py-5 py-md-5 mb-4 mb-md-5">
      <b-container class="pb-lg-5">
        <b-row class="content">
          <b-col lg="3" class="d-none d-lg-block">
            <img src="../assets/treatment.png" alt="treatment icon" class="w-100"> 
          </b-col>

          <b-col lg="8" offset-lg="1" class="pr-xl-5 pt-lg-5 text-center text-lg-left">
            <b-row class="mb-5">
              <b-col>            
                <h1 class="title mb-4">TREATMENT</h1>
                <p>There’s no time to lose. Find a treatment that takes the fight to PAH.</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="text-center text-lg-left">
                <g-link to="/pah" class="ut-btn">
                  <button class="ut-btn">Take Action</button>
                </g-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section><!-- treatment -->
  </Layout>
</template>

<script>
import InteractiveTool from '../components/InteractiveTool';
export default {
  metaInfo: {
    title: 'No Time to Lose'
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

.content img {
  max-width: 300px;
}

/* HERO
=============================================== */

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

#what-is-pah .content::before {
  position: absolute;
  content: '';
  background-color: var(--color-primary);
  border-radius: 0.4375rem;

  @include for-desktop-up {
    height: 260px;
    width: 550px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -42%);
  }
  
  @include for-big-desktop-up {
    height: 275px;
    width: 550px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -42%);
  }
}

#what-is-pah p {
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 1rem;
  font-weight: bold;

  @include for-desktop-up {
    font-size: 1.8rem;
  }

  @include for-desktop-up {
    font-size: 2.1rem;
  }

  @include for-big-desktop-up {
    font-size: 2.4rem;
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

#know-your-risk .content p {

  @include for-desktop-up {
    font-size: 1.2rem;
  }

  @include for-big-desktop-up {
    font-size: 1.625rem;
  }
}

// #know-your-risk .content::before {
//   position: absolute;
//   content: '';
//   border-radius: 0.4375rem;
//   background: var(--color-grey);

//   @include for-desktop-up {
//     top: 20px;
//     left: 50%;
//     height: 325px;
//     width: 900px;
//     transform: translateX(-47%);  
//   }

//   @include for-big-desktop-up {
//     top: 20px;
//     left: 50%;
//     height: 425px;
//     width: 1100px;
//     transform: translateX(-46%);
//   }
// }

/* KNOW WHERE YOU STAND
=============================================== */

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

#know-where-you-stand .content p {

  @include for-desktop-up {
    font-size: 1.1rem;
  }

  @include for-big-desktop-up {
    font-size: 1.625rem;
  }
}

/* INTERACTIVE TOOL
=============================================== */

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

#managing-your-pah {
  background-color: var(--color-grey);

  @include for-desktop-up {
    background-color: unset;
  }
}

#managing-your-pah .content p {
  margin-bottom: 0;
  line-height: 1.3;
  font-size: 1rem;
  font-weight: bold;

  @include for-desktop-up {
    font-size: 1.8rem;
  }

  @include for-desktop-up {
    font-size: 2.1rem;
  }

  @include for-big-desktop-up {
    font-size: 2.4rem;
  }
}

#managing-your-pah::before {
  position: absolute;
  content: '';

  @include for-desktop-up {
    height: 270px;
    width: 600px;
    left: 50%;
    transform: translate(-49%, 90px);
    border-radius: 0.4375rem;
    background: var(--color-grey);
  }

  @include for-big-desktop-up {
    right: 50%;
    height: 290px;
    width: 700px;
    transform: translate(-51%, 100px);
  }
}

/* TREATMENT
=============================================== */

#treatment {
  background-color: var(--color-primary);

  @include for-desktop-up {
    background-color: unset;
  }
}

#treatment .content p {
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 1rem;
  font-weight: bold;

  @include for-desktop-up {
    font-size: 1.8rem;
  }

  @include for-desktop-up {
    font-size: 2.1rem;
  }

  @include for-big-desktop-up {
    font-size: 2.4rem;
  }
}

#treatment .content::before {
  position: absolute;
  content: '';
  border-radius: 0.4375rem;
  background: var(--color-primary);

  @include for-desktop-up {
    left: 50%;
    height: 250px;
    width: 610px;
    transform: translate(-68%, 90px);
  }

  @include for-big-desktop-up {
    left: 50%;
    height: 270px;
    width: 700px;
    transform: translate(-70%, 100px)
  }
}
</style>
