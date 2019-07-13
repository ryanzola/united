<template>
  <Layout>
    <section id="join-our-mailinglist" class="py-5 my-5">
      <b-container id="form-container">
        <b-row class="mb-5">
          <b-col sm="3" class="mr-lg-4">
            <img src="../assets/ut-email.png" alt="icon with a paper airplane" class="w-100">
          </b-col>
          <b-col sm="7">
            <h1 class="title mb-5">Join The United Therapeutics Newsletter</h1>
            <h4 class="font-weight-bold">Subscribe to our newsletter and we’ll provide you with helpful information and updates about PAH treatments, tips, live events, specialty pharmacy services, and more.</h4>
          </b-col>
        </b-row>


        <b-row>
          <b-form @submit="onSubmit" @reset="onReset" class="col-lg-8 offset-lg-2">
            <p class="mb-5"><sup>*</sup>Note: All fields are required.</p>
            <b-form-group
              id="first-name-group"
              label="First Name"
              label-for="first-name"
              label-size="lg"
              label-cols-sm="3">
              <b-form-input
              id="first-name"
              v-model="form.firstName"
              type="text"
              required
              />
            </b-form-group>

            <b-form-group
              id="last-name-group"
              label="Last Name"
              label-for="last-name"
              label-size="lg"
              label-cols-sm="3">
              <b-form-input
              id="last-name"
              v-model="form.lastName"
              type="text"
              required
              />
            </b-form-group>

            <b-form-group
              id="mailing-address-1-group"
              label="Mailing Address"
              label-for="mailing-address-1"
              label-size="lg"
              label-cols-sm="3">
              <b-form-input
              id="mailing-address-1"
              v-model="form.address1"
              type="text"
              required
              />
            </b-form-group>

            <b-form-group
              id="mailing-address-2-group"
              label="Mailing Address 2"
              label-for="mailing-address-2"
              label-size="lg"
              label-cols-sm="3">
              <b-form-input
              id="mailing-address-2"
              v-model="form.address2"
              type="text"
              />
            </b-form-group>

            <b-row>
              <b-col sm="6">
                <b-form-group 
                  id="city-group"
                  label="City"
                  label-for="city"
                  label-size="lg"
                  label-cols-sm="2">
                  <b-form-input
                  id="city"
                  v-model="form.city"
                  type="text"
                  required
                  />
                    
                </b-form-group>
              </b-col>

              <b-col sm="6">
                <b-form-group 
                  id="state-group"
                  label="State"
                  label-for="state"
                  label-size="lg"
                  label-cols-sm="3">
                    <b-form-select v-model="form.state" :options="states"></b-form-select>

                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="6">
                <b-form-group 
                  id="zip-group"
                  label="Zip"
                  label-for="zip"
                  label-size="lg"
                  label-cols-sm="2">
                  <b-form-input
                  id="zip"
                  v-model="form.zip"
                  type="number"
                  required
                  />
                </b-form-group>
              </b-col>

              <b-col sm="6">
                <b-form-group 
                  id="phone-group"
                  label="Phone"
                  label-for="phone"
                  label-size="lg"
                  label-cols-sm="3">
                  <b-form-input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  />
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group
              id="email-group"
              label="E-mail Address"
              label-for="email"
              label-size="lg"
              label-cols-sm="3">
              <b-form-input
              id="email"
              v-model="form.email"
              :state="emailValidation"
              type="email"
              required
              />
              <b-form-invalid-feedback :state="emailValidation">
                The emails do not match
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="email-confirm-group"
              label="Confirm E-mail Address"
              label-for="email-confirm"
              label-size="lg"
              label-cols-sm="3">
              <b-form-input
              id="email"
              v-model="emailConfirm"
              :state="emailValidation"
              type="email"
              required
              />
            </b-form-group>

            <b-col class="consent pt-5 pb-5 pl-5 pr-5 pr-lg-0">
              <div class="consent-content">
                <h4 class="font-weight-bold">I am at least 18 years old.</h4>

                <b-row class="my-5">
                  <b-col><b-button class="w-100 ut-btn" @click="onConsent(true)">Yes</b-button></b-col>
                  <b-col><b-button class="w-100 ut-btn" @click="onConsent(false)">No</b-button></b-col>
                  <input type="checkbox" name="consent" id="age-consent" v-model="form.ageConsent">
                </b-row>

                <h5 class="font-weight-bold mb-0">United Therapeutics respects your privacy.</h5>
                <p>
                  By clicking SUBMIT, I agree to have my personal information used to provide me with information and resources
                  regarding products, programs, and services related to my condition, including treatment information. Information 
                  sent by United Therapeutics does not take the place of talking to your healthcare provider about your treatment
                  or condition. United Therapeutics, or third parties working on its behalf, will not sell your information or use it for
                  unrelated purposes. If in the future you no longer want to receive these materials or participate in these programs,
                  please call 877-948-9137. You can unsubscribe at any time by clicking the link at the bottom of the page. 
                </p>
                <p>For more information, please review our <g-link to="/privacy-policy" class="text-secondary">Privacy Policy</g-link>.</p>
              </div>
            </b-col>

            <b-col sm="10" offset-sm="1" class=" p-0 p-sm-3 mt-4">
              <b-button type="submit" class="ut-btn ut-btn-secondary w-100">SUBMIT</b-button>
            </b-col>
          </b-form>
        </b-row>
      </b-container>
    </section><!-- join-our-mailinglist -->
  </Layout>
</template>

<script>
import Layout from '~/layouts/Pages.vue';
import states from "~/data/states.js";

export default {
  metaInfo: {
    title: 'Join Our Mailing List'
  },
  components: {
    Layout
  },
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null,
        email: null,
        ageConsent: null
      },
      emailConfirm: null,
      cities: [{value: null, text: ''}, {value: null, text: 'huh'}],
      states: [{value: null, text: ''}, ...states]
    }
  },
  computed: {
    emailValidation() {
      return this.emailConfirm === null ? null : this.form.email === this.emailConfirm;
    }
  },
  methods: {
    onReset(event) {
      event.preventDefault();
      this.form.firstName = '';
      this.form.familyName = '';
      this.form.address1 = '';
      this.form.address2 = '';
      this.form.city = '';
      this.form.state = null;
      this.form.zip = '';
      this.form.email = '';
      this.form.ageConsent = null;
      this.emailConfirm = '';

      // reset / clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      })
    },
    onConsent(answer) {
      console.log(answer);
      this.form.ageConsent = answer;
    },
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form);
      console.log(this.$options.emailConfirm);
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_breakpoints.scss';

#join-our-mailinglist {
  background-color: var(--color-primary);

  @include for-desktop-up {
    background-color: unset;
  }
}

#form-container::before {
  @include for-desktop-up {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: var(--color-primary);
    border-radius: 0.4375rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -47%);
    height: 95%;
    width: 70%;
  }
}

form button[type="submit"] {
  max-width: 100%;
  padding: 0.75rem
}
.consent {
  background-color: white;
  border-radius: 0.4375rem;
  display: flex;
  justify-content: flex-end;

  @include for-desktop-up {
    border-radius: 0.4375rem 0 0 0.4375rem;  
  }
}
.consent::before {

  @include for-desktop-up {
    height: 100%;
    width: 25%;
    top: 0;
    right: -25%;
    position: absolute;
    content: '';
    background-color: white;
    border-radius: 0 0.4375rem 0.4375rem 0;  
  }
}

.consent #age-consent {
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: 1px;
  visibility: hidden;
  transform: translateX(-100vw);
  pointer-events: none;
}

.consent .ut-btn {
  max-width: 100%;
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: black;
  transition: filter 200ms ease;

  &:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    filter: brightness(90%);
  }
}

.consent a {
  text-decoration: underline;
}


</style>