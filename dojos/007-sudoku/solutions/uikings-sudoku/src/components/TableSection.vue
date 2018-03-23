<template>
    <section>
        <Cell v-for="(cell, index) in section" :key="index" :cell="cell" @click.native="selectCell(cell)"/>
    </section>
</template>

<script>
    import Cell from '@/components/Cell';
    import { mapMutations } from 'vuex';

    export default {
        name: "TableSection",
        components: {
            Cell
        },
        props: {
            section: Array
        },
        methods: {
            ...mapMutations([
                'selectCell'
            ])
        }
    }
</script>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 0;
        border: 2px solid #000;
    }
</style>

