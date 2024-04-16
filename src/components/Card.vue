<script>
import { store } from '../store.js';

export default {
    name: 'Card',
    props: {
        card: Object
    },    
    data() {
        return {
            store
        }
    },
}
</script>



<template>
    <div class="col p-2">
        <div class="card text-center">
            <img :src="card.card_images[0].image_url" alt="card.name">
            <div class="body-card d-flex flex-column align-items-center justify-content-center p-3">
                <div class="title text-white text-uppercase">
                    {{ card.name }}
                </div>
                <div>{{ card.archetype }}</div>
            </div>
        </div>
        <!-- /.card -->
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/Card.scss' as *;
</style>