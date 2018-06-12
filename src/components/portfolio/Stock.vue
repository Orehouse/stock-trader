<template>
  <div class="card">
    <div class="card-header text-white bg-success">{{stock.name}}</div>
    <div class="card-body">
      <h6 class="card-title">Price: {{stock.price | currency}} | Quantity: {{stock.quantity}}</h6>
      <div class="input-group">
        <input
          type="number"
          class="form-control"
          v-model.number="quantity"
          :class="{danger: insufficientQuantity}"
        >
        <span class="input-group-btn">
        <button
          class="btn btn-default"
          type="button"
          @click="sellStock"
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
        >
          {{insufficientQuantity ? 'Insufficient Quantity' : 'Sell'}}
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
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch("sellStock", order);
        this.quantity = 0;
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: red solid 1px;
  }
</style>
