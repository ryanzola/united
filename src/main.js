// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '~/assets/styles/main.scss';
import '~/assets/styles/_breakpoints.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

import DefaultLayout from '~/layouts/Default.vue'

import ThrowPropsPlugin from './vendor/gsap/ThrowPropsPlugin';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  Vue.config.productionTip = false

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  })
}
