<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';



export default {

  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,

  },
  methods: {
    getCardFromApi() {
      const queryParams = {
        num: 20,
        offset: 0
      }
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: queryParams
      })
      .then((response) => {
        store.cards = response.data.data;
        store.isLoading = false;
      });
    }
  },
  mounted() {
    this.getCardFromApi();
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain v-if="!store.isLoading"></AppMain>
</template>

<style lang="scss">
// @use './assets/scss/partials/app.scss';
</style>