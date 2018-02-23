<template>
    <div class="board">
        <table-grid v-for="section in sections" :key="section"  :section="section" />
    </div>
</template>

<script>
    import TableGrid from "@/components/TableGrid";

    export default {
        name: "SudokuTable",
        computed: {
            sections() {
                const sections = [];

                for (let i = 0; i < 9; i++) {
                    sections[i] = this.$store.getters.getSection(i);
                }
                return sections;
            }
        },
        components: {
            TableGrid
        }
    };
</script>

<style scoped>
    .board {
        width: 90vw;
        height: 90vw;
        border: 2px solid black;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>
