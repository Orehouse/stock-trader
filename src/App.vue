<template>
  <div class="container" id="stock-app">
    <app-header></app-header>
    <div class="container row mt-2">
      <transition name="custom-classes-transition"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
  #stock-app .animated {
    animation-duration: 0.2s;
  }
</style>
