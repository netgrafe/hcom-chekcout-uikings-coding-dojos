<template>
  <div id="app">
    <h1>UIKINGS SUDOKU</h1>
    <SudokuTable />
    <NumberSelector />
    <GameOptions />
  </div>
</template>

<script>
import SudokuTable from './components/SudokuTable';
import NumberSelector from './components/NumberSelector';
import GameOptions from './components/GameOptions';

export default {
  name: 'app',
  components: {
    SudokuTable,
    NumberSelector,
    GameOptions
  }
}
</script>

<style>
</style>
