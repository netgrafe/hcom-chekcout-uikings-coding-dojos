<template>
    <div class="cell" :class="stateClass">{{cell.value}}</div>
</template>

<script>
    export default {
        props: {
            cell: Object
        },
        computed: {
            stateClass() {
                return this.cell.appearance + (this.cell.isReadOnly ? ' read-only' : '');
            }
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
        font-size: 1.2rem;
        cursor: text;
        user-select: none;
    }

    .read-only {
        font-weight: bold;
        cursor: pointer;

    }

    .cell:nth-child(3n+1), .cell:nth-child(3n+2) {
        border-right-width: 2px;
    }

    .cell:nth-child(n+4) {
        border-top-width: 2px;
    }

    .grouped {
        background-color: #9E3336;
        color: #FFF;
        font-weight: bold;
    }

    .focused {
        background-color: #D3E9E9;
    }

    .highlighted {
        background-color: #E0EFED;
    }

    .invalid {
        background-color: #FFF228;
        position: relative;
        &:after {
            position: absolute;
            content: '!';
            font-weight: bold;
            font-size: 2.2rem;
        }
    }
</style>

