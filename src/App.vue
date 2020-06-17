<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  :root {
    --dGray: #1a1a1d;
    --lGray: #2a2a2d;
    --dPink: #6F2232;
    --fPink: #950750;
    --rPink: #C3074F;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

</style>
