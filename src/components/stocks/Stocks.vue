<template>
  <div class="col-md-12">
    <div class="card-columns">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock';

  export default {
    name: "stocks",
    components: {
      appStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>
