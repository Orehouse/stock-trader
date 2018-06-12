<template>
  <div class="col-md-12">
    <div class="card-columns">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
    <div class="alert alert-primary col-md-12" role="alert" v-show="stocks.length === 0">
      Your portfolio is empty
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock';

  export default {
    name: "portfolio",
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>
