<template>
  <transition name="fade" appear>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
  </transition>
</template>

<script>
import Header from '../components/PagesHeader';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
