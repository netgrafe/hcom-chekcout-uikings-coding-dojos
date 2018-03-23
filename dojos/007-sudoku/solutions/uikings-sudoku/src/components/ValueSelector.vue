<template>
    <button :class="{ inactive: selector.numberOfOccurences === 9 }" @click="registerSelectedNumber(selector)">{{ selector.value }}</button>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'ValueSelector',
    props: {
        selector: Object
    },
    methods: {
        ...mapActions(['registerSelectedNumber'])
    }
};
</script>

<style lang="scss" scoped>
    button {
        cursor: pointer;
        padding: 16px;
        margin: 0 4px 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        min-width: 3rem;
        background: #3aa0a3;
        color: #fff;
        border-radius: 4px;
        border: 0;
        box-sizing: border-box;
        font-weight: bold;

        &:hover {
            background: darken(#3aa0a3, 10);
        }

        &:active {
            background: #9E3336;
            outline: none;
        }

        &.inactive {
            background: #888;
            outline: none;
        }
    }


</style>
