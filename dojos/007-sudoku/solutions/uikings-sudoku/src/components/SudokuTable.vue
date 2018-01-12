<template>
    <div class="board">
        <TableGrid v-for="i in 9" :key="i" />
    </div>
</template>

<script>
import TableGrid from "@/components/TableGrid";
export default {
  name: "SudokuTable",
  data() {
    return {
      i: null
    };
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
