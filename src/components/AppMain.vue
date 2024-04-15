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
    <section class="cards-list">
        <div class="container">
            <div class="card">
                <Card></Card>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppMain.scss' as *;
</style>