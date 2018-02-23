<template>
    <div class="cell">{{cell.value}}</div>
</template>

<script>
    export default {
        props: {
            cell: Object
        }
    }
</script>


<style lang="scss" scoped>
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

