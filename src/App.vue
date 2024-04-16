<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import filterList from './components/filterList.vue';


export default {

  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppMain,
    AppHeader,
    filterList
  }

}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>