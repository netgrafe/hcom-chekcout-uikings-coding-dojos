<template>
  <div id="app">
    <h1>UIKINGS SUDOKU</h1>
    <SudokuTable v-if="boardLoaded"/>
    <GameOptions />
    <finish-screen v-if="gameEnded"/>
  </div>
</template>

<script>
import SudokuTable from "./components/SudokuTable";
import ValueSelector from "./components/ValueSelector";
import GameOptions from "./components/GameOptions";
import FinishScreen from "./components/FinishScreen";
import store from "@/store/store";
import { mapGetters } from 'vuex';

export default {
  name: "app",
  components: {
    SudokuTable,
    GameOptions,
    FinishScreen
  },
  store,
  computed: {
    boardLoaded() {
      return this.$store.state.board;
    },
    ...mapGetters(['gameEnded'])
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
