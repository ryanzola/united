<template>
  <transition name="fade" appear>
    <div>
      <Header />
      <slot/>
      <SubFooter />
      <Footer />
    </div>
  </transition>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style>
.fade-enter-active {
  transition: opacity 500ms;
}

.fade-enter {
  opacity: 0;
}
</style>
