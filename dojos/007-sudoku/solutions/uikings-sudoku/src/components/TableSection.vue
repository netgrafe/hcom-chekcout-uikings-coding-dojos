<template>
    <section>
        <Cell v-for="(cell, index) in section" :key="index" :cell="cell" />
    </section>
</template>

<script>
    import Cell from '@/components/Cell';

    export default {
        name: "TableSection",
        components: {
            Cell
        },
        props: {
            section: Array
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

