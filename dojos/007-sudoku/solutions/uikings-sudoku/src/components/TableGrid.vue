<template>
    <div class="block">
        <div v-for="i in 9" :key="i" class="cell">{{i}}</div>
    </div>
</template>

<script>
export default {
    name: "TableGrid",
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
    background-color: limegreen;
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

