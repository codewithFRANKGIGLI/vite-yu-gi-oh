<template>
    <AppHeader></AppHeader>
    <filterList @searchFilter="getCardsFiltered"></filterList>
    <AppMain></AppMain>
</template>

<script>
    import { store } from "./store.js";
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import filterList from './components/filterList.vue';
    import axios from 'axios';

    export default {
        components: {
            AppHeader,
            AppMain,
            filterList,
        },
        data() {
            return {
                store,
                base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
                cards: null,
                limit: 20,
                offset: 0,
                archetype: '',
            };
        },
        methods: {
            getArchetypeFromApi() {
                axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then((response) => {
                    store.listsArchetype = response.data;    
                })
            },
            getCardsFromApi() {
                axios.get(this.base_url, {
                    params: {
                        offset: this.offset,
                        num: this.limit,
                    },
                })
                .then(response => {
                    store.cards = response.data.data;
                })
            },
            getCardsFiltered() {
                if (store.archetypeSelected !== '') {
                    this.archetype = store.archetypeSelected;
                }
                axios.get(this.base_url, {
                    params: {
                        offset: this.offset,
                        num: this.limit,
                        archetype: this.archetype,
                    },
                })
                .then(response => {
                    store.cards = response.data.data;
                })
            }
        },
        mounted() {
            this.getArchetypeFromApi();
            this.getCardsFromApi();
        },
    };
</script>

<style lang="scss" scoped>

</style>