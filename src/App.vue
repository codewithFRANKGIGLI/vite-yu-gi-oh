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
    getCardsFromApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        store.cards = response.data;
        store.isLoading = false;
      });
    }
  },
  mounted() {
    this.getCardsFromApi();
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain v-if="!store.isLoading"></AppMain>
</template>

<style></style>