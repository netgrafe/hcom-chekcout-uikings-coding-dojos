<template>
  <div id="app">
    <h1>UIKINGS SUDOKU</h1>
    <SudokuTable v-if="boardLoaded"/>
    <NumberSelector />
    <GameOptions />
  </div>
</template>

<script>
import SudokuTable from "./components/SudokuTable";
import NumberSelector from "./components/NumberSelector";
import GameOptions from "./components/GameOptions";
import store from "@/store/store";

export default {
  name: "app",
  components: {
    SudokuTable,
    NumberSelector,
    GameOptions
  },
  store,
  computed: {
      boardLoaded () {
          return this.$store.state.board;
      }
  },
  created() {
      this.$store.dispatch('loadChallenges');
  }
};
</script>

<style>

</style>
