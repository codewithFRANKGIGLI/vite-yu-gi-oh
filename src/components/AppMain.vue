<script>
    import { store } from '../store.js';
    import selectArchetype from './selectArchetype.vue';
    import filterList from './filterList.vue';
    import counterCardFound from './counterCardFound.vue';
    import Card from './Card.vue';
    export default {
        name: 'AppMain',
        components: {
            selectArchetype,
            filterList,
            counterCardFound,
            Card,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
        },
    }
</script>

<template>
    <main class="p-3">
        <div v-if="store.cards" class="container">

            <div class="container px-0 bg-white">

                <!-- COUNTER -->
                <div id="cards_found" class="p-2 text-white">
                    <counterCardFound />
                </div>

                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 p-4">
                    <Card v-for="card in store.cards" :card="card"/>
                </div>
                <!-- /.row -->

            </div>
        </div>
        <!-- /.container -->

        <div v-else>Loading</div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>