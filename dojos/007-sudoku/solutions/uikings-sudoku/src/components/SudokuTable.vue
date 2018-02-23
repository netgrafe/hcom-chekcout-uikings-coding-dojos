<template>
    <div class="board">
        <table-section v-for="(section, index) in sections" :key="index"  :section="section" />
    </div>
</template>

<script>
    import TableSection from "@/components/TableSection";

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
            TableSection
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
