<template>
  <transition name="fade" appear>
    <div>
        <PagesHeader />
        <slot />
        <SubFooter v-if="$router.currentRoute.path !== '/mailing-list'"/>
        <Footer />
    </div>
  </transition>
</template>

<script>
export default {

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
