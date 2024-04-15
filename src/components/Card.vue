<script>

export default {
    name: 'Card',
    props: {
        cardInfo: Object
    },
    data() {
        return {
        }
    },

}
</script>

<template>
    <div class="col p-2">
        <div class="card text-center">
            <img :src="cardInfo.card_images[0].images_url_small" alt="cardInfo.name">
            <div class="body-card d-flex flex-column align-items-center justify-content-center p-3">
                <div class="title text-white text-uppercase">
                    {{ cardInfo.name }}
                </div>
                <div>{{ cardInfo.race }}</div>
            </div>
        </div>
        <!-- /.card -->
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/Card.scss' as *;
</style>