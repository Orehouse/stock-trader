<template>
  <div class="card">
    <div class="card-header text-white bg-dark">{{stock.name}}</div>
    <div class="card-body">
      <h6 class="card-title">Price: {{stock.price | currency}}</h6>
      <div class="input-group">
        <input
          type="number"
          class="form-control"
          :class="{danger: insufficientFunds}"
          v-model.number="quantity"
        >
        <span class="input-group-btn">
        <button
          class="btn btn-default"
          type="button"
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
        >
          {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
        </button>
   </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "stock",
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: red solid 1px;
  }
</style>
