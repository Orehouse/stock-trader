<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" tag="a" to="/">Stock Trader</router-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mr-auto">
        <router-link to="/portfolio" class="nav-item nav-link" active-class="active">Portfolio</router-link>
        <router-link to="/stocks" class="nav-item nav-link" active-class="active">Stocks</router-link>
      </div>
      <div class="navbar-nav ml-auto">
        <a href="#" class="nav-item nav-link" @click.prevent="endDay">End Day</a>
        <div class="nav-item dropdown" :class="[dropdownClass]">
          <a class="nav-link dropdown-toggle"
             href="#"
             @click.prevent="isDropdownOpen = !isDropdownOpen"
             v-click-outside="closeDropdown"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" :class="[dropdownClass]" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click.prevent="saveData">Save</a>
            <a class="dropdown-item" href="#" @click.prevent="loadData">Load</a>
          </div>
        </div>
        <strong class="navbar-text">Funds: {{funds | currency}}</strong>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "header",
    data() {
      return {
        isDropdownOpen: false
      }
    },
    methods: {
      ...mapActions([
        'randomizeStocks'
      ]),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.$store.dispatch("loadData");
      },
      closeDropdown(event) {
        this.isDropdownOpen = false;
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      dropdownClass() {
        return this.isDropdownOpen ? "show" : "";
      }
    },
  }
</script>
