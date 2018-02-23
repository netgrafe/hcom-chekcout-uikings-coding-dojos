<template>
    <div class="block">
        <div v-for="cell in section" :key="cell.x + cell.y" class="cell">{{cell.value}}</div>
    </div>
</template>

<script>
export default {
    name: "TableGrid",
    props: {
        section: Array
    },
    data () {
        return {
            i: null
        }
    }
}
</script>

<style>
.block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 0;
    border: 2px solid #000;
}
.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-style: solid;
    border-color: #ddd;
    border-width: 0;
}
.cell:nth-child(3n+1), .cell:nth-child(3n+2) {
    border-right-width: 2px;
}
.cell:nth-child(n+4) {
    border-top-width: 2px;
}
</style>

