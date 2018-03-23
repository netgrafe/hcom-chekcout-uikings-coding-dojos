<template>
    <div>
        <div class="board">
            <table-section v-for="(section, index) in sections" :key="index"  :section="section" />
        </div>
        <div class="value-selectors">
            <value-selector v-for="(selector, index) in valueSelectors"
                    :key="index" :selector="selector" />
        </div>
    </div>
</template>

<script>
    import TableSection from '@/components/TableSection';
    import ValueSelector from '@/components/ValueSelector';
    import { mapGetters } from 'vuex';

    export default {
        name: "SudokuTable",
        computed: {
            sections() {
                const sections = [];

                for (let i = 0; i < 9; i++) {
                    sections[i] = this.$store.getters.getSection(i);
                }
                return sections;
            },
            ...mapGetters([
                'valueSelectors'
            ])
        },
        components: {
            TableSection,
            ValueSelector
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
        max-width: 600px;
        max-height: 600px;
        margin: 1rem auto;
    }

    .value-selectors {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
