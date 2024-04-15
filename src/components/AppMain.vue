<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
    name: 'AppMain',
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <section class="card-list">
        <div class="container py-5">
            <div class="row justify-content-center pb-3 g-3">
                <Card v-for="card in store.cards" :key="card.id" :cardInfo="card"></Card>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>