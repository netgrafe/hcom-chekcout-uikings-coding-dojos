<template>
  <div id="app">
    <h1>UIKINGS SUDOKU</h1>
    <SudokuTable v-if="boardLoaded"/>
    <GameOptions />
  </div>
</template>

<script>
import SudokuTable from "./components/SudokuTable";
import ValueSelector from "./components/ValueSelector";
import GameOptions from "./components/GameOptions";
import store from "@/store/store";

export default {
  name: "app",
  components: {
    SudokuTable,
    GameOptions
  },
  store,
  computed: {
    boardLoaded() {
      return this.$store.state.board;
    },
  },
  created() {
    this.$store.dispatch("loadChallenges");
  }
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  background: #fbfaf4;
}

#app {
    max-width: 620px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    margin-top: 4rem;
}
</style>
