<script>
import { store } from '../store.js'
import selectArchetype from '../components/selectArchetype.vue';
export default {
    name: 'filterList',
    emits: ['searchFilter'],
    components: {
        selectArchetype,
    },
    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <div class="pb-3">
        <select name="choose_archetype" id="choose_archetype" @change="$emit('searchFilter')"
            v-model="store.archetypeSelected">
            <selectArchetype v-for="filter in store.listsArchetype" :type="filter.archetype_name" />
        </select>
    </div>
</template>


<style lang="scss" scoped></style>